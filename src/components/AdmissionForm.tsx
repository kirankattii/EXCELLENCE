"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from "lucide-react";

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

    // Simulate async API submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="inquire" className="py-20 bg-white text-[#19364f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Campus & Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BB9331]/15 text-[#BB9331] text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                <span>Admissions 2025–2026</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19364f] tracking-tight">
                Get in Touch with Our Academic Counselors
              </h2>
              <p className="text-base text-zinc-600 mt-3 leading-relaxed">
                Take the first step toward scholastic excellence. Visit our Goa academy center,
                call our academic counseling desk, or fill out the inquiry form.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#f0f5fa] border border-[#19364f]/10">
                <div className="p-3 rounded-lg bg-[#19364f] text-[#BB9331] flex-shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#19364f]">Academy Campus</h3>
                  <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                    Excellence Education Academy Campus<br />
                    Panaji / Margao Center, Goa, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#f0f5fa] border border-[#19364f]/10">
                <div className="p-3 rounded-lg bg-[#19364f] text-[#BB9331] flex-shrink-0">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#19364f]">Helpline & WhatsApp</h3>
                  <p className="text-xs text-zinc-600 mt-1">
                    <a href="tel:+919876543210" className="hover:text-[#BB9331] font-semibold text-[#19364f]">
                      +91 98765 43210
                    </a>{" "}
                    /{" "}
                    <a href="tel:+918322456789" className="hover:text-[#BB9331] text-zinc-600">
                      0832-2456789
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#f0f5fa] border border-[#19364f]/10">
                <div className="p-3 rounded-lg bg-[#19364f] text-[#BB9331] flex-shrink-0">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#19364f]">Official Email</h3>
                  <p className="text-xs text-zinc-600 mt-1">
                    <a href="mailto:info@exceleduacademy.com" className="hover:text-[#BB9331] font-semibold text-[#19364f]">
                      info@exceleduacademy.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#fdf8ed] border border-[#BB9331]/30">
                <div className="p-3 rounded-lg bg-[#BB9331] text-[#19364f] flex-shrink-0">
                  <Clock className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#19364f]">Visiting & Counseling Hours</h3>
                  <p className="text-xs text-zinc-600 mt-1">
                    Monday to Saturday: 9:00 AM – 7:30 PM<br />
                    Sunday: 10:00 AM – 1:00 PM (By Appointment)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#f0f5fa] rounded-2xl p-6 sm:p-10 border border-[#19364f]/15 shadow-md">
              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="bg-white rounded-xl p-8 border-2 border-[#BB9331] text-center space-y-4"
                >
                  <div className="w-14 h-14 bg-[#BB9331]/15 text-[#BB9331] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#BB9331]" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#19364f]">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-zinc-600 max-w-md mx-auto">
                    Thank you, <strong className="text-[#19364f]">{formData.studentName}</strong>. Our academic coordinator in Goa will reach out to you within 24 hours at <strong className="text-[#19364f]">{formData.phone}</strong> to arrange your counseling session.
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
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-[#19364f] text-white font-semibold text-xs rounded-lg hover:bg-[#254a6b] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
                  <div className="border-b border-[#19364f]/10 pb-4">
                    <h3 className="text-xl font-bold text-[#19364f]">
                      Admission & Counseling Form
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1">
                      Fill out the form below. Fields marked with <span className="text-red-600 font-bold">*</span> are required.
                    </p>
                  </div>

                  {/* Student & Parent Name Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="studentName"
                        className="block text-xs font-bold text-[#19364f] mb-1.5"
                      >
                        Student&apos;s Full Name <span className="text-red-600">*</span>
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
                        className="w-full bg-white text-[#19364f] text-sm px-3.5 py-2.5 rounded-lg border border-zinc-300 focus:border-[#BB9331] focus:ring-2 focus:ring-[#BB9331]/30 focus:outline-none transition-all placeholder:text-zinc-400 min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="parentName"
                        className="block text-xs font-bold text-[#19364f] mb-1.5"
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
                        className="w-full bg-white text-[#19364f] text-sm px-3.5 py-2.5 rounded-lg border border-zinc-300 focus:border-[#BB9331] focus:ring-2 focus:ring-[#BB9331]/30 focus:outline-none transition-all placeholder:text-zinc-400 min-h-[44px]"
                      />
                    </div>
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold text-[#19364f] mb-1.5"
                      >
                        Contact Number / WhatsApp <span className="text-red-600">*</span>
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
                        className="w-full bg-white text-[#19364f] text-sm px-3.5 py-2.5 rounded-lg border border-zinc-300 focus:border-[#BB9331] focus:ring-2 focus:ring-[#BB9331]/30 focus:outline-none transition-all placeholder:text-zinc-400 min-h-[44px]"
                      />
                      <span id="phone-hint" className="text-[11px] text-zinc-500 mt-1 block">
                        Enter 10-digit mobile number for SMS/WhatsApp updates.
                      </span>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold text-[#19364f] mb-1.5"
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
                        className="w-full bg-white text-[#19364f] text-sm px-3.5 py-2.5 rounded-lg border border-zinc-300 focus:border-[#BB9331] focus:ring-2 focus:ring-[#BB9331]/30 focus:outline-none transition-all placeholder:text-zinc-400 min-h-[44px]"
                      />
                    </div>
                  </div>

                  {/* Program Stream Selector */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="gradeStream"
                        className="block text-xs font-bold text-[#19364f] mb-1.5"
                      >
                        Target Course / Class <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="gradeStream"
                        name="gradeStream"
                        value={formData.gradeStream}
                        onChange={handleChange}
                        required
                        className="w-full bg-white text-[#19364f] text-sm px-3.5 py-2.5 rounded-lg border border-zinc-300 focus:border-[#BB9331] focus:ring-2 focus:ring-[#BB9331]/30 focus:outline-none transition-all min-h-[44px]"
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
                        className="block text-xs font-bold text-[#19364f] mb-1.5"
                      >
                        Preferred Batch Timing
                      </label>
                      <select
                        id="preferredTiming"
                        name="preferredTiming"
                        value={formData.preferredTiming}
                        onChange={handleChange}
                        className="w-full bg-white text-[#19364f] text-sm px-3.5 py-2.5 rounded-lg border border-zinc-300 focus:border-[#BB9331] focus:ring-2 focus:ring-[#BB9331]/30 focus:outline-none transition-all min-h-[44px]"
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
                      className="block text-xs font-bold text-[#19364f] mb-1.5"
                    >
                      Questions / Specific Academic Needs
                    </label>
                    <textarea
                      id="queries"
                      name="queries"
                      rows={3}
                      value={formData.queries}
                      onChange={handleChange}
                      placeholder="Mention any specific subjects, current school, or board details..."
                      className="w-full bg-white text-[#19364f] text-sm px-3.5 py-2.5 rounded-lg border border-zinc-300 focus:border-[#BB9331] focus:ring-2 focus:ring-[#BB9331]/30 focus:outline-none transition-all placeholder:text-zinc-400"
                    />
                  </div>

                  {/* Submission Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#BB9331] hover:bg-[#d6a943] disabled:opacity-70 text-[#19364f] font-bold text-base py-3.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all focus-visible:outline-2 focus-visible:outline-[#19364f] min-h-[48px]"
                    >
                      {submitting ? (
                        <span>Submitting Your Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" aria-hidden="true" />
                          <span>Submit Admission Inquiry</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-zinc-500 text-center mt-2.5">
                      🔒 Your details are kept private and used only for academic counseling.
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

