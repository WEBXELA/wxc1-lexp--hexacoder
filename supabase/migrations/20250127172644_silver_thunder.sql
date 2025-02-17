/*
  # Final version of user tables and policies

  1. New Tables
    - `subscriptions`
      - Tracks user subscription status and plan details
      - Includes plan type, status, and period information
    
    - `user_searches`
      - Tracks daily search usage per user
      - Enforces search limits for free users

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to manage their own data
    - Ensure data isolation between users
*/

DO $$ 
BEGIN
    -- Drop existing tables if they exist
    DROP TABLE IF EXISTS user_searches CASCADE;
    DROP TABLE IF EXISTS subscriptions CASCADE;
    
    -- Drop existing function and trigger if they exist
    DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;
END $$;

-- Create subscriptions table
CREATE TABLE subscriptions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users NOT NULL,
    plan text NOT NULL DEFAULT 'free',
    status text NOT NULL DEFAULT 'active',
    current_period_start timestamptz NOT NULL DEFAULT now(),
    current_period_end timestamptz NOT NULL DEFAULT (now() + interval '1 year'),
    created_at timestamptz DEFAULT now(),
    UNIQUE(user_id)
);

-- Create user_searches table
CREATE TABLE user_searches (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users NOT NULL,
    search_date date NOT NULL DEFAULT CURRENT_DATE,
    search_count int NOT NULL DEFAULT 0,
    created_at timestamptz DEFAULT now(),
    UNIQUE(user_id, search_date)
);

-- Enable RLS
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_searches ENABLE ROW LEVEL SECURITY;

-- Policies for subscriptions
CREATE POLICY "Users can view own subscription"
    ON subscriptions
    FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);

CREATE POLICY "Users can update own subscription"
    ON subscriptions
    FOR UPDATE
    TO authenticated
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own subscription"
    ON subscriptions
    FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = user_id);

-- Policies for user_searches
CREATE POLICY "Users can view own searches"
    ON user_searches
    FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);

CREATE POLICY "Users can update own searches"
    ON user_searches
    FOR UPDATE
    TO authenticated
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own searches"
    ON user_searches
    FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = user_id);

-- Function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS trigger 
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO public.subscriptions (
        user_id,
        plan,
        status,
        current_period_start,
        current_period_end
    ) VALUES (
        new.id,
        'free',
        'active',
        now(),
        now() + interval '1 year'
    );
    RETURN new;
END;
$$;

-- Create trigger for new user registration
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user();

-- Insert initial data for existing users
INSERT INTO subscriptions (user_id, plan, status, current_period_start, current_period_end)
SELECT 
    id as user_id,
    'free' as plan,
    'active' as status,
    now() as current_period_start,
    now() + interval '1 year' as current_period_end
FROM auth.users
WHERE id NOT IN (SELECT user_id FROM subscriptions)
ON CONFLICT (user_id) DO NOTHING;