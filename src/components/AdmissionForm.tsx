"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Cake,
  Check,
  ChefHat,
  ChevronDown,
  Clock,
  Hotel,
  Mail,
  MapPin,
  Phone,
  Ship,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  UtensilsCrossed,
  Wine,
} from "lucide-react";
import { submitInquiry } from "@/app/actions/inquire";

const COURSE_OPTIONS = [
  {
    value: "CTH Level 2 Diploma in Culinary Skills",
    level: "CTH Level 2",
    icon: ChefHat,
  },
  {
    value: "CTH Level 2 Diploma in Patisserie and Confectionery Skills",
    level: "CTH Level 2",
    icon: Cake,
  },
  {
    value: "CTH Level 2 Diploma in Cruise Hospitality Services",
    level: "CTH Level 2",
    icon: Ship,
  },
  {
    value: "CTH Level 2 Certificate in Professional Bartending Skills",
    level: "CTH Level 2",
    icon: Wine,
  },
  {
    value: "CTH Level 2 Certificate in Professional Restaurant Front of House Service",
    level: "CTH Level 2",
    icon: Hotel,
  },
  {
    value: "CTH Level 1 Award in Basic Cookery Skills",
    level: "CTH Level 1",
    icon: UtensilsCrossed,
  },
] as const;

export default function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [courseError, setCourseError] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [studentSuccessName, setStudentSuccessName] = useState("");
  const [phoneSuccess, setPhoneSuccess] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const labelId = useId();
  const listboxId = useId();
  const errorId = useId();

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  const selectCourse = (value: string, idx: number) => {
    setSelectedCourse(value);
    setActiveIndex(idx);
    setCourseError(null);
    setDropdownOpen(false);
    triggerRef.current?.focus();
  };

  const handleTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!dropdownOpen) {
        const currentIdx = COURSE_OPTIONS.findIndex(
          (o) => o.value === selectedCourse,
        );
        setActiveIndex(currentIdx >= 0 ? currentIdx : 0);
        setDropdownOpen(true);
        return;
      }
      setActiveIndex((prev) =>
        e.key === "ArrowDown"
          ? (prev + 1) % COURSE_OPTIONS.length
          : (prev - 1 + COURSE_OPTIONS.length) % COURSE_OPTIONS.length,
      );
    } else if (e.key === "Home" && dropdownOpen) {
      e.preventDefault();
      setActiveIndex(0);
    } else if (e.key === "End" && dropdownOpen) {
      e.preventDefault();
      setActiveIndex(COURSE_OPTIONS.length - 1);
    } else if (e.key === "Escape" && dropdownOpen) {
      e.preventDefault();
      setDropdownOpen(false);
    } else if ((e.key === "Enter" || e.key === " ") && dropdownOpen) {
      e.preventDefault();
      const option = COURSE_OPTIONS[activeIndex];
      if (option) selectCourse(option.value, activeIndex);
    }
  };

  const selectedOption = COURSE_OPTIONS.find(
    (opt) => opt.value === selectedCourse,
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!selectedCourse) {
      setCourseError("Please choose a course you are interested in.");
      triggerRef.current?.focus();
      return;
    }

    setCourseError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const result = await submitInquiry(data);

    setSubmitting(false);

    if (result.success) {
      setStudentSuccessName((data.get("studentName") as string) || "Applicant");
      setPhoneSuccess((data.get("phone") as string) || "");
      setSubmitted(true);
      setSelectedCourse("");
      form.reset();
    } else {
      setErrorMessage(
        result.error || "Failed to submit inquiry. Please try again.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F6FE] border border-[#1E6DEB]/20 text-xs font-black text-[#1E6DEB] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ADMISSIONS &amp; CAMPUS VISITS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
            Get In Touch with Us!
          </h2>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Take the first step toward a prestigious culinary or hospitality
            career. Schedule a personalized campus tour and kitchen walkthrough
            in Goa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-slate-200/90 shadow-[0_4px_30px_rgba(10,17,24,0.05)]">
              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="bg-[#F0F6FE] rounded-2xl p-8 border border-[#1E6DEB]/20 text-center space-y-4"
                >
                  <div className="w-14 h-14 bg-white border border-[#1E6DEB]/30 text-[#1E6DEB] rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2
                      className="w-8 h-8 text-[#1E6DEB]"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-2xl font-black text-slate-950">
                    Application Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto font-normal">
                    Thank you,{" "}
                    <strong className="text-slate-950">
                      {studentSuccessName}
                    </strong>
                    . Your inquiry has been securely submitted. Our admissions
                    coordinator in Goa will call you at{" "}
                    <strong className="text-slate-950">{phoneSuccess}</strong>{" "}
                    within 24 hours to schedule your kitchen tour.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setErrorMessage(null);
                    }}
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-[#0A1118] text-white font-black text-xs rounded-full hover:bg-black transition-colors shadow-sm"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-xl font-black text-slate-950">
                      Culinary &amp; Hospitality Course Application
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fields marked with <span className="text-red-500">*</span>{" "}
                      are required.
                    </p>
                  </div>

                  {errorMessage && (
                    <div
                      role="alert"
                      className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2"
                    >
                      <AlertCircle
                        className="w-4 h-4 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Field 1: Full Name* */}
                  <div>
                    <label
                      htmlFor="studentName"
                      className="block text-xs font-bold text-slate-800 mb-1.5"
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
                      className="w-full bg-slate-50 text-slate-900 text-sm px-4 py-3 rounded-full border border-slate-200 focus:border-[#1E6DEB] focus:ring-2 focus:ring-[#1E6DEB]/10 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400 min-h-[46px]"
                    />
                  </div>

                  {/* Field 2 & 3: Email Address* (Left) & Phone Number* (Right) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold text-slate-800 mb-1.5"
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
                        className="w-full bg-slate-50 text-slate-900 text-sm px-4 py-3 rounded-full border border-slate-200 focus:border-[#1E6DEB] focus:ring-2 focus:ring-[#1E6DEB]/10 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400 min-h-[46px]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold text-slate-800 mb-1.5"
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
                        placeholder="10-digit mobile number"
                        pattern="[0-9]{10,12}"
                        aria-describedby="phone-hint"
                        className="w-full bg-slate-50 text-slate-900 text-sm px-4 py-3 rounded-full border border-slate-200 focus:border-[#1E6DEB] focus:ring-2 focus:ring-[#1E6DEB]/10 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400 min-h-[46px]"
                      />
                      <span
                        id="phone-hint"
                        className="text-[11px] text-slate-400 mt-1 block"
                      >
                        Direct contact for interview invitations &amp;
                        brochures.
                      </span>
                    </div>
                  </div>

                  {/* Field 4: Course Interested In* (Custom Branded Dropdown) */}
                  <div ref={dropdownRef} className="relative">
                    <label
                      id={labelId}
                      htmlFor="gradeStream-trigger"
                      className="block text-xs font-bold text-slate-800 mb-1.5"
                    >
                      Course Interested In{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="hidden"
                      name="gradeStream"
                      value={selectedCourse}
                    />
                    <button
                      ref={triggerRef}
                      id="gradeStream-trigger"
                      type="button"
                      role="combobox"
                      aria-haspopup="listbox"
                      aria-expanded={dropdownOpen}
                      aria-controls={listboxId}
                      aria-activedescendant={
                        dropdownOpen
                          ? `${listboxId}-option-${activeIndex}`
                          : undefined
                      }
                      aria-labelledby={labelId}
                      aria-invalid={Boolean(courseError)}
                      aria-describedby={courseError ? errorId : undefined}
                      onClick={() => setDropdownOpen((prev) => !prev)}
                      onKeyDown={handleTriggerKeyDown}
                      className={`w-full px-4 py-3 rounded-full border text-left flex items-center justify-between gap-3 transition-all min-h-[48px] text-base sm:text-sm cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1E6DEB] focus-visible:outline-offset-2 ${
                        courseError
                          ? "bg-red-50/40 border-red-400 text-slate-900"
                          : dropdownOpen
                            ? "bg-white border-[#1E6DEB] ring-2 ring-[#1E6DEB]/10 text-slate-900"
                            : "bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-900"
                      }`}
                    >
                      <span className="flex items-center gap-2.5 min-w-0">
                        {selectedOption ? (
                          <>
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#D4F85A] text-[#0A1118] text-[10px] font-black shrink-0">
                              {selectedOption.level}
                            </span>
                            <span className="font-semibold text-slate-900 truncate">
                              {selectedOption.value}
                            </span>
                          </>
                        ) : (
                          <span className="text-slate-400">Select Course</span>
                        )}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180 text-[#1E6DEB]" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.ul
                          id={listboxId}
                          role="listbox"
                          aria-labelledby={labelId}
                          initial={
                            reduceMotion
                              ? { opacity: 1 }
                              : { opacity: 0, y: -6, scale: 0.98 }
                          }
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={
                            reduceMotion
                              ? { opacity: 0 }
                              : { opacity: 0, y: -4, scale: 0.98 }
                          }
                          transition={{ duration: 0.16, ease: "easeOut" }}
                          className="absolute left-0 right-0 top-full mt-2 z-50 bg-white rounded-3xl border border-slate-200 shadow-[0_20px_50px_rgba(10,17,24,0.14)] p-2 max-h-80 overflow-y-auto space-y-1"
                        >
                          {COURSE_OPTIONS.map((option, idx) => {
                            const Icon = option.icon;
                            const isSelected = selectedCourse === option.value;
                            const isHighlighted = activeIndex === idx;
                            return (
                              <li
                                key={option.value}
                                id={`${listboxId}-option-${idx}`}
                                role="option"
                                aria-selected={isSelected}
                                onMouseEnter={() => setActiveIndex(idx)}
                                onClick={() => selectCourse(option.value, idx)}
                                className={`flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-2xl cursor-pointer transition-colors min-h-[48px] ${
                                  isSelected
                                    ? "bg-[#F0F6FE] text-[#1E6DEB] font-bold"
                                    : isHighlighted
                                      ? "bg-slate-50 text-slate-950"
                                      : "text-slate-800 hover:bg-slate-50"
                                }`}
                              >
                                <span className="flex items-center gap-3 min-w-0">
                                  <span
                                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                                      isSelected
                                        ? "bg-[#1E6DEB] text-white"
                                        : "bg-slate-100 text-slate-600"
                                    }`}
                                  >
                                    <Icon
                                      className="w-4 h-4"
                                      aria-hidden="true"
                                    />
                                  </span>
                                  <span className="min-w-0">
                                    <span className="block text-[10px] font-black uppercase tracking-wider text-[#1E6DEB]">
                                      {option.level}
                                    </span>
                                    <span className="block text-xs sm:text-sm leading-snug">
                                      {option.value}
                                    </span>
                                  </span>
                                </span>
                                {isSelected && (
                                  <span className="w-5 h-5 rounded-full bg-[#D4F85A] text-[#0A1118] flex items-center justify-center shrink-0">
                                    <Check
                                      className="w-3.5 h-3.5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                )}
                              </li>
                            );
                          })}
                        </motion.ul>
                      )}
                    </AnimatePresence>

                    {courseError && (
                      <p
                        id={errorId}
                        role="alert"
                        className="text-xs font-semibold text-red-600 mt-1.5"
                      >
                        {courseError}
                      </p>
                    )}
                  </div>

                  {/* Additional Queries */}
                  <div>
                    <label
                      htmlFor="queries"
                      className="block text-xs font-bold text-slate-800 mb-1.5"
                    >
                      Message / Previous Experience (Optional)
                    </label>
                    <textarea
                      id="queries"
                      name="queries"
                      rows={3}
                      placeholder="Share your background, cruise aspirations, or questions..."
                      className="w-full bg-slate-50 text-slate-900 text-sm px-4 py-3 rounded-2xl border border-slate-200 focus:border-[#1E6DEB] focus:ring-2 focus:ring-[#1E6DEB]/10 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Submit Button in Electric Lime matching reference */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#D4F85A] hover:bg-[#c7f445] disabled:opacity-70 text-[#0A1118] font-black text-sm py-4 px-6 rounded-full shadow-[0_8px_24px_rgba(212,248,90,0.35)] hover:shadow-[0_12px_28px_rgba(212,248,90,0.45)] transition-all min-h-[48px] active:scale-95"
                    >
                      {submitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <ArrowUpRight
                            className="w-4 h-4 text-[#0A1118]"
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2.5">
                      🔒 Your details are kept confidential and used solely for
                      admission counseling.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-[28px] p-7 border border-slate-200/90 shadow-[0_4px_20px_rgba(10,17,24,0.03)] hover:shadow-md hover:border-[#1E6DEB]/40 transition-all space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F0F6FE] border border-[#1E6DEB]/20 text-[#1E6DEB] flex items-center justify-center shadow-xs">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Office Email
                  </h3>
                  <a
                    href="mailto:contact@exceleduacademy.com"
                    className="text-base font-bold text-slate-950 hover:text-[#1E6DEB] transition-colors block mt-0.5"
                  >
                    contact@exceleduacademy.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[28px] p-7 border border-slate-200/90 shadow-[0_4px_20px_rgba(10,17,24,0.03)] hover:shadow-md hover:border-[#1E6DEB]/40 transition-all space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4F85A] text-[#0A1118] flex items-center justify-center shadow-xs font-black">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Office Phone
                  </h3>
                  <a
                    href="tel:+918329208271"
                    className="text-base font-bold text-slate-950 hover:text-[#1E6DEB] transition-colors block mt-0.5"
                  >
                    +91 8329208271
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[28px] p-7 border border-slate-200/90 shadow-[0_4px_20px_rgba(10,17,24,0.03)] hover:shadow-md hover:border-[#1E6DEB]/40 transition-all space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F0F6FE] border border-[#1E6DEB]/20 text-[#1E6DEB] flex items-center justify-center shadow-xs">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Office Address
                  </h3>
                  <p className="text-sm font-bold text-slate-950 mt-0.5 leading-snug">
                    Excellence Education Academy
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">
                    The Capital, 660/3, above Max Showroom, near O&apos;Coqueiro
                    Restaurant, Defence Colony, Alto Porvorim, Porvorim,
                    Salvador du Mundu, Goa 403521
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[28px] p-7 border border-slate-200/90 shadow-[0_4px_20px_rgba(10,17,24,0.03)] hover:shadow-md hover:border-[#1E6DEB]/40 transition-all space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4F85A] text-[#0A1118] flex items-center justify-center shadow-xs font-black">
                  <Clock className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Kitchen Tour &amp; Counseling Hours
                  </h3>
                  <p className="text-xs text-slate-700 mt-1 font-medium">
                    Monday to Saturday: 9:00 AM – 6:00 PM
                    <br />
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
