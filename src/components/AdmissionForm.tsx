"use client";

import { useState } from "react";
import { ArrowUpRight, Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

export default function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    gradeStream: "10th-board",
    preferredTiming: "evening",
    queries: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="inquire" className="py-20 sm:py-28 bg-[#fafbfc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-700 shadow-sm">
            <span>• Get in touch •</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Start your journey with Excellence
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            Schedule a 1-on-1 counseling session and diagnostic assessment at our Goa center.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Campus Contacts */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-[28px] p-6 border border-zinc-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-1">
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#19364f] uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#BB9331]" aria-hidden="true" />
                <span>Goa Campus Location</span>
              </div>
              <p className="text-sm text-zinc-700 pt-2 leading-relaxed">
                Excellence Education Academy<br />
                Panaji / Margao Campus, Goa, India
              </p>
            </div>

            <div className="bg-white rounded-[28px] p-6 border border-zinc-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-1">
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#19364f] uppercase tracking-wider">
                <Phone className="w-4 h-4 text-[#BB9331]" aria-hidden="true" />
                <span>Helpline & WhatsApp</span>
              </div>
              <p className="text-sm text-zinc-700 pt-2">
                <a href="tel:+919876543210" className="font-semibold text-zinc-950 hover:text-[#19364f]">
                  +91 98765 43210
                </a>{" "}
                <span className="text-zinc-400">/</span>{" "}
                <a href="tel:+918322456789" className="text-zinc-600 hover:text-zinc-950">
                  0832-2456789
                </a>
              </p>
            </div>

            <div className="bg-white rounded-[28px] p-6 border border-zinc-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-1">
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#19364f] uppercase tracking-wider">
                <Mail className="w-4 h-4 text-[#BB9331]" aria-hidden="true" />
                <span>Email Admissions</span>
              </div>
              <p className="text-sm text-zinc-700 pt-2">
                <a href="mailto:info@exceleduacademy.com" className="font-semibold text-zinc-950 hover:text-[#19364f]">
                  info@exceleduacademy.com
                </a>
              </p>
            </div>

            <div className="bg-white rounded-[28px] p-6 border border-zinc-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-1">
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#19364f] uppercase tracking-wider">
                <Clock className="w-4 h-4 text-[#BB9331]" aria-hidden="true" />
                <span>Counseling Hours</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 pt-2 leading-relaxed">
                Monday to Saturday: 9:00 AM – 7:30 PM<br />
                Sunday: 10:00 AM – 1:00 PM (By Appointment)
              </p>
            </div>
          </div>

          {/* Right Column: High-End White Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-zinc-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="bg-[#fafbfc] rounded-2xl p-8 border border-zinc-200 text-center space-y-4"
                >
                  <div className="w-14 h-14 bg-[#BB9331]/15 text-[#BB9331] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#BB9331]" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-950">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-zinc-600 max-w-md mx-auto">
                    Thank you, <strong className="text-zinc-950">{formData.studentName}</strong>. Our academic team in Goa will call you at <strong className="text-zinc-950">{formData.phone}</strong> within 24 hours to schedule your counseling session.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        studentName: "",
                        parentName: "",
                        phone: "",
                        email: "",
                        gradeStream: "10th-board",
                        preferredTiming: "evening",
                        queries: "",
                      });
                    }}
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-[#19364f] text-white font-medium text-xs rounded-full hover:bg-[#132c40] transition-colors"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-zinc-100 pb-3">
                    <h3 className="text-xl font-bold text-zinc-950">
                      Admission & Counseling Form
                    </h3>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Fields marked with <span className="text-red-500">*</span> are required.
                    </p>
                  </div>

                  {/* Student & Parent Name Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="studentName"
                        className="block text-xs font-semibold text-zinc-800 mb-1.5"
                      >
                        Student&apos;s Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="studentName"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        placeholder="e.g. Rahul Naik"
                        className="w-full bg-[#fafbfc] text-zinc-900 text-sm px-4 py-3 rounded-full border border-zinc-200 focus:border-[#19364f] focus:bg-white focus:outline-none transition-all placeholder:text-zinc-400 min-h-[46px]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="parentName"
                        className="block text-xs font-semibold text-zinc-800 mb-1.5"
                      >
                        Parent / Guardian Name
                      </label>
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        autoComplete="name"
                        placeholder="e.g. Ramesh Naik"
                        className="w-full bg-[#fafbfc] text-zinc-900 text-sm px-4 py-3 rounded-full border border-zinc-200 focus:border-[#19364f] focus:bg-white focus:outline-none transition-all placeholder:text-zinc-400 min-h-[46px]"
                      />
                    </div>
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold text-zinc-800 mb-1.5"
                      >
                        Mobile / WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="e.g. 9876543210"
                        pattern="[0-9]{10,12}"
                        aria-describedby="phone-hint"
                        className="w-full bg-[#fafbfc] text-zinc-900 text-sm px-4 py-3 rounded-full border border-zinc-200 focus:border-[#19364f] focus:bg-white focus:outline-none transition-all placeholder:text-zinc-400 min-h-[46px]"
                      />
                      <span id="phone-hint" className="text-[11px] text-zinc-400 mt-1 block">
                        We send batch notifications and schedules via SMS/WhatsApp.
                      </span>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-zinc-800 mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        placeholder="e.g. rahul@example.com"
                        className="w-full bg-[#fafbfc] text-zinc-900 text-sm px-4 py-3 rounded-full border border-zinc-200 focus:border-[#19364f] focus:bg-white focus:outline-none transition-all placeholder:text-zinc-400 min-h-[46px]"
                      />
                    </div>
                  </div>

                  {/* Program Stream Selector */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="gradeStream"
                        className="block text-xs font-semibold text-zinc-800 mb-1.5"
                      >
                        Target Course / Class <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="gradeStream"
                        name="gradeStream"
                        value={formData.gradeStream}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#fafbfc] text-zinc-900 text-sm px-4 py-3 rounded-full border border-zinc-200 focus:border-[#19364f] focus:bg-white focus:outline-none transition-all min-h-[46px]"
                      >
                        <option value="class-8-9-foundation">Class 8th / 9th Foundation</option>
                        <option value="10th-board">Class 10th Board (CBSE / ICSE / Goa Board)</option>
                        <option value="11th-12th-neet">Class 11th / 12th + NEET-UG</option>
                        <option value="11th-12th-jee">Class 11th / 12th + JEE Main & Adv</option>
                        <option value="11th-12th-commerce">Class 11th / 12th Commerce</option>
                        <option value="olympiad-talent">Olympiad & NTSE Talent Batch</option>
                        <option value="crash-course">Board Booster Crash Course</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="preferredTiming"
                        className="block text-xs font-semibold text-zinc-800 mb-1.5"
                      >
                        Preferred Timing
                      </label>
                      <select
                        id="preferredTiming"
                        name="preferredTiming"
                        value={formData.preferredTiming}
                        onChange={handleChange}
                        className="w-full bg-[#fafbfc] text-zinc-900 text-sm px-4 py-3 rounded-full border border-zinc-200 focus:border-[#19364f] focus:bg-white focus:outline-none transition-all min-h-[46px]"
                      >
                        <option value="morning">Morning (7:30 AM – 10:30 AM)</option>
                        <option value="evening">Evening (4:30 PM – 7:30 PM)</option>
                        <option value="weekend">Weekend Intensive (Sat & Sun)</option>
                      </select>
                    </div>
                  </div>

                  {/* Specific Questions / Comments */}
                  <div>
                    <label
                      htmlFor="queries"
                      className="block text-xs font-semibold text-zinc-800 mb-1.5"
                    >
                      Questions / Academic Goals
                    </label>
                    <textarea
                      id="queries"
                      name="queries"
                      rows={3}
                      value={formData.queries}
                      onChange={handleChange}
                      placeholder="Tell us about the student's current school, syllabus, or subjects needing focus..."
                      className="w-full bg-[#fafbfc] text-zinc-900 text-sm px-4 py-3 rounded-2xl border border-zinc-200 focus:border-[#19364f] focus:bg-white focus:outline-none transition-all placeholder:text-zinc-400"
                    />
                  </div>

                  {/* Submission Pill Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#19364f] hover:bg-[#132c40] disabled:opacity-70 text-white font-medium text-sm py-3.5 px-6 rounded-full shadow-[0_4px_16px_rgba(25,54,79,0.2)] hover:shadow-[0_8px_24px_rgba(25,54,79,0.28)] transition-all min-h-[48px]"
                    >
                      {submitting ? (
                        <span>Submitting inquiry...</span>
                      ) : (
                        <>
                          <span>Submit admission inquiry</span>
                          <ArrowUpRight className="w-4 h-4 text-white" aria-hidden="true" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-zinc-400 text-center mt-2.5">
                      🔒 Your information is confidential and used solely for academic counseling.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
