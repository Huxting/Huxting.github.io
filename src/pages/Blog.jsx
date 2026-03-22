import React, { useState, useMemo } from "react";
import { Search, Filter, Calendar, Tag } from "lucide-react";
import { BLOG_POSTS } from "../data/blogData";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("全部");

  const categories = useMemo(() => {
    const cats = ["全部", ...new Set(BLOG_POSTS.map((post) => post.category))];
    return cats;
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "全部" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-brand-pink/30">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">学习笔记</h1>
          <p className="text-gray-500 mt-2">记录我的学习历程与技术见解</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="搜索文章..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white border border-brand-pink/40 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-pink-dark/30 focus:border-brand-pink-dark transition-all w-full sm:w-64"
            />
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-brand-pink-dark text-white"
                    : "bg-white text-gray-600 border border-brand-pink/40 hover:bg-brand-pink-light"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline List */}
      <div className="relative pl-8 space-y-12 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-brand-pink/20">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[30px] top-2 w-5 h-5 bg-white border-4 border-brand-pink rounded-full z-10" />

              <article className="group bg-white p-6 rounded-3xl shadow-sm border border-brand-pink-light hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="px-2 py-0.5 bg-brand-pink-light text-brand-pink-dark rounded-md font-medium">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-800 group-hover:text-brand-pink-dark transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          ))
        ) : (
          <div className="py-20 text-center">
            <p className="text-gray-400">没有找到相关的笔记哦~</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
