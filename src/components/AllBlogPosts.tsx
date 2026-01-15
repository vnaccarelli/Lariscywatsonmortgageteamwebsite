"use client";

import { motion } from "motion/react";
import { useState, useMemo } from "react";
import { ArrowLeft, Search, X } from "lucide-react";
import { blogPosts, BlogPostData } from "../constants/blogData";

interface AllBlogPostsProps {
  onBackToHome: () => void;
  onReadPost: (postId: number) => void;
}

const categories = [
  "All Posts",
  "Credit",
  "First Time Homebuyers",
  "Homebuying Tips",
  "Interest Rates",
  "Newsletter",
  "Mortgage Market",
];

export function AllBlogPosts({ onBackToHome, onReadPost }: AllBlogPostsProps) {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    // Filter by category
    if (activeCategory !== "All Posts") {
      filtered = filtered.filter((post) => post.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-white border-b border-[var(--border)] sticky top-0 z-40 backdrop-blur-sm bg-white/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <motion.button
            onClick={onBackToHome}
            whileHover={{ scale: 1.02, x: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 text-[#507A56] hover:text-[#8fc295] transition-colors"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </motion.button>
        </div>
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="bg-gradient-to-br from-[#f9fafb] to-white py-16 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              style={{ 
                fontFamily: "'Poppins', sans-serif", 
                fontWeight: 600, 
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                color: "#8fc295"
              }}
            >
              Our Blog
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: "2.5rem",
                lineHeight: "3rem",
                color: "#111928",
                marginTop: "0.75rem",
                marginBottom: "1rem"
              }}
              className="md:text-[3rem] md:leading-[3.5rem]"
            >
              Housing Pulse
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                color: "#637381"
              }}
            >
              Expert insights, market updates, and homebuying tips from our team of mortgage professionals.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="mt-8 relative max-w-xl mx-auto"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#637381] w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 rounded-lg border-2 border-[var(--border)] focus:border-[#8fc295] focus:outline-none transition-colors"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1rem",
                  lineHeight: "1.5rem"
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#637381] hover:text-[#111928] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="bg-white border-b border-[var(--border)] sticky top-[73px] z-30 backdrop-blur-sm bg-white/95"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-2 items-center justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{
                  scale: activeCategory === category ? 1 : 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  duration: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-lg transition-all ${
                  activeCategory === category
                    ? "bg-[#8fc295] text-white shadow-md"
                    : "bg-[#f9fafb] text-[#637381] hover:bg-[#8fc295]/10 hover:text-[#507A56]"
                }`}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem"
                }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Blog Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.35 }}
            className="mb-8"
          >
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.95rem",
                lineHeight: "1.5rem",
                color: "#637381"
              }}
            >
              Showing <span className="font-semibold text-[#111928]">{filteredPosts.length}</span>{" "}
              {filteredPosts.length === 1 ? "article" : "articles"}
              {searchQuery && (
                <>
                  {" "}for "<span className="font-semibold text-[#111928]">{searchQuery}</span>"
                </>
              )}
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} onReadPost={onReadPost} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-center py-20"
            >
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1.125rem",
                  lineHeight: "1.75rem",
                  color: "#637381"
                }}
              >
                No articles found. Try adjusting your search or filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

interface BlogCardProps {
  post: BlogPostData;
  index: number;
  onReadPost: (postId: number) => void;
}

function BlogCard({ post, index, onReadPost }: BlogCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.05,
      },
    },
  };

  return (
    <motion.article variants={cardVariants}>
      <motion.div
        whileHover={{
          y: -4,
          boxShadow: "0px 12px 40px 0px rgba(0,0,0,0.12)",
        }}
        transition={{
          duration: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="bg-white rounded-xl overflow-hidden shadow-md border border-[var(--border)] h-full flex flex-col cursor-pointer"
        onClick={() => onReadPost(post.id)}
      >
        {/* Featured Image */}
        <div className="h-48 overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-3 flex-grow">
          {/* Category and Read Time */}
          <div className="flex items-center justify-between gap-2">
            <span
              className="px-3 py-1 bg-[#8fc295]/10 text-[#507A56] rounded-full"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                lineHeight: "1rem"
              }}
            >
              {post.category}
            </span>
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.75rem",
                lineHeight: "1rem",
                color: "#637381"
              }}
            >
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "1.25rem",
              lineHeight: "1.75rem",
              color: "#111928"
            }}
            className="hover:text-[#507A56] transition-colors"
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.95rem",
              lineHeight: "1.5rem",
              color: "#637381"
            }}
            className="flex-grow"
          >
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-[var(--border)] mt-auto">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full bg-gradient-to-br from-[#507A56] to-[#8fc295] flex items-center justify-center text-white"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.75rem"
                }}
              >
                {post.author.initials}
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                    color: "#111928"
                  }}
                >
                  {post.author.name}
                </p>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    color: "#637381"
                  }}
                >
                  {post.publishDate}
                </p>
              </div>
            </div>

            <motion.span
              whileHover={{ x: 2 }}
              transition={{ duration: 0.15 }}
              className="text-[#507A56]"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem"
              }}
            >
              Read →
            </motion.span>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}
