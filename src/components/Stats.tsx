export default function Stats() {
  const metrics = [
    {
      value: "2025",
      label: "Estd. In Goa",
      subtext: "Premier coaching foundation",
    },
    {
      value: "15 : 1",
      label: "Student-to-Mentor",
      subtext: "Personal attention guaranteed",
    },
    {
      value: "100%",
      label: "Syllabus Mastery",
      subtext: "NCERT & Board alignment",
    },
    {
      value: "360°",
      label: "Holistic Coaching",
      subtext: "Concept + Exam temperament",
    },
  ];

  return (
    <section className="bg-white py-12 border-b border-zinc-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#19364f]">
                {m.label}
              </div>
              <p className="text-xs text-zinc-500">
                {m.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
