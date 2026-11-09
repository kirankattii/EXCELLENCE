"use server";

import fs from "fs/promises";
import path from "path";

export interface InquiryResult {
  success: boolean;
  message?: string;
  error?: string;
}

export async function submitInquiry(formData: FormData): Promise<InquiryResult> {
  try {
    const studentName = (formData.get("studentName") as string)?.trim();
    const parentName = (formData.get("parentName") as string)?.trim() || "";
    const phone = (formData.get("phone") as string)?.trim();
    const email = (formData.get("email") as string)?.trim() || "";
    const gradeStream = (formData.get("gradeStream") as string)?.trim() || "General Inquiry";
    const preferredTiming = (formData.get("preferredTiming") as string)?.trim() || "flexible";
    const queries = (formData.get("queries") as string)?.trim() || "";

    // Validation
    if (!studentName || studentName.length < 2) {
      return { success: false, error: "Please provide the student's full name." };
    }

    if (!phone || phone.replace(/\D/g, "").length < 10) {
      return { success: false, error: "Please provide a valid 10-digit contact number." };
    }

    const newInquiry = {
      id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString(),
      studentName,
      parentName,
      phone,
      email,
      gradeStream,
      preferredTiming,
      queries,
      status: "new",
      location: "Goa, India",
    };

    // Store in data/inquiries.json
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "inquiries.json");

    await fs.mkdir(dataDir, { recursive: true });

    let existing: typeof newInquiry[] = [];
    try {
      const fileData = await fs.readFile(filePath, "utf-8");
      existing = JSON.parse(fileData);
      if (!Array.isArray(existing)) existing = [];
    } catch {
      existing = [];
    }

    existing.unshift(newInquiry);
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf-8");

    console.log(`[Admission Inquiry] New lead saved: ${studentName} (${phone}) - Course: ${gradeStream}`);

    return {
      success: true,
      message: `Thank you, ${studentName}. Your counseling inquiry has been recorded. Our academic team in Goa will contact you within 24 hours.`,
    };
  } catch (error) {
    console.error("Error saving admission inquiry:", error);
    return {
      success: false,
      error: "An unexpected error occurred while saving your inquiry. Please call us directly.",
    };
  }
}

