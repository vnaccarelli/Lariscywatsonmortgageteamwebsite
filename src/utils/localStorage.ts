// localStorage utilities for blog posts and profile

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
  date: string;
  readTime: string;
  status: 'draft' | 'published';
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile {
  name: string;
  bio: string;
  avatar: string;
  email: string;
}

const BLOG_POSTS_KEY = 'mortgage_blog_posts';
const USER_PROFILE_KEY = 'mortgage_user_profile';

// Blog Post Functions
export const getAllBlogPosts = (): BlogPost[] => {
  if (typeof window === 'undefined') return [];
  const posts = localStorage.getItem(BLOG_POSTS_KEY);
  return posts ? JSON.parse(posts) : [];
};

export const getPublishedBlogPosts = (): BlogPost[] => {
  return getAllBlogPosts().filter(post => post.status === 'published');
};

export const getBlogPostById = (id: string): BlogPost | null => {
  const posts = getAllBlogPosts();
  return posts.find(post => post.id === id) || null;
};

export const getBlogPostBySlug = (slug: string): BlogPost | null => {
  const posts = getAllBlogPosts();
  return posts.find(post => post.slug === slug) || null;
};

export const saveBlogPost = (post: BlogPost): void => {
  const posts = getAllBlogPosts();
  const existingIndex = posts.findIndex(p => p.id === post.id);
  
  if (existingIndex >= 0) {
    posts[existingIndex] = { ...post, updatedAt: new Date().toISOString() };
  } else {
    posts.push(post);
  }
  
  localStorage.setItem(BLOG_POSTS_KEY, JSON.stringify(posts));
};

export const deleteBlogPost = (id: string): void => {
  const posts = getAllBlogPosts();
  const filtered = posts.filter(post => post.id !== id);
  localStorage.setItem(BLOG_POSTS_KEY, JSON.stringify(filtered));
};

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// User Profile Functions
export const getUserProfile = (): UserProfile => {
  if (typeof window === 'undefined') {
    return {
      name: 'Marketer',
      bio: 'Mortgage content specialist',
      avatar: '',
      email: ''
    };
  }
  
  const profile = localStorage.getItem(USER_PROFILE_KEY);
  return profile ? JSON.parse(profile) : {
    name: 'Marketer',
    bio: 'Mortgage content specialist',
    avatar: '',
    email: ''
  };
};

export const saveUserProfile = (profile: UserProfile): void => {
  localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
};
