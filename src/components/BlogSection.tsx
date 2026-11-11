import Image from "next/image";
import { ArrowUpRight, Clock, Calendar, Sparkles } from "lucide-react";

export default function BlogSection() {
  const posts = [
    {
      title: "How CTH-UK Accreditation Accelerates Global Careers in Hospitality & Cruise Lines",
      excerpt:
        "Discover why leading hotels, resorts, and international cruise lines prioritize candidates with globally recognized CTH-UK culinary diplomas.",
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
    <section id="blogs" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F6FE] border border-[#1E6DEB]/20 text-xs font-black text-[#1E6DEB] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INDUSTRY INSIGHTS &amp; ARTICLES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
            Latest insights and trends
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Practical tips from executive master chefs, industry hiring updates, and culinary masterclasses straight from our Goa campus kitchens.
          </p>
        </div>

        {/* 3 Blog Cards matching reference Section 7 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="bg-white rounded-[32px] overflow-hidden border border-slate-200/90 shadow-[0_4px_24px_rgba(10,17,24,0.04)] hover:shadow-[0_20px_48px_rgba(30,109,235,0.12)] hover:border-[#1E6DEB]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#D4F85A] text-[#0A1118] px-3.5 py-1 rounded-full text-xs font-black shadow-sm">
                    {post.category}
                  </div>
                </div>

                <div className="p-7 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#1E6DEB]" aria-hidden="true" />
                      <span>{post.date}</span>
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

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-black text-[#1E6DEB]">
                <span>Read Full Article</span>
                <div className="w-8 h-8 rounded-full bg-[#F0F6FE] flex items-center justify-center group-hover:bg-[#D4F85A] group-hover:text-[#0A1118] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
