import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Save,
  Send,
  ArrowLeft,
  Image as ImageIcon,
  Upload,
  Link2,
  Trash2,
  Eye,
  FileText,
  Calendar,
  User as UserIcon,
  Settings
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  getBlogPostById,
  saveBlogPost,
  deleteBlogPost,
  generateSlug,
  getUserProfile,
  BlogPost
} from '../utils/localStorage';
import { toast } from 'sonner@2.0.3';

interface BlogPostBuilderProps {
  postId?: string;
  onBack: () => void;
  onProfileSettings: () => void;
}

export function BlogPostBuilder({ postId, onBack, onProfileSettings }: BlogPostBuilderProps) {
  const [post, setPost] = useState<Partial<BlogPost>>({
    title: '',
    excerpt: '',
    content: '',
    category: 'Market Updates',
    imageUrl: '',
    readTime: '5 min read',
    status: 'draft'
  });
  const [imageInputMethod, setImageInputMethod] = useState<'url' | 'upload'>('url');
  const [imageUrl, setImageUrl] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    if (postId) {
      const existingPost = getBlogPostById(postId);
      if (existingPost) {
        setPost(existingPost);
        setImageUrl(existingPost.imageUrl);
      }
    }
  }, [postId]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImageUrl(result);
        setPost({ ...post, imageUrl: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrlChange = (url: string) => {
    setImageUrl(url);
    setPost({ ...post, imageUrl: url });
  };

  const handleSave = (status: 'draft' | 'published') => {
    if (!post.title?.trim()) {
      toast.error('Please add a title');
      return;
    }

    if (!post.content?.trim()) {
      toast.error('Please add content');
      return;
    }

    setIsSaving(true);

    const profile = getUserProfile();
    const now = new Date().toISOString();
    const slug = generateSlug(post.title);

    const blogPost: BlogPost = {
      id: postId || `post-${Date.now()}`,
      title: post.title,
      slug,
      excerpt: post.excerpt || post.content.substring(0, 150) + '...',
      content: post.content,
      category: post.category || 'Market Updates',
      imageUrl: post.imageUrl || '',
      date: post.date || new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      readTime: post.readTime || '5 min read',
      status,
      author: {
        name: profile.name,
        avatar: profile.avatar,
        bio: profile.bio
      },
      createdAt: post.createdAt || now,
      updatedAt: now
    };

    try {
      saveBlogPost(blogPost);
      toast.success(status === 'published' ? 'Post published!' : 'Draft saved!');
      setTimeout(() => {
        setIsSaving(false);
        onBack();
      }, 500);
    } catch (error) {
      toast.error('Failed to save post');
      setIsSaving(false);
    }
  };

  const handleDelete = () => {
    if (postId && confirm('Are you sure you want to delete this post?')) {
      deleteBlogPost(postId);
      toast.success('Post deleted');
      onBack();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={onBack} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#507A56]" />
              <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.25rem' }}>
                {postId ? 'Edit Post' : 'New Blog Post'}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={onProfileSettings} className="gap-2">
              <Settings className="w-4 h-4" />
              Profile
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowPreview(!showPreview)}
              className="gap-2"
            >
              <Eye className="w-4 h-4" />
              {showPreview ? 'Edit' : 'Preview'}
            </Button>
            <Button
              variant="outline"
              onClick={() => handleSave('draft')}
              disabled={isSaving}
              className="gap-2"
            >
              <Save className="w-4 h-4" />
              Save Draft
            </Button>
            <Button
              onClick={() => handleSave('published')}
              disabled={isSaving}
              className="gap-2"
              style={{
                background: 'linear-gradient(135deg, #8fc295 0%, #507A56 100%)',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600
              }}
            >
              <Send className="w-4 h-4" />
              Publish
            </Button>
            {postId && (
              <Button variant="destructive" onClick={handleDelete} className="gap-2">
                <Trash2 className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {!showPreview ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Editor */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="p-6">
                  <div className="space-y-6">
                    {/* Title */}
                    <div>
                      <Input
                        type="text"
                        value={post.title}
                        onChange={(e) => setPost({ ...post, title: e.target.value })}
                        placeholder="Enter post title..."
                        className="text-3xl border-0 px-0 focus-visible:ring-0"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                      />
                    </div>

                    {/* Excerpt */}
                    <div>
                      <label className="block mb-2 text-sm" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                        Excerpt
                      </label>
                      <Textarea
                        value={post.excerpt}
                        onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
                        placeholder="Brief summary of the post..."
                        rows={2}
                        className="w-full"
                      />
                    </div>

                    {/* Content Editor */}
                    <div>
                      <label className="block mb-2 text-sm" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                        Content
                      </label>
                      <Textarea
                        value={post.content}
                        onChange={(e) => setPost({ ...post, content: e.target.value })}
                        placeholder="Write your post content here..."
                        rows={20}
                        className="w-full font-mono"
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        💡 Tip: You can use markdown-style formatting
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Status */}
                <Card className="p-6">
                  <h3 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                    Status
                  </h3>
                  <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                    {post.status === 'published' ? 'Published' : 'Draft'}
                  </Badge>
                </Card>

                {/* Post Settings */}
                <Card className="p-6">
                  <h3 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                    Settings
                  </h3>
                  <div className="space-y-4">
                    {/* Category */}
                    <div>
                      <label className="block mb-2 text-sm" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                        Category
                      </label>
                      <Select
                        value={post.category}
                        onValueChange={(value) => setPost({ ...post, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Market Updates">Market Updates</SelectItem>
                          <SelectItem value="First-Time Buyers">First-Time Buyers</SelectItem>
                          <SelectItem value="Refinancing">Refinancing</SelectItem>
                          <SelectItem value="Investment">Investment</SelectItem>
                          <SelectItem value="Tips & Advice">Tips & Advice</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Read Time */}
                    <div>
                      <label className="block mb-2 text-sm" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                        Read Time
                      </label>
                      <Input
                        type="text"
                        value={post.readTime}
                        onChange={(e) => setPost({ ...post, readTime: e.target.value })}
                        placeholder="5 min read"
                      />
                    </div>
                  </div>
                </Card>

                {/* Featured Image */}
                <Card className="p-6">
                  <h3 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                    Featured Image
                  </h3>

                  <Tabs value={imageInputMethod} onValueChange={(v) => setImageInputMethod(v as 'url' | 'upload')}>
                    <TabsList className="grid w-full grid-cols-2 mb-4">
                      <TabsTrigger value="url" className="gap-2">
                        <Link2 className="w-4 h-4" />
                        URL
                      </TabsTrigger>
                      <TabsTrigger value="upload" className="gap-2">
                        <Upload className="w-4 h-4" />
                        Upload
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="url">
                      <Input
                        type="url"
                        value={imageUrl}
                        onChange={(e) => handleImageUrlChange(e.target.value)}
                        placeholder="https://example.com/image.jpg"
                      />
                    </TabsContent>

                    <TabsContent value="upload">
                      <div className="border-2 border-dashed rounded-lg p-6 text-center">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="image-upload"
                        />
                        <label
                          htmlFor="image-upload"
                          className="cursor-pointer flex flex-col items-center gap-2"
                        >
                          <ImageIcon className="w-8 h-8 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            Click to upload image
                          </span>
                        </label>
                      </div>
                    </TabsContent>
                  </Tabs>

                  {post.imageUrl && (
                    <div className="mt-4">
                      <img
                        src={post.imageUrl}
                        alt="Preview"
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </div>
                  )}
                </Card>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Preview Mode */
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8">
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-96 object-cover rounded-lg mb-8"
                />
              )}

              <div className="flex items-center gap-4 mb-6">
                <Badge>{post.category}</Badge>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date || new Date().toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>

              <h1 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {post.title || 'Untitled Post'}
              </h1>

              {post.excerpt && (
                <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {post.excerpt}
                </p>
              )}

              <div className="prose max-w-none mb-8" style={{ whiteSpace: 'pre-wrap' }}>
                {post.content || 'No content yet...'}
              </div>

              <div className="border-t pt-6 flex items-center gap-4">
                <UserIcon className="w-10 h-10 text-gray-400" />
                <div>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                    {getUserProfile().name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {getUserProfile().bio}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}
