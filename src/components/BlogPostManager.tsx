import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Plus, Edit, Trash2, Eye, Clock, CheckCircle, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { getAllBlogPosts, deleteBlogPost, BlogPost } from '../utils/localStorage';
import { toast } from 'sonner@2.0.3';

interface BlogPostManagerProps {
  onNewPost: () => void;
  onEditPost: (postId: string) => void;
  onViewPost: (slug: string) => void;
  onBackToHome: () => void;
}

export function BlogPostManager({ onNewPost, onEditPost, onViewPost, onBackToHome }: BlogPostManagerProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'published' | 'draft'>('all');

  const loadPosts = () => {
    const allPosts = getAllBlogPosts();
    setPosts(allPosts.sort((a, b) => 
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    ));
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Delete "${title}"?`)) {
      deleteBlogPost(id);
      loadPosts();
      toast.success('Post deleted');
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === 'published') return matchesSearch && post.status === 'published';
    if (activeTab === 'draft') return matchesSearch && post.status === 'draft';
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Blog Post Manager
              </h1>
              <p className="text-gray-600">
                Create and manage your blog posts
              </p>
            </div>
            <Button
              onClick={onNewPost}
              className="gap-2"
              style={{
                background: 'linear-gradient(135deg, #8fc295 0%, #507A56 100%)',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600
              }}
            >
              <Plus className="w-4 h-4" />
              New Post
            </Button>
          </div>

          {/* Search & Filter */}
          <Card className="p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search posts..."
                  className="pl-10"
                />
              </div>
              <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)}>
                <TabsList>
                  <TabsTrigger value="all">All ({posts.length})</TabsTrigger>
                  <TabsTrigger value="published">
                    Published ({posts.filter(p => p.status === 'published').length})
                  </TabsTrigger>
                  <TabsTrigger value="draft">
                    Drafts ({posts.filter(p => p.status === 'draft').length})
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </Card>

          {/* Posts List */}
          <div className="space-y-4">
            {filteredPosts.length === 0 ? (
              <Card className="p-12 text-center">
                {!searchQuery && posts.length === 0 ? (
                  <>
                    <div className="max-w-2xl mx-auto mb-8 p-6 bg-gradient-to-br from-[#8fc295]/10 to-[#507A56]/10 rounded-lg border border-[#8fc295]/30">
                      <h3 className="mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#507A56' }}>
                        🎉 Welcome to Your Blog Builder!
                      </h3>
                      <p className="text-gray-700 mb-4">
                        You're using the <strong>localStorage demo version</strong>. Your posts are stored in your browser.
                      </p>
                      <div className="text-left space-y-2 text-sm text-gray-600 mb-4">
                        <p>✏️ Create rich blog posts with images</p>
                        <p>📝 Save drafts or publish immediately</p>
                        <p>👤 Set up your author profile in Settings</p>
                        <p>🖼️ Upload images from URL or your computer</p>
                      </div>
                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                        <strong>⚠️ Remember:</strong> This is temporary storage. We'll migrate to Supabase for production!
                      </div>
                    </div>
                    <Button
                      onClick={onNewPost}
                      className="gap-2"
                      style={{
                        background: 'linear-gradient(135deg, #8fc295 0%, #507A56 100%)',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600
                      }}
                    >
                      <Plus className="w-5 h-5" />
                      Create Your First Post
                    </Button>
                  </>
                ) : (
                  <>
                    <p className="text-gray-500 mb-4">No posts found</p>
                    {searchQuery && (
                      <Button onClick={() => setSearchQuery('')} variant="outline">
                        Clear Search
                      </Button>
                    )}
                  </>
                )}
              </Card>
            ) : (
              filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all">
                    <div className="flex gap-6">
                      {/* Thumbnail */}
                      {post.imageUrl && (
                        <div className="flex-shrink-0">
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-32 h-32 object-cover rounded-lg"
                          />
                        </div>
                      )}

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3
                                className="truncate"
                                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                              >
                                {post.title}
                              </h3>
                              <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                                {post.status === 'published' ? (
                                  <CheckCircle className="w-3 h-3 mr-1" />
                                ) : (
                                  <Clock className="w-3 h-3 mr-1" />
                                )}
                                {post.status}
                              </Badge>
                            </div>
                            <p className="text-gray-600 line-clamp-2 mb-2">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span>{post.category}</span>
                              <span>•</span>
                              <span>{post.date}</span>
                              <span>•</span>
                              <span>{post.readTime}</span>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-2">
                            {post.status === 'published' && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => onViewPost(post.slug)}
                                className="gap-2"
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                            )}
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onEditPost(post.id)}
                              className="gap-2"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDelete(post.id, post.title)}
                              className="gap-2 text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}