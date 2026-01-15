"use client";

import { motion } from "motion/react";
import { useState } from "react";
import imgKeyPoints from "figma:asset/3873f7503301698ae9869bcbd9bac84a9e010c6b.png";
import imgRectangle4504 from "figma:asset/89f3f03978e561be316655f15795d09bdeac9181.png";
import imgCreditScore from "figma:asset/5a8f9f6c5085ca6c0b078fb0f5b6422d20e16e5c.png";
import imgGovernmentOrFed from "figma:asset/c91a0105759a74a2eed28d32cb2d100d15959dd0.png";
import imgRectangle4505 from "figma:asset/3802e23e50a099f4e804f6ac3128101c80c1ec85.png";
import imgNewsletter from "figma:asset/bb730483ac2dc77c3fa29b7e3523872a2199a690.png";

interface BlogPost {
  id: number;
  image: string;
  category: string;
  title: string;
  buttonText: string;
  buttonVariant: "primary" | "secondary";
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: imgKeyPoints,
    category: "Interest Rates",
    title: "May - Key Points",
    buttonText: "Read Blog Post",
    buttonVariant: "secondary",
  },
  {
    id: 2,
    image: imgRectangle4504,
    category: "Newsletter",
    title: "May 31, 2025",
    buttonText: "Read Blog Post",
    buttonVariant: "primary",
  },
  {
    id: 3,
    image: imgCreditScore,
    category: "Credit",
    title: "How to Improve Your Credit Score",
    buttonText: "Read Blog Post",
    buttonVariant: "secondary",
  },
  {
    id: 4,
    image: imgGovernmentOrFed,
    category: "Mortgage Market",
    title: "The Government Shutdown & What It Means for",
    buttonText: "Continue Reading",
    buttonVariant: "secondary",
  },
  {
    id: 5,
    image: imgRectangle4505,
    category: "First Time Homebuyers",
    title: "New Home Sales Jump While Builders Pump",
    buttonText: "Continue Reading",
    buttonVariant: "secondary",
  },
  {
    id: 6,
    image: imgNewsletter,
    category: "Homebuying Tips",
    title: "Home Maintenance Checklist",
    buttonText: "Read Blog Post",
    buttonVariant: "secondary",
  },
];

const categories = [
  "All Posts",
  "Credit",
  "First Time Homebuyers",
  "Homebuying Tips",
  "Interest Rates",
  "Newsletters",
  "Mortgage Market",
];

interface BlogCardProps {
  post: BlogPost;
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
    <motion.div
      variants={cardVariants}
      className="w-full"
    >
      {/* Background Image */}
      <div className="h-[200px] sm:h-[240px] md:h-[280px] w-full overflow-hidden rounded-[10px]">
        <img
          alt={post.title}
          className="w-full h-full object-cover"
          src={post.image}
        />
      </div>

      {/* Content Card - now uses natural flow */}
      <div className="px-4 sm:px-6 -mt-[80px] sm:-mt-[90px] relative z-10">
        <motion.div
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 8px 30px 0px rgba(0,0,0,0.15)",
          }}
          transition={{
            duration: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="bg-white rounded-[8px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] w-full py-6 px-4 sm:px-6 flex flex-col gap-4 sm:gap-5 items-center"
        >
          {/* Category and Title */}
          <div className="flex flex-col gap-[6px] items-center text-center w-full">
            <p
              className="font-['Poppins',sans-serif] font-medium text-[#8fc295] text-[14px]"
              style={{ lineHeight: "22px" }}
            >
              {post.category}
            </p>
            <h3
              className="font-['Poppins',sans-serif] font-bold text-[#111928] text-[20px] capitalize"
              style={{ lineHeight: "24px" }}
            >
              {post.title}
            </h3>
          </div>

          {/* Button */}
          {post.buttonVariant === "primary" ? (
            <motion.button
              onClick={() => onReadPost(post.id)}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 6px 12px rgba(143, 194, 149, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                duration: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-[#8fc295] px-[28px] py-[10px] rounded-[6px] font-['Poppins',sans-serif] font-medium text-white text-[16px]"
              style={{ lineHeight: "24px" }}
            >
              {post.buttonText}
            </motion.button>
          ) : (
            <motion.button
              onClick={() => onReadPost(post.id)}
              whileHover={{
                scale: 1.02,
                borderColor: "#8fc295",
                color: "#8fc295",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                duration: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white border border-[#dfe4ea] px-[28px] py-[10px] rounded-[6px] font-['Poppins',sans-serif] font-medium text-[#637381] text-[16px]"
              style={{ lineHeight: "24px" }}
            >
              {post.buttonText}
            </motion.button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

interface BlogSectionProps {
  onReadPost: (postId: number) => void;
  onViewAllPosts?: () => void;
}

export function BlogSection({ onReadPost, onViewAllPosts }: BlogSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const sectionVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      className="bg-white py-16 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-[12px] items-center mb-12 md:mb-16">
          <p
            className="font-['Poppins',sans-serif] font-semibold text-[#8fc295] text-[18px] text-center"
            style={{ lineHeight: "26px" }}
          >
            Our Blog
          </p>
          <h2
            className="font-['Poppins',sans-serif] font-bold text-[#111928] text-[32px] md:text-[40px] text-center"
            style={{ lineHeight: "48px" }}
          >
            Housing Pulse
          </h2>
          <p
            className="font-['Poppins',sans-serif] text-[#637381] text-[16px] text-center max-w-[600px]"
            style={{ lineHeight: "24px" }}
          >
            Browse our blog posts and articles for expert knowledge on all things mortgage.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 md:gap-0 items-center justify-center mb-12 md:mb-16">
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
              className={`px-[30px] py-[12px] rounded-[8px] font-['Poppins',sans-serif] font-medium text-[16px] transition-colors ${
                activeCategory === category
                  ? "bg-[#8fc295] text-white"
                  : "bg-white text-[#637381] hover:bg-gray-50"
              }`}
              style={{ lineHeight: "24px" }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Blog Grid */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-[1170px] mx-auto"
        >
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} onReadPost={onReadPost} />
          ))}
        </motion.div>

        {/* View All Posts Button */}
        {onViewAllPosts && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={onViewAllPosts}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 16px rgba(143, 194, 149, 0.25)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                duration: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-gradient-to-r from-[#507A56] to-[#8fc295] px-8 py-4 rounded-lg font-['Poppins',sans-serif] font-semibold text-white shadow-md"
              style={{ lineHeight: "24px", fontSize: "16px" }}
            >
              View All Posts →
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}