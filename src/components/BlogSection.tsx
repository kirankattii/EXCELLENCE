import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, Sparkles } from "lucide-react";
import { AnimatedArrow } from "@/components/ui/AnimatedArrow";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { BLOG_POSTS } from "@/data/blogs";

export default function BlogSection() {
  // Show 3 featured posts for the homepage section
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blogs" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F6FE] border border-[#1E6DEB]/20 text-xs font-black text-[#1E6DEB] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INDUSTRY INSIGHTS &amp; ARTICLES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
            Latest Culinary &amp; Hospitality Insights
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Practical techniques, cruise career guides, and British CTH-UK qualification insights straight from our Goa campus training kitchens.
          </p>
        </ScrollReveal>

        {/* 3 Blog Cards */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featuredPosts.map((post) => (
            <StaggerItem
              key={post.id}
              className="bg-white rounded-[32px] overflow-hidden border border-slate-200/90 shadow-[0_4px_24px_rgba(10,17,24,0.04)] hover:shadow-[0_20px_48px_rgba(30,109,235,0.12)] hover:border-[#1E6DEB]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <Link href={`/blogs/${post.slug}`} className="block">
                <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
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

                  <h3 className="text-xl font-black text-slate-950 tracking-tight leading-snug group-hover:text-[#1E6DEB] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>

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

        {/* View All Blogs CTA */}
        <div className="text-center pt-4">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2.5 bg-[#0A1118] text-white hover:bg-[#1E6DEB] font-black text-sm px-8 py-4 rounded-full shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Explore All 10 Articles &amp; Guides</span>
            <AnimatedArrow size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
