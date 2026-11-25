"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Search,
  Sparkles,
  BookOpen,
  ArrowRight,
  Filter,
  CheckCircle2,
  X,
} from "lucide-react";
import { AnimatedArrow } from "@/components/ui/AnimatedArrow";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { BLOG_CATEGORIES, BLOG_POSTS, type BlogPost } from "@/data/blogs";

export default function BlogsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "all" || post.categorySlug === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured post is the first post when in "all" category without search query
  const showFeaturedHero = selectedCategory === "all" && searchQuery.trim() === "";
  const featuredPost = showFeaturedHero ? filteredPosts[0] : null;
  const gridPosts = showFeaturedHero ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div className="py-12 sm:py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Search & Category Filter Controls */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-grow max-w-xl">
              <Search
                className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, techniques, cruise careers, sauces..."
                className="w-full pl-11 pr-10 py-3.5 rounded-full bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E6DEB] focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1"
                  aria-label="Clear search query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick stats counter */}
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 self-end md:self-auto">
              <span className="w-2 h-2 rounded-full bg-[#1E6DEB]" />
              <span>
                Showing {filteredPosts.length} of {BLOG_POSTS.length} Articles
              </span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 mr-2 py-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter by:</span>
            </span>
            {BLOG_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count =
                cat.id === "all"
                  ? BLOG_POSTS.length
                  : BLOG_POSTS.filter((p) => p.categorySlug === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs font-black px-4 py-2 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-[#1E6DEB] text-white shadow-sm"
                      : "bg-slate-100 hover:bg-slate-200/80 text-slate-700"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Post Card (Hero) */}
        {featuredPost && (
          <ScrollReveal variant="fade-up">
            <div className="bg-white rounded-[32px] sm:rounded-[40px] overflow-hidden border border-slate-200/90 shadow-[0_8px_32px_rgba(10,17,24,0.06)] hover:border-[#1E6DEB]/50 transition-all duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Image side */}
                <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[380px] lg:min-h-full bg-slate-100 overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.imageAlt}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <span className="bg-[#D4F85A] text-[#0A1118] px-3.5 py-1 rounded-full text-xs font-black shadow-sm flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>FEATURED GUIDE</span>
                    </span>
                    <span className="bg-[#0A1118]/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-[#1E6DEB]" />
                        <span>{featuredPost.publishedDate}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span>{featuredPost.readTime}</span>
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight group-hover:text-[#1E6DEB] transition-colors">
                      <Link href={`/blogs/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {featuredPost.excerpt}
                    </p>

                    {/* Key points preview */}
                    <div className="pt-2 space-y-2 border-t border-slate-100">
                      {featuredPost.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#1E6DEB] shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-9 h-9 rounded-full overflow-hidden bg-slate-200 border border-slate-200">
                        <Image
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-xs">
                        <p className="font-black text-slate-900">{featuredPost.author.name}</p>
                        <p className="text-slate-400 text-[11px]">{featuredPost.author.role}</p>
                      </div>
                    </div>

                    <Link
                      href={`/blogs/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 bg-[#1E6DEB] hover:bg-[#175CD3] text-white font-black text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-sm transition-all duration-200"
                    >
                      <span>Read Guide</span>
                      <AnimatedArrow size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Empty Search State */}
        {filteredPosts.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 space-y-4 max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900">No matching articles found</h3>
            <p className="text-sm text-slate-600">
              We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo;. Try adjusting your keywords or category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="inline-flex items-center gap-2 text-xs font-black text-[#1E6DEB] hover:underline pt-2"
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Blog Post Grid */}
        {gridPosts.length > 0 && (
          <StaggerContainer
            staggerDelay={0.08}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {gridPosts.map((post) => (
              <StaggerItem
                key={post.id}
                className="bg-white rounded-[32px] overflow-hidden border border-slate-200/90 shadow-[0_4px_24px_rgba(10,17,24,0.04)] hover:shadow-[0_20px_48px_rgba(30,109,235,0.12)] hover:border-[#1E6DEB]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <Link href={`/blogs/${post.slug}`} className="block">
                    <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4 bg-[#D4F85A] text-[#0A1118] px-3.5 py-1 rounded-full text-xs font-black shadow-sm">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-7 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#1E6DEB]" aria-hidden="true" />
                          <span>{post.publishedDate}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-slate-950 tracking-tight leading-snug group-hover:text-[#1E6DEB] transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="p-7 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-black text-[#1E6DEB]">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="hover:underline flex items-center gap-1"
                  >
                    <span>Read Full Article</span>
                  </Link>
                  <Link
                    href={`/blogs/${post.slug}`}
                    aria-label={`Read ${post.title}`}
                    className="w-8 h-8 rounded-full bg-[#F0F6FE] flex items-center justify-center group-hover:bg-[#D4F85A] group-hover:text-[#0A1118] group-hover:scale-110 transition-all duration-200 overflow-hidden"
                  >
                    <AnimatedArrow trigger="card" size={15} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}

        {/* Bottom Academy Career Counseling CTA Banner */}
        <ScrollReveal variant="fade-up">
          <div className="bg-gradient-to-br from-[#0A1118] via-[#101C2B] to-[#1351C7] rounded-[36px] p-8 sm:p-14 text-white relative overflow-hidden shadow-xl">
            <div className="max-w-3xl space-y-6 relative z-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4F85A] text-[#0A1118] text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ADMISSIONS &amp; CAMPUS TOURS</span>
              </span>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Turn Culinary Passion into a{" "}
                <span className="text-[#D4F85A]">World-Class Career</span>
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Visit our state-of-the-art campus in Alto Porvorim, Goa. Experience our commercial hot kitchens, meet executive chef faculty, and explore British CTH-UK certification pathways.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/enroll"
                  className="inline-flex items-center gap-2 bg-[#D4F85A] text-[#0A1118] hover:bg-white font-black text-sm px-7 py-3.5 rounded-full shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Apply for Admission</span>
                  <AnimatedArrow size={14} />
                </Link>

                <a
                  href="tel:+919607622999"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm px-6 py-3.5 rounded-full transition-colors"
                >
                  <span>Call +91 96076 22999</span>
                </a>
              </div>
            </div>

            {/* Background design elements */}
            <div
              className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#1E6DEB]/20 blur-3xl pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
