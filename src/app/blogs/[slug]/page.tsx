import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  CheckCircle2,
  Award,
  Phone,
  BookOpen,
  Lightbulb,
  GraduationCap,
  Info,
  HelpCircle,
  MapPin,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  List,
  Flame,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccreditationBanner from "@/components/AccreditationBanner";
import { AnimatedArrow } from "@/components/ui/AnimatedArrow";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import {
  BLOG_POSTS,
  getBlogPostBySlug,
  getRelatedBlogPosts,
  type BlogPost,
} from "@/data/blogs";
import { getCourseBySlug } from "@/data/courses";
import BlogShareBar from "@/components/BlogShareBar";
import BlogTableOfContents from "@/components/BlogTableOfContents";
import BlogJumpToToc from "@/components/BlogJumpToToc";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Excellence Education Academy",
    };
  }

  const siteUrl = "https://exceleduacademy.com";
  const canonicalUrl = `${siteUrl}/blogs/${post.slug}`;
  const imageUrl = post.image.startsWith("http") ? post.image : `${siteUrl}${post.image}`;

  return {
    title: `${post.metaTitle} | Excellence Education Academy Goa`,
    description: post.metaDescription,
    keywords: post.tags,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: canonicalUrl,
      siteName: "Excellence Education Academy",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: post.imageAlt,
        },
      ],
      type: "article",
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post.slug, 3);
  const relatedCourse = getCourseBySlug(post.relatedCourseSlug);

  // Find previous and next articles for bottom navigation
  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;

  // Structured Data (JSON-LD) for SEO
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `https://exceleduacademy.com${post.image}`,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://exceleduacademy.com/blogs/${post.slug}`,
    },
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: {
        "@type": "EducationalOrganization",
        name: "Excellence Education Academy",
      },
    },
    publisher: {
      "@type": "EducationalOrganization",
      name: "Excellence Education Academy",
      logo: {
        "@type": "ImageObject",
        url: "https://exceleduacademy.com/logo.png",
      },
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://exceleduacademy.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "The Culinary Journal",
        item: "https://exceleduacademy.com/blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://exceleduacademy.com/blogs/${post.slug}`,
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Inject SEO JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <Header />

      <main className="flex-grow">
        {/* Distinctive Cinematic Editorial Masterclass Hero */}
        <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden bg-[#070B10] text-white border-b border-slate-800">
          {/* Subtle Ambient Studio Vignette */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-900/15 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-20 right-10 w-80 h-80 rounded-full bg-[#D4F85A]/5 blur-[120px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10 space-y-8">
            {/* Minimalist Top Navigation & Category Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <nav
                aria-label="Breadcrumb"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-400"
              >
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                <Link href="/blogs" className="hover:text-white transition-colors">
                  Journal
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                <span className="text-[#D4F85A] font-black">{post.category}</span>
              </nav>

              <div className="flex items-center gap-2 text-xs font-bold">
                <span className="bg-[#D4F85A] text-[#0A1118] px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm">
                  {post.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300 font-semibold text-[11px] flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[#D4F85A]" />
                  <span>{post.readTime}</span>
                </span>
                <span className="hidden sm:flex px-3 py-1 rounded-full bg-white/10 text-slate-300 font-semibold text-[11px] items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span>{post.publishedDate}</span>
                </span>
              </div>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-5">
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-white leading-[1.12]">
                {post.title}
              </h1>

              <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl">
                {post.excerpt}
              </p>
            </div>

            {/* Author Credential Byline & Verification Bar */}
            <div className="pt-4 pb-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/40 bg-slate-800">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-black text-white text-sm sm:text-base leading-tight">
                      {post.author.name}
                    </p>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#1E6DEB]/30 border border-[#1E6DEB]/50 text-[10px] font-black text-blue-200 uppercase tracking-wider">
                      <ShieldCheck className="w-3 h-3 text-[#D4F85A]" />
                      <span>CTH Lead Chef</span>
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    {post.author.role} • {post.author.credentials}
                  </p>
                </div>
              </div>

              {/* Jump to TOC button */}
              <BlogJumpToToc />
            </div>

            {/* Panoramic Hero Visual Showcase Container */}
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border-2 border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.6)] aspect-[16/9] sm:aspect-[21/10] bg-slate-900 group">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                className="object-cover group-hover:scale-102 transition-transform duration-700"
                sizes="(max-width: 1200px) 100vw, 1100px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

              {/* Floating Bottom Info Pill */}
              <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <p className="text-white text-xs sm:text-sm font-medium leading-snug drop-shadow-md max-w-xl">
                  {post.imageAlt}
                </p>

                {relatedCourse && (
                  <Link
                    href={`/courses/${relatedCourse.slug}`}
                    className="self-start sm:self-auto inline-flex items-center gap-1.5 bg-[#D4F85A] text-[#0A1118] px-3.5 py-1.5 rounded-full text-xs font-black shadow-lg hover:bg-white transition-colors shrink-0"
                  >
                    <span>Course: {relatedCourse.shortTitle}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 2. Main Article Content Container */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            {/* Responsive Grid: Article Content + Sticky Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 max-w-6xl mx-auto">
              {/* Left Column (Main Article Body) */}
              <article className="lg:col-span-8 space-y-10">
                {/* Key Takeaways Highlight Card */}
                <div className="bg-gradient-to-br from-[#F0F6FE] via-white to-[#F8FAFC] rounded-3xl p-6 sm:p-8 border-2 border-[#1E6DEB]/20 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1E6DEB]">
                    <Sparkles className="w-4 h-4" aria-hidden="true" />
                    <span>Executive Key Takeaways</span>
                  </div>

                  <ul className="space-y-3">
                    {post.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-800 font-medium leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-[#1E6DEB] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mobile Table of Contents (visible only on small screens) */}
                <div id="mobile-table-of-contents" className="lg:hidden scroll-mt-28">
                  <div id="table-of-contents" className="scroll-mt-28">
                    <BlogTableOfContents items={post.tableOfContents} />
                  </div>
                </div>

                {/* Article Content Sections */}
                <div className="space-y-12 text-slate-800">
                  {post.sections.map((section) => (
                    <section
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-28 space-y-5"
                    >
                      <div className="space-y-1">
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug">
                          {section.heading}
                        </h2>
                        {section.subheading && (
                          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1E6DEB]">
                            {section.subheading}
                          </p>
                        )}
                      </div>

                      {/* Paragraphs */}
                      {section.paragraphs.map((p, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal"
                        >
                          {p}
                        </p>
                      ))}

                      {/* Bulleted / Ordered List */}
                      {section.list && (
                        <ul className="space-y-2.5 my-4 bg-slate-50/70 p-5 rounded-2xl border border-slate-200/80">
                          {section.list.map((item, lIdx) => (
                            <li
                              key={lIdx}
                              className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 font-medium leading-relaxed"
                            >
                              <span className="w-2 h-2 rounded-full bg-[#1E6DEB] shrink-0 mt-2.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Data Comparison Table */}
                      {section.table && (
                        <div className="my-6 overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                          <table className="w-full text-left text-sm text-slate-700 border-collapse">
                            <thead className="bg-[#0A1118] text-white uppercase text-xs font-black tracking-wider">
                              <tr>
                                {section.table.headers.map((h, hIdx) => (
                                  <th key={hIdx} className="py-3.5 px-4 sm:px-6">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 bg-white">
                              {section.table.rows.map((row, rIdx) => (
                                <tr
                                  key={rIdx}
                                  className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                                >
                                  {row.map((cell, cIdx) => (
                                    <td
                                      key={cIdx}
                                      className={`py-3.5 px-4 sm:px-6 leading-relaxed ${
                                        cIdx === 0 ? "font-bold text-slate-900" : "text-slate-600"
                                      }`}
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Quote Box */}
                      {section.quote && (
                        <blockquote className="my-6 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#F0F6FE] to-white border-l-4 border-[#1E6DEB] shadow-xs">
                          <p className="text-base sm:text-lg font-bold text-slate-900 italic leading-relaxed">
                            &ldquo;{section.quote}&rdquo;
                          </p>
                          <footer className="mt-2 text-xs font-black text-[#1E6DEB] uppercase tracking-wider">
                            — Chef Vernon Da Silva, Excellence Education Academy
                          </footer>
                        </blockquote>
                      )}

                      {/* Callout Box */}
                      {section.callout && (
                        <div
                          className={`my-6 p-6 rounded-2xl border flex items-start gap-4 ${
                            section.callout.type === "highlight"
                              ? "bg-[#D4F85A]/15 border-[#D4F85A]/80 text-slate-900"
                              : section.callout.type === "tip"
                              ? "bg-amber-50/70 border-amber-300 text-slate-900"
                              : "bg-[#F0F6FE] border-[#1E6DEB]/30 text-slate-900"
                          }`}
                        >
                          <div className="p-2 rounded-xl bg-white shadow-xs shrink-0 mt-0.5">
                            {section.callout.type === "highlight" ? (
                              <Sparkles className="w-5 h-5 text-[#0A1118]" />
                            ) : section.callout.type === "tip" ? (
                              <Lightbulb className="w-5 h-5 text-amber-600" />
                            ) : (
                              <Info className="w-5 h-5 text-[#1E6DEB]" />
                            )}
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-sm font-black text-slate-950 uppercase tracking-wider">
                              {section.callout.title}
                            </h4>
                            <p className="text-sm text-slate-700 leading-relaxed font-normal">
                              {section.callout.text}
                            </p>
                          </div>
                        </div>
                      )}
                    </section>
                  ))}
                </div>

                {/* Article Tags */}
                <div className="pt-6 border-t border-slate-200">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-slate-400 mr-1">Related Topics:</span>
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1 rounded-full transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Share Bar */}
                <BlogShareBar title={post.title} slug={post.slug} />

                {/* Author Bio Box */}
                <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-white shadow-md bg-white">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 text-center sm:text-left">
                    <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#1E6DEB] bg-[#F0F6FE] px-2.5 py-0.5 rounded-md">
                      Article Author &amp; Mentor
                    </span>
                    <h3 className="text-lg font-black text-slate-950">{post.author.name}</h3>
                    <p className="text-xs font-bold text-slate-600">{post.author.role}</p>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      With over 18 years of executive culinary leadership across luxury international cruise lines and 5-star properties, Chef Vernon leads curriculum design and practical culinary examinations at Excellence Education Academy in Alto Porvorim, Goa.
                    </p>
                  </div>
                </div>

                {/* Frequently Asked Questions Section */}
                {post.faqs.length > 0 && (
                  <div className="pt-8 border-t border-slate-200 space-y-6">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#1E6DEB]">
                      <HelpCircle className="w-4 h-4" />
                      <span>Frequently Asked Questions</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                      Got Questions About This Topic?
                    </h3>

                    <div className="space-y-4">
                      {post.faqs.map((faq, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-2"
                        >
                          <h4 className="text-base font-black text-slate-900 flex items-start gap-2.5">
                            <span className="text-[#1E6DEB] font-black">Q{idx + 1}.</span>
                            <span>{faq.question}</span>
                          </h4>
                          <p className="text-sm text-slate-600 pl-6 leading-relaxed font-normal">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Next & Previous Post Navigation */}
                <div className="pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {prevPost ? (
                    <Link
                      href={`/blogs/${prevPost.slug}`}
                      className="group p-5 rounded-2xl border border-slate-200 hover:border-[#1E6DEB] hover:shadow-md transition-all flex flex-col justify-between space-y-2 bg-white"
                    >
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:text-[#1E6DEB] transition-colors">
                        <ChevronLeft className="w-4 h-4" />
                        <span>Previous Article</span>
                      </div>
                      <p className="text-sm font-black text-slate-900 group-hover:text-[#1E6DEB] transition-colors line-clamp-2">
                        {prevPost.title}
                      </p>
                    </Link>
                  ) : <div />}

                  {nextPost ? (
                    <Link
                      href={`/blogs/${nextPost.slug}`}
                      className="group p-5 rounded-2xl border border-slate-200 hover:border-[#1E6DEB] hover:shadow-md transition-all flex flex-col justify-between space-y-2 text-right bg-white"
                    >
                      <div className="flex items-center justify-end gap-1.5 text-xs font-bold text-slate-400 group-hover:text-[#1E6DEB] transition-colors">
                        <span>Next Article</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                      <p className="text-sm font-black text-slate-900 group-hover:text-[#1E6DEB] transition-colors line-clamp-2">
                        {nextPost.title}
                      </p>
                    </Link>
                  ) : <div />}
                </div>
              </article>

              {/* Right Column (Sticky Sidebar) */}
              <aside className="lg:col-span-4 space-y-8">
                {/* Desktop Sticky Table of Contents & Recommendations */}
                <div id="desktop-table-of-contents" className="hidden lg:block sticky top-24 space-y-6 scroll-mt-28">
                  <BlogTableOfContents items={post.tableOfContents} />

                  {/* Related Course Card */}
                  {relatedCourse && (
                    <div className="bg-gradient-to-br from-[#0A1118] via-[#101C2B] to-[#1E6DEB] rounded-3xl p-6 text-white space-y-4 shadow-lg border border-slate-800">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-black uppercase tracking-wider text-[#D4F85A] bg-[#D4F85A]/15 px-2.5 py-1 rounded-full border border-[#D4F85A]/30">
                          {relatedCourse.level}
                        </span>
                        <span className="text-xs text-slate-300 font-semibold">
                          {relatedCourse.shortDuration}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <p className="text-[11px] uppercase tracking-widest text-slate-400 font-bold">
                          Relevant Qualification
                        </p>
                        <h4 className="text-lg font-black text-white leading-snug">
                          {relatedCourse.title}
                        </h4>
                      </div>

                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                        {relatedCourse.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-white/10">
                        <Link
                          href={`/enroll?course=${relatedCourse.id}`}
                          className="w-full inline-flex items-center justify-center gap-2 bg-[#D4F85A] text-[#0A1118] hover:bg-white font-black text-xs py-3 px-4 rounded-full shadow-sm transition-all"
                        >
                          <span>Apply for This Course</span>
                          <AnimatedArrow size={12} />
                        </Link>

                        <Link
                          href={`/courses/${relatedCourse.slug}`}
                          className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs py-2.5 px-4 rounded-full transition-colors"
                        >
                          <span>View Full Curriculum</span>
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Campus Visit & Career Counseling Card */}
                  <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/90 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-900">
                      <Phone className="w-4 h-4 text-[#1E6DEB]" />
                      <span>Culinary Career Advice</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Have questions about CTH-UK certification, cruise ship placements, or enrolling in our Goa campus? Speak directly with our admissions counselor.
                    </p>

                    <div className="space-y-2 pt-1">
                      <a
                        href="tel:+919607622999"
                        className="w-full flex items-center justify-center gap-2 bg-[#1E6DEB] hover:bg-[#175CD3] text-white text-xs font-black py-3 px-4 rounded-full shadow-xs transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call +91 96076 22999</span>
                      </a>

                      <a
                        href="https://wa.me/919607622999?text=Hi%2C%20I%20am%20interested%20in%20Excellence%20Education%20Academy%20courses"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-black py-2.5 px-4 rounded-full shadow-xs transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp Admissions</span>
                      </a>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                      <MapPin className="w-3.5 h-3.5 text-[#1E6DEB] shrink-0" />
                      <span>Alto Porvorim, Goa, India</span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* 3. Related Other Articles Section */}
        <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
            <ScrollReveal
              variant="fade-up"
              className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#1E6DEB]">
                  MORE INSIGHTS &amp; GUIDES
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight mt-1">
                  Related Articles You May Like
                </h2>
              </div>

              <Link
                href="/blogs"
                className="inline-flex items-center gap-1.5 text-sm font-black text-[#1E6DEB] hover:text-[#175CD3] transition-colors"
              >
                <span>View All 10 Articles</span>
                <AnimatedArrow size={14} />
              </Link>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {relatedPosts.map((rel) => (
                <StaggerItem
                  key={rel.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-[#1E6DEB]/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <Link href={`/blogs/${rel.slug}`} className="block">
                    <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={rel.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 bg-[#D4F85A] text-[#0A1118] px-3 py-0.5 rounded-full text-[11px] font-black shadow-sm">
                        {rel.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold">
                        <span>{rel.publishedDate}</span>
                        <span>•</span>
                        <span>{rel.readTime}</span>
                      </div>

                      <h3 className="text-lg font-black text-slate-950 tracking-tight group-hover:text-[#1E6DEB] transition-colors leading-snug line-clamp-2">
                        {rel.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                        {rel.excerpt}
                      </p>
                    </div>
                  </Link>

                  <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-xs font-black text-[#1E6DEB]">
                    <Link href={`/blogs/${rel.slug}`} className="hover:underline">
                      <span>Read Article</span>
                    </Link>
                    <Link
                      href={`/blogs/${rel.slug}`}
                      aria-label={`Read ${rel.title}`}
                      className="w-7 h-7 rounded-full bg-[#F0F6FE] flex items-center justify-center group-hover:bg-[#D4F85A] group-hover:text-[#0A1118] transition-colors"
                    >
                      <AnimatedArrow size={12} />
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* 4. Accreditation Banner */}
        <AccreditationBanner />
      </main>

      <Footer />
    </div>
  );
}
