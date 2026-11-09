"use client";

import { useState } from "react";
import { ArrowUpRight, Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle, ChefHat } from "lucide-react";
import { submitInquiry } from "@/app/actions/inquire";

export default function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [studentSuccessName, setStudentSuccessName] = useState("");
  const [phoneSuccess, setPhoneSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const result = await submitInquiry(data);

    setSubmitting(false);

    if (result.success) {
      setStudentSuccessName((data.get("studentName") as string) || "Applicant");
      setPhoneSuccess((data.get("phone") as string) || "");
      setSubmitted(true);
      form.reset();
    } else {
      setErrorMessage(result.error || "Failed to submit inquiry. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-700 shadow-sm">
            <ChefHat className="w-3.5 h-3.5 text-[#BB9331]" aria-hidden="true" />
            <span>ADMISSIONS &amp; CAMPUS VISITS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Get In Touch with Us!
          </h2>

          <p className="text-base text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Take the first step toward a prestigious culinary or hospitality career. Schedule a personalized campus tour and kitchen walkthrough in Goa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form Card (from old site spec) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-zinc-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
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
                    Application Inquiry Received!
                  </h3>
                  <p className="text-sm text-zinc-600 max-w-md mx-auto">
                    Thank you, <strong className="text-zinc-950">{studentSuccessName}</strong>. Your inquiry has been securely submitted. Our admissions coordinator in Goa will call you at <strong className="text-zinc-950">{phoneSuccess}</strong> within 24 hours to schedule your kitchen tour.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setErrorMessage(null);
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
                      Culinary &amp; Hospitality Course Application
                    </h3>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Fields marked with <span className="text-red-500">*</span> are required.
                    </p>
                  </div>

                  {errorMessage && (
                    <div
                      role="alert"
                      className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Field 1: Full Name* */}
                  <div>
                    <label
                      htmlFor="studentName"
                      className="block text-xs font-semibold text-zinc-800 mb-1.5"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      required
                      autoComplete="name"
                      placeholder="e.g. Maria Fernandes"
                      className="w-full bg-[#fafbfc] text-zinc-900 text-sm px-4 py-3 rounded-full border border-zinc-200 focus:border-[#19364f] focus:bg-white focus:outline-none transition-all placeholder:text-zinc-400 min-h-[46px]"
                    />
                  </div>

                  {/* Field 2 & 3: Email Address* (Left) & Phone Number* (Right) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-zinc-800 mb-1.5"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        autoComplete="email"
                        placeholder="e.g. maria@example.com"
                        className="w-full bg-[#fafbfc] text-zinc-900 text-sm px-4 py-3 rounded-full border border-zinc-200 focus:border-[#19364f] focus:bg-white focus:outline-none transition-all placeholder:text-zinc-400 min-h-[46px]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold text-zinc-800 mb-1.5"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="e.g. 9876543210"
                        pattern="[0-9]{10,12}"
                        aria-describedby="phone-hint"
                        className="w-full bg-[#fafbfc] text-zinc-900 text-sm px-4 py-3 rounded-full border border-zinc-200 focus:border-[#19364f] focus:bg-white focus:outline-none transition-all placeholder:text-zinc-400 min-h-[46px]"
                      />
                      <span id="phone-hint" className="text-[11px] text-zinc-400 mt-1 block">
                        Direct contact for interview invitations &amp; brochures.
                      </span>
                    </div>
                  </div>

                  {/* Field 4: Course Interested In* (Dropdown) */}
                  <div>
                    <label
                      htmlFor="gradeStream"
                      className="block text-xs font-semibold text-zinc-800 mb-1.5"
                    >
                      Course Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="gradeStream"
                      name="gradeStream"
                      required
                      defaultValue=""
                      className="w-full bg-[#fafbfc] text-zinc-900 text-sm px-4 py-3 rounded-full border border-zinc-200 focus:border-[#19364f] focus:bg-white focus:outline-none transition-all min-h-[46px]"
                    >
                      <option value="" disabled>Select Course</option>
                      <option value="diploma-culinary">Diploma in Culinary Skills (1 Year - CTH UK)</option>
                      <option value="diploma-patisserie">Diploma in Patisserie and Confectionery Skills (1 Year)</option>
                      <option value="diploma-cruise">Diploma in Cruise Hospitality Services (1 Year + Sea Internship)</option>
                      <option value="cert-culinary">Certificate in Culinary Skills (6 Months)</option>
                      <option value="cert-front-office">Certificate in Front Office / Food &amp; Beverage Service</option>
                      <option value="cert-bartending">Certificate in Bartending / Barista Skills</option>
                    </select>
                  </div>

                  {/* Additional Queries */}
                  <div>
                    <label
                      htmlFor="queries"
                      className="block text-xs font-semibold text-zinc-800 mb-1.5"
                    >
                      Message / Previous Experience (Optional)
                    </label>
                    <textarea
                      id="queries"
                      name="queries"
                      rows={3}
                      placeholder="Share your background, cruise aspirations, or questions..."
                      className="w-full bg-[#fafbfc] text-zinc-900 text-sm px-4 py-3 rounded-2xl border border-zinc-200 focus:border-[#19364f] focus:bg-white focus:outline-none transition-all placeholder:text-zinc-400"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#BB9331] hover:bg-[#d6a943] disabled:opacity-70 text-[#19364f] font-bold text-sm py-3.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all min-h-[48px]"
                    >
                      {submitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <ArrowUpRight className="w-4 h-4 text-[#19364f]" aria-hidden="true" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-zinc-400 text-center mt-2.5">
                      🔒 Your details are kept confidential and used solely for admission counseling.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Contact Details (from old site spec) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-[28px] p-7 border border-zinc-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Office Email
                  </h3>
                  <a
                    href="mailto:admissions@exceleduacademy.com"
                    className="text-base font-semibold text-zinc-950 hover:text-[#19364f] transition-colors block mt-0.5"
                  >
                    admissions@exceleduacademy.com
                  </a>
                  <a
                    href="mailto:info@exceleduacademy.com"
                    className="text-xs text-zinc-500 hover:text-zinc-800"
                  >
                    info@exceleduacademy.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[28px] p-7 border border-zinc-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Office Phone
                  </h3>
                  <a
                    href="tel:+919876543210"
                    className="text-base font-semibold text-zinc-950 hover:text-[#19364f] transition-colors block mt-0.5"
                  >
                    +91 98765 43210
                  </a>
                  <p className="text-xs text-zinc-500">
                    Direct Line: 0832-2456789
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[28px] p-7 border border-zinc-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Office Address
                  </h3>
                  <p className="text-sm font-semibold text-zinc-950 mt-0.5 leading-snug">
                    Excellence Education Academy Campus
                  </p>
                  <p className="text-xs text-zinc-500 leading-relaxed mt-1">
                    Near Coastal Promenade, Panaji / Margao Center,<br />
                    Goa 403001, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[28px] p-7 border border-zinc-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Clock className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Kitchen Tour &amp; Counseling Hours
                  </h3>
                  <p className="text-xs text-zinc-700 mt-1">
                    Monday to Saturday: 9:00 AM – 6:00 PM<br />
                    Walk-in visits &amp; demo class observations welcome
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
