import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { User, Mail, FileText, Image as ImageIcon, Save, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { getUserProfile, saveUserProfile, UserProfile } from '../utils/localStorage';
import { toast } from 'sonner@2.0.3';

interface ProfileSettingsProps {
  onBack: () => void;
}

export function ProfileSettings({ onBack }: ProfileSettingsProps) {
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    bio: '',
    avatar: '',
    email: ''
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const loadedProfile = getUserProfile();
    setProfile(loadedProfile);
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    
    try {
      saveUserProfile(profile);
      toast.success('Profile saved successfully!');
      setTimeout(() => setIsSaving(false), 500);
    } catch (error) {
      toast.error('Failed to save profile');
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6 gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Builder
          </Button>

          <Card className="p-8">
            <h1 className="mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Profile Settings
            </h1>
            <p className="text-gray-600 mb-8">
              Update your author information for blog posts
            </p>

            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name
                </label>
                <Input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email
                </label>
                <Input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full"
                />
              </div>

              {/* Bio */}
              <div>
                <label className="block mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  <FileText className="w-4 h-4 inline mr-2" />
                  Bio
                </label>
                <Textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  placeholder="Brief bio about yourself..."
                  rows={4}
                  className="w-full"
                />
              </div>

              {/* Avatar URL */}
              <div>
                <label className="block mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  <ImageIcon className="w-4 h-4 inline mr-2" />
                  Avatar URL
                </label>
                <Input
                  type="url"
                  value={profile.avatar}
                  onChange={(e) => setProfile({ ...profile, avatar: e.target.value })}
                  placeholder="https://example.com/avatar.jpg"
                  className="w-full"
                />
                {profile.avatar && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-2">Preview:</p>
                    <img
                      src={profile.avatar}
                      alt="Avatar preview"
                      className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                    />
                  </div>
                )}
              </div>

              {/* Save Button */}
              <div className="pt-4 border-t">
                <Button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="gap-2"
                  style={{
                    background: 'linear-gradient(135deg, #8fc295 0%, #507A56 100%)',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600
                  }}
                >
                  <Save className="w-4 h-4" />
                  {isSaving ? 'Saving...' : 'Save Profile'}
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
