import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock, Calendar } from "lucide-react";

export default function BlogSection() {
  const posts = [
    {
      title: "How CTH UK Accreditation Accelerates Global Careers on Luxury Cruise Liners",
      excerpt:
        "Understand why major cruise operators like Royal Caribbean and Viking specifically prioritize candidates with Ofqual-regulated CTH culinary diplomas.",
      category: "Cruise Careers",
      readTime: "4 min read",
      date: "Oct 24, 2025",
      image: "/images/cruise-hospitality.jpg",
      link: "#contact",
    },
    {
      title: "The 5 Mother Sauces Every Aspiring Professional Chef Must Master",
      excerpt:
        "From Béchamel and Velouté to Espagnole, Sauce Tomat, and Hollandaise — discover the foundational science of classical French culinary repertoire.",
      category: "Culinary Technique",
      readTime: "6 min read",
      date: "Nov 02, 2025",
      image: "/images/culinary-hero.jpg",
      link: "#contact",
    },
    {
      title: "The Art of Laminated Pastry: Secrets to Perfect Flaky Golden Croissants",
      excerpt:
        "Explore butter temperature control, dough folding turns, and proofing conditions taught in our dedicated pastry and confectionery laboratory.",
      category: "Pastry Studio",
      readTime: "5 min read",
      date: "Nov 08, 2025",
      image: "/images/patisserie-skills.jpg",
      link: "#contact",
    },
  ];

  return (
    <section id="blogs" className="py-20 sm:py-28 bg-white border-b border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-700">
            <BookOpen className="w-3.5 h-3.5 text-[#BB9331]" aria-hidden="true" />
            <span>INDUSTRY INSIGHTS &amp; ARTICLES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Latest from Our Culinary Journal
          </h2>

          <p className="text-base text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Practical tips from executive master chefs, industry hiring updates, and culinary masterclasses straight from our Goa kitchens.
          </p>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="bg-[#fafbfc] rounded-[32px] overflow-hidden border border-zinc-200/80 shadow-[0_2px_14px_rgba(0,0,0,0.02)] hover:shadow-lg hover:border-zinc-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full aspect-[16/10] bg-zinc-100 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-zinc-900 border border-zinc-200/70 shadow-sm">
                    {post.category}
                  </div>
                </div>

                <div className="p-7 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" aria-hidden="true" />
                      <span>{post.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-zinc-400" aria-hidden="true" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-950 tracking-tight leading-snug group-hover:text-[#19364f] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0">
                <Link
                  href={post.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#19364f] group-hover:text-[#BB9331] transition-colors"
                >
                  <span>Read full article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
