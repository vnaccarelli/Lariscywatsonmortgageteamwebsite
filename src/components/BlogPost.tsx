"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BlogPostData, getRelatedPosts, getAdjacentPosts } from "../constants/blogData";

interface BlogPostProps {
  post: BlogPostData;
  onBackToHome: () => void;
  onNavigateToPost: (postId: number) => void;
}

export function BlogPost({ post, onBackToHome, onNavigateToPost }: BlogPostProps) {
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const relatedPosts = getRelatedPosts(post.id, 3);
  const { previous, next } = getAdjacentPosts(post.id);

  useEffect(() => {
    const handleScroll = () => {
      const sections = post.tableOfContents.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(post.tableOfContents[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [post.tableOfContents]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const renderContent = () => {
    let sectionIndex = 0;
    return post.content.map((block, index) => {
      switch (block.type) {
        case "paragraph":
          return (
            <p key={index} className="text-gray-700 text-lg leading-relaxed mb-6">
              {block.content}
            </p>
          );

        case "heading":
          if (block.level === 2) {
            const tocItem = post.tableOfContents[sectionIndex];
            sectionIndex++;
            return (
              <section key={index} id={tocItem?.id} className="mb-12 scroll-mt-24">
                <h2 className="font-['Poppins',sans-serif] font-bold text-gray-900 text-3xl mb-6">
                  {block.content}
                </h2>
              </section>
            );
          } else {
            return (
              <h3 key={index} className="font-['Poppins',sans-serif] font-bold text-gray-900 text-2xl mb-4">
                {block.content}
              </h3>
            );
          }

        case "list":
          return (
            <ul key={index} className="space-y-3 mb-8 text-gray-700 text-lg">
              {block.items?.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#8fc295] mt-1.5">•</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          );

        case "numbered-list":
          return (
            <div key={index} className="space-y-6 mb-8">
              {block.items?.map((item, i) => {
                const [title, ...descParts] = item.split(" - ");
                const description = descParts.join(" - ");
                
                return (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8fc295] text-white flex items-center justify-center font-['Poppins',sans-serif] font-semibold">
                      {i + 1}
                    </div>
                    <div>
                      {description ? (
                        <>
                          <h4 className="font-['Poppins',sans-serif] font-semibold text-gray-900 text-lg mb-2">
                            {title}
                          </h4>
                          <p className="text-gray-700 leading-relaxed">{description}</p>
                        </>
                      ) : (
                        <p className="text-gray-700 leading-relaxed">{item}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );

        case "callout":
          return (
            <div key={index} className="bg-[#f8faf9] border-l-4 border-[#8fc295] p-6 rounded-r-lg mb-8">
              <p className="font-['Poppins',sans-serif] font-semibold text-[#507A56] mb-2">
                💡 {block.heading}
              </p>
              <p className="text-gray-700 leading-relaxed">{block.content}</p>
            </div>
          );

        case "warning":
          return (
            <div key={index} className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
              <p className="font-['Poppins',sans-serif] font-semibold text-red-800 mb-2">
                ⚠️ Warning
              </p>
              <p className="text-gray-700 leading-relaxed">{block.content}</p>
            </div>
          );

        case "quote":
          return (
            <blockquote key={index} className="border-l-4 border-[#507A56] pl-6 py-2 my-8 italic text-gray-700 text-xl">
              {block.content}
            </blockquote>
          );

        case "image":
          return (
            <div key={index} className="mb-8">
              <div className="rounded-lg overflow-hidden mb-4">
                <ImageWithFallback
                  src={block.imageQuery || ""}
                  alt={block.caption || ""}
                  className="w-full h-auto"
                />
              </div>
              {block.caption && (
                <p className="text-gray-500 text-sm italic">{block.caption}</p>
              )}
            </div>
          );

        default:
          return null;
      }
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#8fc295] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[600px] bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[800px]"
          >
            <span className="inline-block bg-[#8fc295] text-white px-4 py-1.5 rounded-full font-['Poppins',sans-serif] font-medium text-sm mb-4">
              {post.category}
            </span>
            <h1 className="font-['Poppins',sans-serif] font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#507A56] flex items-center justify-center font-['Poppins',sans-serif] font-semibold text-white">
                  {post.author.initials}
                </div>
                <span className="font-['Poppins',sans-serif] font-medium">{post.author.name}</span>
              </div>
              <span>•</span>
              <span>{post.publishDate}</span>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex items-center gap-2 mb-8 font-['Poppins',sans-serif] text-sm text-gray-600"
        >
          <button onClick={onBackToHome} className="hover:text-[#507A56] transition-colors">
            Home
          </button>
          <ChevronRight className="w-4 h-4" />
          <button onClick={onBackToHome} className="hover:text-[#507A56] transition-colors">
            Blog
          </button>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">{post.title}</span>
        </motion.div>

        <div className="flex gap-12 lg:gap-16 relative">
          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="flex-1 max-w-[800px]"
          >
            {/* Back Button */}
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-[#507A56] hover:text-[#8fc295] transition-colors font-['Poppins',sans-serif] font-medium mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </button>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Dynamic Content */}
            {renderContent()}

            {/* Final CTA Box */}
            <div className="bg-gradient-to-r from-[#8fc295] to-[#507A56] p-8 rounded-lg text-white mt-12">
              <h3 className="font-['Poppins',sans-serif] font-bold text-2xl mb-3">
                Ready to Start Your Homeownership Journey?
              </h3>
              <p className="mb-6 leading-relaxed">
                Our mortgage experts can help you understand how your credit score impacts your loan options 
                and guide you through the pre-approval process.
              </p>
              <motion.a
                href="https://1425476.my1003app.com/2115404/register?time=1700599919933"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white px-8 py-3 rounded-[6px] font-['Poppins',sans-serif] inline-block"
                style={{ fontWeight: 600, color: '#507A56' }}
              >
                Get Pre-Approved Today
              </motion.a>
            </div>
          </motion.article>

          {/* Sidebar - Desktop Only */}
          <aside className="hidden lg:block w-[320px] flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Share Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-['Poppins',sans-serif] font-semibold text-gray-900">
                    Share this article
                  </h3>
                  <Share2 className="w-4 h-4 text-gray-600" />
                </div>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#3b5998" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 bg-[#4267B2] text-white p-3 rounded-lg flex items-center justify-center"
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#0a66c2" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 bg-[#0077B5] text-white p-3 rounded-lg flex items-center justify-center"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#0c8de4" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 bg-[#1DA1F2] text-white p-3 rounded-lg flex items-center justify-center"
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Table of Contents */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="font-['Poppins',sans-serif] font-semibold text-gray-900 mb-4">
                  In This Article
                </h3>
                <nav className="space-y-2">
                  {post.tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                        activeSection === item.id
                          ? "bg-[#8fc295] text-white font-medium"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              </motion.div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="bg-gradient-to-br from-[#8fc295] to-[#507A56] p-6 rounded-lg text-white"
              >
                <h3 className="font-['Poppins',sans-serif] font-bold text-xl mb-3">
                  Ready to Get Started?
                </h3>
                <p className="mb-4 text-sm leading-relaxed opacity-95">
                  Connect with our mortgage experts to discuss your homebuying goals.
                </p>
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full bg-white text-[#507A56] px-6 py-3 rounded-lg font-['Poppins',sans-serif] font-semibold"
                >
                  Contact Us
                </motion.button>
              </motion.div>
            </div>
          </aside>
        </div>

        {/* Author Card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[800px] mt-16 p-8 bg-gray-50 rounded-lg"
        >
          <div className="flex gap-6 items-start">
            <div className="w-20 h-20 rounded-full bg-[#507A56] flex items-center justify-center font-['Poppins',sans-serif] font-bold text-white text-2xl flex-shrink-0">
              {post.author.initials}
            </div>
            <div className="flex-1">
              <h3 className="font-['Poppins',sans-serif] font-bold text-gray-900 text-xl mb-2">
                {post.author.name}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.author.bio}
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block bg-[#8fc295] text-white px-6 py-2.5 rounded-lg font-['Poppins',sans-serif] font-medium"
              >
                Contact {post.author.name.split(" ")[0]}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Related Posts */}
        <div className="mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-['Poppins',sans-serif] font-bold text-gray-900 text-3xl mb-8 text-center"
          >
            Related Articles
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            {relatedPosts.map((relatedPost, index) => (
              <motion.button
                key={relatedPost.id}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setTimeout(() => onNavigateToPost(relatedPost.id), 300);
                }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.02 }}
                className="group text-left"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
                  <div className="h-[200px] overflow-hidden">
                    <img
                      src={relatedPost.featuredImage}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-[#8fc295] font-['Poppins',sans-serif] font-medium text-sm mb-2">
                      {relatedPost.category}
                    </span>
                    <h3 className="font-['Poppins',sans-serif] font-bold text-gray-900 mb-3">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{relatedPost.readTime}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Prev/Next Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200 max-w-[800px]"
        >
          {previous ? (
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setTimeout(() => onNavigateToPost(previous.id), 300);
              }}
              className="flex items-center gap-2 text-[#507A56] hover:text-[#8fc295] transition-colors font-['Poppins',sans-serif] font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous Article
            </button>
          ) : (
            <div />
          )}
          {next ? (
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setTimeout(() => onNavigateToPost(next.id), 300);
              }}
              className="flex items-center gap-2 text-[#507A56] hover:text-[#8fc295] transition-colors font-['Poppins',sans-serif] font-medium"
            >
              Next Article
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <div />
          )}
        </motion.div>
      </div>
    </div>
  );
}