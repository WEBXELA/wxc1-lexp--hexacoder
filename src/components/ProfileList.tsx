import React, { useState } from 'react';
import { ExternalLink, MapPin, Building, GraduationCap, Users, ChevronDown, ChevronUp, Lock, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Profile } from '../types';
import { useNavigate } from 'react-router-dom';

interface Props {
  profiles: Profile[];
  platform: 'linkedin' | 'instagram' | 'facebook' | 'twitter';
}

export default function ProfileList({ profiles, platform }: Props) {
  const navigate = useNavigate();
  const [expandedProfile, setExpandedProfile] = useState<string | null>(null);
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  const toggleProfile = (profileLink: string) => {
    setExpandedProfile(expandedProfile === profileLink ? null : profileLink);
  };

  const getPlatformText = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return 'LinkedIn';
      case 'instagram':
        return 'Instagram';
      case 'facebook':
        return 'Facebook';
      case 'twitter':
        return 'Twitter';
      default:
        return 'Profile';
    }
  };

  const handleOpenProfile = (link: string) => {
    if (platform === 'facebook' || platform === 'twitter') {
      setShowPremiumModal(true);
    } else {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const shouldShowImage = (platform: string) => {
    return platform === 'linkedin' || platform === 'twitter';
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-8 space-y-4"
      >
        {profiles.map((profile, index) => (
          <motion.div
            key={`${profile.link}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start space-x-4">
              {shouldShowImage(platform) && profile.profileImageUrl && (
                <img 
                  src={profile.profileImageUrl} 
                  alt={profile.fullName}
                  className="w-16 h-16 rounded-full object-cover"
                />
              )}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {profile.fullName || profile.title}
                    </h3>
                    {profile.currentPosition && (
                      <p className="text-gray-600">{profile.currentPosition}</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleProfile(profile.link)}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      {expandedProfile === profile.link ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                    <button
                      onClick={() => handleOpenProfile(profile.link)}
                      className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 px-3 py-1.5 rounded-md hover:bg-blue-50 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">View on {getPlatformText(platform)}</span>
                    </button>
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  {profile.company && (
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Building className="w-4 h-4" />
                      <span>{profile.company}</span>
                    </div>
                  )}
                  {profile.location && (
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{profile.location}</span>
                    </div>
                  )}
                  {profile.education && profile.education.length > 0 && (
                    <div className="flex items-center space-x-2 text-gray-600">
                      <GraduationCap className="w-4 h-4" />
                      <span>{profile.education[0].school} - {profile.education[0].degree}</span>
                    </div>
                  )}
                  {profile.followers > 0 && (
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{profile.followers.toLocaleString()} followers</span>
                    </div>
                  )}
                </div>

                <AnimatePresence>
                  {expandedProfile === profile.link && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-200"
                    >
                      {profile.about && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">About</h4>
                          <p className="text-gray-600">{profile.about}</p>
                        </div>
                      )}

                      {profile.education && profile.education.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Education</h4>
                          <div className="space-y-2">
                            {profile.education.map((edu, i) => (
                              <div key={i} className="text-gray-600">
                                <div className="font-medium">{edu.school}</div>
                                <div>{edu.degree} • {edu.field}</div>
                                <div className="text-sm text-gray-500">{edu.years}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {profile.connectionDegree && (
                        <div className="text-sm text-gray-500">
                          <span className="inline-block px-2 py-1 bg-gray-100 rounded-full">
                            {profile.connectionDegree} connection
                          </span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Premium Modal */}
      <AnimatePresence>
        {showPremiumModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowPremiumModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPremiumModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              {/* Modal Content */}
              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Unlock {platform === 'facebook' ? 'Facebook' : 'Twitter'} Profile Access
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Upgrade to our premium plan to access {platform === 'facebook' ? 'Facebook' : 'Twitter'} profiles and unlock powerful features.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    `Access to ${platform === 'facebook' ? 'Facebook' : 'Twitter'} profiles`,
                    'Advanced search filters',
                    'Bulk export capabilities',
                    'Priority support',
                    'API access',
                    'Team collaboration',
                    'Custom exports',
                    'Analytics dashboard'
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <p className="text-sm text-gray-500 mb-2">Contact us for pricing</p>
                  <p className="text-gray-600">Get a customized plan that fits your needs</p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setShowPremiumModal(false);
                      navigate('/contact');
                    }}
                    className="px-8 py-3 rounded-xl text-white font-medium shadow-lg hover:shadow-blue-500/20 transition-all duration-200 gradient-bg"
                  >
                    Contact Sales
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowPremiumModal(false)}
                    className="px-8 py-3 rounded-xl text-gray-700 font-medium border border-gray-200 hover:bg-gray-50 transition-all duration-200"
                  >
                    Maybe Later
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}