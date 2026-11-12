"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  AlertCircle,
  Award,
  Cake,
  Calendar,
  Check,
  CheckCircle2,
  ChefHat,
  ChevronDown,
  Clock,
  GraduationCap,
  Hotel,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Ship,
  Sparkles,
  UtensilsCrossed,
  Wine,
} from "lucide-react";
import { AnimatedArrow } from "@/components/ui/AnimatedArrow";
import { submitInquiry } from "@/app/actions/inquire";
import {
  COURSE_PROGRAMS,
  resolveCourseParam,
  type CourseIconName,
  type CourseProgram,
} from "@/data/courses";

const EDUCATION_LEVELS = [
  { id: "10th-pass", label: "10th Pass" },
  { id: "12th-pass", label: "12th Pass" },
  { id: "graduate", label: "Graduate" },
  { id: "working-pro", label: "Working Pro" },
] as const;

function ProgramIcon({
  name,
  className = "w-5 h-5",
}: {
  name: CourseIconName;
  className?: string;
}) {
  switch (name) {
    case "chef":
      return <ChefHat className={className} aria-hidden="true" />;
    case "cake":
      return <Cake className={className} aria-hidden="true" />;
    case "ship":
      return <Ship className={className} aria-hidden="true" />;
    case "utensils":
      return <UtensilsCrossed className={className} aria-hidden="true" />;
    case "hotel":
      return <Hotel className={className} aria-hidden="true" />;
    case "wine":
      return <Wine className={className} aria-hidden="true" />;
    case "award":
      return <Award className={className} aria-hidden="true" />;
  }
}

export default function EnrollExperience() {
  const searchParams = useSearchParams();
  const rawCourseParam = searchParams.get("course");
  const rawPathwayParam = searchParams.get("pathway");

  const preselectedCourse = useMemo(() => {
    const resolved = resolveCourseParam(rawCourseParam);
    if (resolved) return resolved;
    if (rawPathwayParam?.toLowerCase() === "rpl") {
      return resolveCourseParam("rpl-certification");
    }
    return null;
  }, [rawCourseParam, rawPathwayParam]);

  return (
    <EnrollForm
      key={preselectedCourse?.id ?? "default"}
      preselectedCourse={preselectedCourse}
    />
  );
}

function EnrollForm({
  preselectedCourse,
}: {
  preselectedCourse: CourseProgram | null;
}) {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(
    () => preselectedCourse?.id ?? "",
  );
  const [wasAutoSelected, setWasAutoSelected] = useState<boolean>(
    () => Boolean(preselectedCourse),
  );
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [educationLevel, setEducationLevel] = useState<string>(
    () => (preselectedCourse?.id === "rpl-certification" ? "working-pro" : "10th-pass"),
  );
  const [queries, setQueries] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    name: string;
    phone: string;
    courseTitle: string;
  } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [liveAnnouncement, setLiveAnnouncement] = useState("");

  const formRef = useRef<HTMLFormElement>(null);
  const courseSelectRef = useRef<HTMLSelectElement>(null);
  const reduceMotion = useReducedMotion() ?? false;

  const formHeadingId = useId();
  const courseErrorId = useId();
  const nameErrorId = useId();
  const emailHintId = useId();
  const emailErrorId = useId();
  const phoneHintId = useId();
  const phoneErrorId = useId();

  const selectedCourse = useMemo(
    () => COURSE_PROGRAMS.find((c) => c.id === selectedCourseId) ?? null,
    [selectedCourseId],
  );

  // Sync aria-invalid and dynamic error aria-describedby with :user-invalid / fallback
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const dirtyState = new WeakMap<
      HTMLElement,
      { hasInteracted: boolean; hasBlurred: boolean }
    >();
    const flagged = new WeakSet<HTMLElement>();
    const announced = new WeakSet<HTMLElement>();
    const supportsUserInvalid = CSS.supports("selector(:user-invalid)");
    let announceTimer: number | undefined;

    const linkError = (el: HTMLElement, shown: boolean) => {
      const errId = el.dataset.error;
      if (!errId) return;
      const ids = (el.getAttribute("aria-describedby") || "")
        .split(/\s+/)
        .filter((id) => id && id !== errId);
      if (shown) ids.push(errId);
      if (ids.length) el.setAttribute("aria-describedby", ids.join(" "));
      else el.removeAttribute("aria-describedby");
    };

    const announceFieldError = (el: HTMLElement) => {
      const errId = el.dataset.error;
      if (!errId) return;
      const errNode = document.getElementById(errId);
      if (!errNode) return;
      const labelText =
        (el as HTMLInputElement).labels?.[0]?.textContent?.replace(/\*/g, "").trim() || "";
      const prefix = labelText ? `${labelText}: ` : "";
      window.clearTimeout(announceTimer);
      setLiveAnnouncement("");
      announceTimer = window.setTimeout(() => {
        setLiveAnnouncement(`${prefix}${errNode.textContent?.trim() || ""}`);
      }, 350);
    };

    const syncElement = (
      target: EventTarget | null,
      shouldAnnounce = false,
    ) => {
      if (
        !(
          target instanceof HTMLInputElement ||
          target instanceof HTMLSelectElement ||
          target instanceof HTMLTextAreaElement
        )
      ) {
        return;
      }

      const isInvalid = supportsUserInvalid
        ? target.matches(":user-invalid")
        : target.classList.contains("user-invalid-fallback");

      if (isInvalid) {
        if (shouldAnnounce && !announced.has(target)) {
          announceFieldError(target);
          announced.add(target);
        }
        target.setAttribute("aria-invalid", "true");
        linkError(target, true);
        flagged.add(target);
      } else if (
        flagged.has(target) ||
        target.getAttribute("aria-invalid") !== "true"
      ) {
        target.setAttribute("aria-invalid", "false");
        linkError(target, false);
        flagged.delete(target);
        announced.delete(target);
      }
    };

    const updateFallbackValidity = (el: HTMLElement) => {
      if (
        !(
          el instanceof HTMLInputElement ||
          el instanceof HTMLSelectElement ||
          el instanceof HTMLTextAreaElement
        )
      ) {
        return;
      }
      const valid = el.validity.valid;
      el.classList.toggle("user-invalid-fallback", !valid);
      el.classList.toggle("user-valid-fallback", valid);
    };

    form
      .querySelectorAll("input, select, textarea")
      .forEach((el) => syncElement(el));

    const onBlur = (e: FocusEvent) => {
      const target = e.target as HTMLElement | null;
      if (!supportsUserInvalid && target) {
        const state = dirtyState.get(target) || {
          hasInteracted: false,
          hasBlurred: false,
        };
        state.hasBlurred = true;
        dirtyState.set(target, state);
        if (state.hasInteracted) updateFallbackValidity(target);
      }
      syncElement(target, true);
    };

    const onInput = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!supportsUserInvalid && target) {
        const state = dirtyState.get(target) || {
          hasInteracted: false,
          hasBlurred: false,
        };
        state.hasInteracted = true;
        dirtyState.set(target, state);
        if (state.hasBlurred) updateFallbackValidity(target);
      }
      if (target?.hasAttribute("aria-invalid")) syncElement(target, false);
    };

    const onChange = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!supportsUserInvalid && target) {
        const state = dirtyState.get(target) || {
          hasInteracted: false,
          hasBlurred: false,
        };
        state.hasInteracted = true;
        dirtyState.set(target, state);
        if (state.hasBlurred) updateFallbackValidity(target);
      }
      syncElement(target, true);
    };

    const onInvalid = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!supportsUserInvalid && target) {
        dirtyState.set(target, { hasInteracted: true, hasBlurred: true });
        updateFallbackValidity(target);
      }
      if (target) announced.add(target);
      syncElement(target, false);
    };

    form.addEventListener("blur", onBlur, true);
    form.addEventListener("input", onInput);
    form.addEventListener("change", onChange, true);
    form.addEventListener("invalid", onInvalid, true);

    return () => {
      window.clearTimeout(announceTimer);
      form.removeEventListener("blur", onBlur, true);
      form.removeEventListener("input", onInput);
      form.removeEventListener("change", onChange, true);
      form.removeEventListener("invalid", onInvalid, true);
    };
  }, [submittedData]);

  const handleQuickSelectCourse = useCallback(
    (courseId: string) => {
      setSelectedCourseId(courseId);
      setWasAutoSelected(false);
      if (courseId === "rpl-certification") {
        setEducationLevel("working-pro");
      }
      courseSelectRef.current?.focus();
    },
    [],
  );

  const step1Done = Boolean(selectedCourse);
  const step2Done =
    fullName.trim().length >= 2 &&
    email.includes("@") &&
    phone.replace(/\D/g, "").length >= 10;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError(null);

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector<HTMLElement>(":invalid");
      // Trigger browser invalid events so :user-invalid & ARIA state sync
      form.reportValidity();
      firstInvalid?.focus();
      return;
    }

    setSubmitting(true);
    const data = new FormData(form);
    data.set("gradeStream", selectedCourse?.title ?? "General Inquiry");
    data.set("source", "enroll-page");

    const result = await submitInquiry(data);
    setSubmitting(false);

    if (result.success) {
      setSubmittedData({
        referenceId: result.referenceId || "EEA-APP",
        name: fullName.trim(),
        phone: phone.trim(),
        courseTitle: selectedCourse?.title ?? "CTH Program",
      });
    } else {
      setServerError(
        result.error || "Failed to submit application. Please try again.",
      );
    }
  };

  const resetForAnother = () => {
    setSubmittedData(null);
    setServerError(null);
    setFullName("");
    setEmail("");
    setPhone("");
    setCity("");
    setQueries("");
  };

  return (
    <section className="pt-5 pb-12 sm:pt-12 sm:pb-20 bg-[#F8FAFC] border-b border-slate-200/80">
      {/* Single polite live region for field validation feedback */}
      <div aria-live="polite" className="visually-hidden">
        {liveAnnouncement}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-5 sm:space-y-8">
        {/* Progress Indicator Bar */}
        {!submittedData && (
          <nav aria-label="Application steps" className="max-w-3xl">
            <ol className="grid grid-cols-3 gap-2 sm:gap-4">
              <li
                aria-current={!step1Done ? "step" : undefined}
                className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start text-center sm:text-left gap-1.5 sm:gap-2.5 px-2 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl border text-[11px] sm:text-xs font-bold transition-colors ${
                  step1Done
                    ? "bg-[#F0F6FE] border-[#1E6DEB]/30 text-[#1E6DEB]"
                    : "bg-white border-slate-200 text-slate-900 shadow-xs"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 ${
                    step1Done
                      ? "bg-[#1E6DEB] text-white"
                      : "bg-[#D4F85A] text-[#0A1118]"
                  }`}
                >
                  {step1Done ? (
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  ) : (
                    "1"
                  )}
                </span>
                <span className="sm:hidden">Program</span>
                <span className="hidden sm:inline">Select Program</span>
              </li>

              <li
                aria-current={step1Done && !step2Done ? "step" : undefined}
                className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start text-center sm:text-left gap-1.5 sm:gap-2.5 px-2 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl border text-[11px] sm:text-xs font-bold transition-colors ${
                  step2Done
                    ? "bg-[#F0F6FE] border-[#1E6DEB]/30 text-[#1E6DEB]"
                    : step1Done
                      ? "bg-white border-[#1E6DEB]/40 text-slate-950 shadow-xs"
                      : "bg-white/70 border-slate-200 text-slate-500"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 ${
                    step2Done
                      ? "bg-[#1E6DEB] text-white"
                      : step1Done
                        ? "bg-[#D4F85A] text-[#0A1118]"
                        : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {step2Done ? (
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  ) : (
                    "2"
                  )}
                </span>
                <span className="sm:hidden">Details</span>
                <span className="hidden sm:inline">Your Details</span>
              </li>

              <li
                aria-current={step1Done && step2Done ? "step" : undefined}
                className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start text-center sm:text-left gap-1.5 sm:gap-2.5 px-2 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl border text-[11px] sm:text-xs font-bold transition-colors ${
                  step1Done && step2Done
                    ? "bg-white border-[#1E6DEB]/40 text-slate-950 shadow-xs"
                    : "bg-white/70 border-slate-200 text-slate-500"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 ${
                    step1Done && step2Done
                      ? "bg-[#D4F85A] text-[#0A1118]"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  3
                </span>
                <span className="sm:hidden">Confirm</span>
                <span className="hidden sm:inline">Confirm Seat</span>
              </li>
            </ol>
          </nav>
        )}

        {/* Mobile Selected Course Summary Strip */}
        {!submittedData && selectedCourse && (
          <div className="lg:hidden bg-white rounded-2xl p-3 border border-slate-200/90 shadow-xs flex items-center gap-3">
            <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-slate-100 shrink-0">
              <Image
                src={selectedCourse.image}
                alt={selectedCourse.imageAlt}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="inline-block bg-[#D4F85A] text-[#0A1118] text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                  {selectedCourse.level}
                </span>
                <span className="text-[10px] font-bold text-slate-500 truncate">
                  {selectedCourse.shortDuration}
                </span>
              </div>
              <p className="text-xs font-black text-slate-950 leading-snug mt-1 line-clamp-1">
                {selectedCourse.title}
              </p>
            </div>
            <a
              href="#program-preview"
              className="shrink-0 text-[11px] font-bold text-[#1E6DEB] hover:underline px-2 py-1"
            >
              Details
            </a>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left Column: Enrollment Application Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl sm:rounded-[32px] p-4 sm:p-10 border border-slate-200/90 shadow-[0_8px_36px_rgba(10,17,24,0.05)]">
              {submittedData ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="py-4 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-[#D4F85A] text-[#0A1118] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
                  </div>

                  <div className="space-y-2">
                    <span className="inline-block bg-[#F0F6FE] text-[#1E6DEB] border border-[#1E6DEB]/20 text-[11px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full">
                      Ref: {submittedData.referenceId}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                      Application Received, {submittedData.name}!
                    </h2>
                    <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                      We have reserved your counseling request for{" "}
                      <strong className="text-slate-950">
                        {submittedData.courseTitle}
                      </strong>
                      . Our Goa admissions team will call{" "}
                      <strong className="text-slate-950">
                        {submittedData.phone}
                      </strong>{" "}
                      within 24 hours.
                    </p>
                  </div>

                  <div className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-5 border border-slate-200/80 text-left max-w-md mx-auto space-y-2 text-xs">
                    <div className="flex justify-between gap-4">
                      <span className="text-slate-500 font-semibold">
                        Program
                      </span>
                      <span className="text-slate-950 font-black text-right">
                        {submittedData.courseTitle}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-slate-500 font-semibold">
                        Campus
                      </span>
                      <span className="text-slate-950 font-bold">
                        Alto Porvorim, Goa
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={`https://wa.me/918329208271?text=${encodeURIComponent(
                        `Hi Excellence Education Academy, I just applied for ${submittedData.courseTitle} (Ref: ${submittedData.referenceId}).`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D4F85A] hover:bg-[#c7f445] text-[#0A1118] font-black text-xs px-6 py-3.5 rounded-full shadow-md transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      <span>Fast-Track on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={resetForAnother}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-[#1E6DEB] text-white font-black text-xs px-6 py-3.5 rounded-full transition-colors cursor-pointer"
                    >
                      <span>Apply for Another Program</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  aria-labelledby={formHeadingId}
                  noValidate
                  className="space-y-4 sm:space-y-7"
                >
                  <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div>
                      <h2
                        id={formHeadingId}
                        className="text-lg sm:text-2xl font-black text-slate-950 tracking-tight"
                      >
                        CTH Program Enrollment Form
                      </h2>
                      <p className="text-xs text-slate-500 mt-1">
                        Fields marked with{" "}
                        <span className="text-red-500 font-bold">*</span> are
                        required. Takes under 60 seconds.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-black text-[#1E6DEB] bg-[#F0F6FE] border border-[#1E6DEB]/20 px-3 py-1 rounded-full self-start shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>No Application Fee</span>
                    </span>
                  </div>

                  {serverError && (
                    <div
                      role="alert"
                      className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-2xl flex items-center gap-2"
                    >
                      <AlertCircle
                        className="w-4 h-4 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{serverError}</span>
                    </div>
                  )}

                  {/* Step 1: Program Dropdown Selection */}
                  <fieldset className="space-y-3">
                    <legend className="text-xs font-black uppercase tracking-widest text-[#1E6DEB] mb-1">
                      1. Program Selection
                    </legend>

                    <div className="enroll-field relative">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <label
                          htmlFor="enroll-course"
                          className="block text-xs font-bold text-slate-800"
                        >
                          Select Your CTH Program{" "}
                          <span className="text-red-500" aria-hidden="true">
                            *
                          </span>
                        </label>

                        {wasAutoSelected && selectedCourse && (
                          <span className="inline-flex items-center gap-1 bg-[#D4F85A] text-[#0A1118] text-[10px] font-black px-2.5 py-0.5 rounded-full">
                            <Sparkles className="w-3 h-3" aria-hidden="true" />
                            <span>Pre-selected for you</span>
                          </span>
                        )}
                      </div>

                      <input
                        type="hidden"
                        name="gradeStream"
                        value={selectedCourse?.title ?? ""}
                      />

                      <div className="relative">
                        <select
                          ref={courseSelectRef}
                          id="enroll-course"
                          name="courseSlug"
                          required
                          value={selectedCourseId}
                          data-error={courseErrorId}
                          onChange={(e) => {
                            setSelectedCourseId(e.target.value);
                            setWasAutoSelected(false);
                            if (e.target.value === "rpl-certification") {
                              setEducationLevel("working-pro");
                            }
                          }}
                          className="enroll-select appearance-none w-full bg-slate-50 hover:bg-white text-slate-950 font-semibold text-xs sm:text-sm px-3.5 sm:px-4 pr-10 sm:pr-11 py-2 sm:py-3.5 rounded-xl sm:rounded-2xl border border-slate-200 focus:border-[#1E6DEB] focus:ring-2 focus:ring-[#1E6DEB]/15 focus:bg-white focus:outline-none transition-all min-h-[40px] sm:min-h-[50px] cursor-pointer truncate"
                        >
                          <option value="" disabled>
                            Choose a CTH-UK hospitality course...
                          </option>
                          <optgroup label="CTH Level 2 Diplomas & Certificates">
                            {COURSE_PROGRAMS.filter(
                              (c) =>
                                c.track === "diploma" ||
                                c.track === "certificate",
                            ).map((course) => (
                              <option key={course.id} value={course.id}>
                                {course.title} ({course.shortDuration})
                              </option>
                            ))}
                          </optgroup>
                          <optgroup label="Foundation & Working Professional Pathways">
                            {COURSE_PROGRAMS.filter(
                              (c) => c.track === "award" || c.track === "rpl",
                            ).map((course) => (
                              <option key={course.id} value={course.id}>
                                {course.title} ({course.shortDuration})
                              </option>
                            ))}
                          </optgroup>
                        </select>

                        <ChevronDown
                          className="enroll-select-chevron w-4 h-4 text-slate-500 pointer-events-none absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2"
                          aria-hidden="true"
                        />
                      </div>

                      <div
                        id={courseErrorId}
                        className="enroll-error-msg items-center gap-1.5 text-xs font-semibold text-red-600 mt-1.5"
                      >
                        <AlertCircle
                          className="w-3.5 h-3.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span>
                          Please choose the culinary or hospitality program you
                          want to apply for.
                        </span>
                      </div>
                    </div>
                  </fieldset>

                  {/* Step 2: Applicant Details */}
                  <fieldset className="space-y-3 sm:space-y-4">
                    <legend className="text-xs font-black uppercase tracking-widest text-[#1E6DEB] mb-1">
                      2. Applicant Details
                    </legend>

                    <div className="enroll-field">
                      <label
                        htmlFor="enroll-name"
                        className="block text-xs font-bold text-slate-800 mb-1"
                      >
                        Full Name{" "}
                        <span className="text-red-500" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        id="enroll-name"
                        name="studentName"
                        type="text"
                        required
                        minLength={2}
                        autoComplete="name"
                        enterKeyHint="next"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        data-error={nameErrorId}
                        placeholder="e.g. Rohan Naik"
                        className="w-full bg-slate-50 text-slate-950 text-sm px-3.5 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 focus:border-[#1E6DEB] focus:ring-2 focus:ring-[#1E6DEB]/15 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400 min-h-[40px] sm:min-h-[48px]"
                      />
                      <div
                        id={nameErrorId}
                        className="enroll-error-msg items-center gap-1.5 text-xs font-semibold text-red-600 mt-1.5"
                      >
                        <AlertCircle
                          className="w-3.5 h-3.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span>
                          Please enter your full name (at least 2 characters).
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="enroll-field">
                        <label
                          htmlFor="enroll-email"
                          className="block text-xs font-bold text-slate-800 mb-0.5 sm:mb-1"
                        >
                          Email Address{" "}
                          <span className="text-red-500" aria-hidden="true">
                            *
                          </span>
                        </label>
                        <span
                          id={emailHintId}
                          className="block text-[11px] text-slate-500 mb-1 sm:mb-1.5"
                        >
                          For brochure &amp; admission confirmation
                        </span>
                        <input
                          id="enroll-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          autoCorrect="off"
                          autoCapitalize="none"
                          spellCheck={false}
                          enterKeyHint="next"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          aria-describedby={emailHintId}
                          data-error={emailErrorId}
                          placeholder="you@example.com"
                          className="w-full bg-slate-50 text-slate-950 text-sm px-3.5 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 focus:border-[#1E6DEB] focus:ring-2 focus:ring-[#1E6DEB]/15 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400 min-h-[40px] sm:min-h-[48px]"
                        />
                        <div
                          id={emailErrorId}
                          className="enroll-error-msg items-center gap-1.5 text-xs font-semibold text-red-600 mt-1.5"
                        >
                          <AlertCircle
                            className="w-3.5 h-3.5 shrink-0"
                            aria-hidden="true"
                          />
                          <span>
                            Enter an email address in the format
                            you@example.com.
                          </span>
                        </div>
                      </div>

                      <div className="enroll-field">
                        <label
                          htmlFor="enroll-phone"
                          className="block text-xs font-bold text-slate-800 mb-0.5 sm:mb-1"
                        >
                          Mobile / WhatsApp Number{" "}
                          <span className="text-red-500" aria-hidden="true">
                            *
                          </span>
                        </label>
                        <span
                          id={phoneHintId}
                          className="block text-[11px] text-slate-500 mb-1 sm:mb-1.5"
                        >
                          10-digit number for counselor callback
                        </span>
                        <input
                          id="enroll-phone"
                          name="phone"
                          type="tel"
                          required
                          inputMode="tel"
                          autoComplete="tel"
                          enterKeyHint="next"
                          pattern="[0-9+\-\s()]{10,16}"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          aria-describedby={phoneHintId}
                          data-error={phoneErrorId}
                          placeholder="+91 98765 43210"
                          className="w-full bg-slate-50 text-slate-950 text-sm px-3.5 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 focus:border-[#1E6DEB] focus:ring-2 focus:ring-[#1E6DEB]/15 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400 min-h-[40px] sm:min-h-[48px]"
                        />
                        <div
                          id={phoneErrorId}
                          className="enroll-error-msg items-center gap-1.5 text-xs font-semibold text-red-600 mt-1.5"
                        >
                          <AlertCircle
                            className="w-3.5 h-3.5 shrink-0"
                            aria-hidden="true"
                          />
                          <span>
                            Enter a valid 10-digit mobile or WhatsApp number.
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="enroll-city"
                        className="block text-xs font-bold text-slate-800 mb-1"
                      >
                        City / Location (Optional)
                      </label>
                      <input
                        id="enroll-city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        enterKeyHint="next"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Mapusa / Panaji, Goa"
                        className="w-full bg-slate-50 text-slate-950 text-sm px-3.5 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 focus:border-[#1E6DEB] focus:ring-2 focus:ring-[#1E6DEB]/15 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400 min-h-[40px] sm:min-h-[48px]"
                      />
                    </div>
                  </fieldset>

                  {/* Step 3: Background & Career Goals */}
                  <div className="space-y-4 sm:space-y-5">
                    <fieldset className="space-y-2">
                      <legend className="text-xs font-black uppercase tracking-widest text-[#1E6DEB] mb-1">
                        3. Education &amp; Background
                      </legend>
                      <p className="text-xs font-bold text-slate-800">
                        Current Education / Experience
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {EDUCATION_LEVELS.map((lvl) => {
                          const inputId = `edu-${lvl.id}`;
                          const checked = educationLevel === lvl.id;
                          return (
                            <label
                              key={lvl.id}
                              htmlFor={inputId}
                              className={`flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-all min-h-[38px] sm:min-h-[44px] whitespace-nowrap has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-[#1E6DEB] has-[:focus-visible]:outline-offset-2 ${
                                checked
                                  ? "bg-[#0A1118] border-[#0A1118] text-[#D4F85A] shadow-xs"
                                  : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                              }`}
                            >
                              <input
                                id={inputId}
                                type="radio"
                                name="educationLevel"
                                value={lvl.id}
                                checked={checked}
                                onChange={() => setEducationLevel(lvl.id)}
                                className="sr-only appearance-none"
                              />
                              <span>{lvl.label}</span>
                            </label>
                          );
                        })}
                      </div>
                    </fieldset>

                    <div>
                      <label
                        htmlFor="enroll-queries"
                        className="block text-xs font-bold text-slate-800 mb-1"
                      >
                        Career Goals or Questions (Optional)
                      </label>
                      <textarea
                        id="enroll-queries"
                        name="queries"
                        rows={2}
                        value={queries}
                        onChange={(e) => setQueries(e.target.value)}
                        placeholder="Tell us about your interest in culinary arts, cruise hospitality, or campus tour preferences..."
                        className="w-full bg-slate-50 text-slate-950 text-sm px-3.5 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 focus:border-[#1E6DEB] focus:ring-2 focus:ring-[#1E6DEB]/15 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400 min-h-[68px] sm:min-h-[88px]"
                      />
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-1 space-y-2.5">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#D4F85A] hover:bg-[#c7f445] disabled:opacity-70 text-[#0A1118] font-black text-sm sm:text-base py-3 sm:py-4 px-5 sm:px-6 rounded-full shadow-[0_8px_24px_rgba(212,248,90,0.4)] hover:shadow-[0_12px_30px_rgba(212,248,90,0.5)] transition-all min-h-[44px] sm:min-h-[52px] active:scale-95 cursor-pointer"
                    >
                      {submitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <span className="leading-tight">
                            {selectedCourse
                              ? `Apply for ${selectedCourse.shortTitle}`
                              : "Submit Course Application"}
                          </span>
                          <AnimatedArrow size={15} className="text-[#0A1118]" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-500 text-center">
                      Your details stay private and are used solely by Excellence
                      Education Academy Goa for admissions counseling.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Live Selected Program Preview & Next Steps */}
          <div id="program-preview" className="lg:col-span-5 space-y-5 sm:space-y-6 lg:sticky lg:top-24 scroll-mt-24">
            <AnimatePresence mode="wait" initial={false}>
              {selectedCourse ? (
                <motion.div
                  key={selectedCourse.id}
                  initial={
                    reduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 8 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                  transition={{ duration: reduceMotion ? 0.1 : 0.22 }}
                  className="bg-white rounded-3xl sm:rounded-[32px] overflow-hidden border border-slate-200/90 shadow-[0_8px_36px_rgba(10,17,24,0.06)]"
                >
                  <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={selectedCourse.image}
                      alt={selectedCourse.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/80 via-[#0A1118]/20 to-transparent" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 bg-[#D4F85A] text-[#0A1118] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                        <Award className="w-3 h-3" aria-hidden="true" />
                        <span>{selectedCourse.level}</span>
                      </span>
                      <span className="bg-[#0A1118]/80 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full border border-white/15">
                        {selectedCourse.shortDuration}
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#D4F85A]">
                        Selected Program
                      </span>
                      <h3 className="text-lg sm:text-xl font-black tracking-tight leading-snug mt-0.5">
                        {selectedCourse.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {selectedCourse.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="rounded-2xl bg-[#F8FAFC] p-3 border border-slate-200/70">
                        <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400">
                          <Clock
                            className="w-3.5 h-3.5 text-[#1E6DEB]"
                            aria-hidden="true"
                          />
                          <span>Duration</span>
                        </span>
                        <span className="block font-bold text-slate-900 mt-1">
                          {selectedCourse.shortDuration}
                        </span>
                      </div>

                      <div className="rounded-2xl bg-[#F8FAFC] p-3 border border-slate-200/70">
                        <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400">
                          <GraduationCap
                            className="w-3.5 h-3.5 text-[#1E6DEB]"
                            aria-hidden="true"
                          />
                          <span>Eligibility</span>
                        </span>
                        <span className="block font-bold text-slate-900 mt-1 truncate">
                          {selectedCourse.eligibility}
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      <p className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                        What You Will Master
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                        {selectedCourse.skills.map((skill) => (
                          <li key={skill} className="flex items-center gap-2">
                            <CheckCircle2
                              className="w-3.5 h-3.5 text-[#1E6DEB] shrink-0"
                              aria-hidden="true"
                            />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="no-course-selected"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-3xl sm:rounded-[32px] p-5 sm:p-7 border border-slate-200/90 shadow-[0_8px_36px_rgba(10,17,24,0.05)] space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#F0F6FE] border border-[#1E6DEB]/20 text-[#1E6DEB] flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#1E6DEB]">
                        Quick Program Selector
                      </span>
                      <h3 className="text-lg font-black text-slate-950 tracking-tight">
                        Pick a CTH Track to Preview
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tap any program below to auto-fill your application dropdown
                    and inspect duration, eligibility, and key modules:
                  </p>

                  <div className="space-y-2">
                    {COURSE_PROGRAMS.map((course) => (
                      <button
                        key={course.id}
                        type="button"
                        onClick={() => handleQuickSelectCourse(course.id)}
                        className="w-full flex items-center justify-between gap-3 p-3 rounded-2xl border border-slate-200/90 hover:border-[#1E6DEB]/50 hover:bg-[#F0F6FE]/60 text-left transition-all cursor-pointer group"
                      >
                        <span className="flex items-center gap-3 min-w-0">
                          <span className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-[#1E6DEB] text-slate-700 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                            <ProgramIcon
                              name={course.iconName}
                              className="w-4 h-4"
                            />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-xs font-black text-slate-950 truncate">
                              {course.shortTitle}
                            </span>
                            <span className="block text-[10px] font-bold text-slate-500">
                              {course.level} • {course.shortDuration}
                            </span>
                          </span>
                        </span>
                        <AnimatedArrow
                          size={15}
                          className="text-slate-400 group-hover:text-[#1E6DEB]"
                        />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* What Happens Next Card */}
            <div className="bg-[#0A1118] text-white rounded-3xl sm:rounded-[32px] p-5 sm:p-7 space-y-4 sm:space-y-5 shadow-xl">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#D4F85A]">
                  Admissions Process
                </span>
                <h3 className="text-lg font-black tracking-tight">
                  What Happens After You Apply
                </h3>
              </div>

              <ol className="space-y-3.5 text-xs">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#D4F85A] text-[#0A1118] font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <p className="font-bold text-white">
                      24-Hour Counselor Call
                    </p>
                    <p className="text-slate-300 mt-0.5 leading-relaxed">
                      Our Goa admissions advisor verifies eligibility and shares
                      detailed fee &amp; batch schedules.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/15 text-[#D4F85A] font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <p className="font-bold text-white">
                      Live Kitchen &amp; Bakery Walkthrough
                    </p>
                    <p className="text-slate-300 mt-0.5 leading-relaxed">
                      Tour our commercial training bays and meet chef mentors in
                      Alto Porvorim.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/15 text-[#D4F85A] font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <p className="font-bold text-white">
                      CTH-UK Seat Confirmation
                    </p>
                    <p className="text-slate-300 mt-0.5 leading-relaxed">
                      Complete registration and join the upcoming cohort with
                      100% placement support.
                    </p>
                  </div>
                </li>
              </ol>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                <a
                  href="tel:+918329208271"
                  className="inline-flex items-center gap-1.5 font-bold text-[#D4F85A] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>+91 8329208271</span>
                </a>
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-1 font-bold text-slate-300 hover:text-white"
                >
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Compare All Courses</span>
                </Link>
              </div>

              <p className="text-[11px] text-slate-400 flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-slate-400" aria-hidden="true" />
                <span>
                  The Capital, 660/3, Alto Porvorim, Goa 403521 (Mon–Sat, 9 AM –
                  6 PM)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
