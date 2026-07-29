"use server";

import { Resend } from "resend";

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "info@lwargroup.com";
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "LWAR Group Website <onboarding@resend.dev>";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const organization = String(formData.get("organization") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const inquiryType = String(formData.get("inquiryType") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const details = String(formData.get("details") ?? "").trim();

  if (!fullName || !email || !inquiryType || !subject || !details) {
    return {
      status: "error",
      message: "Please fill in all required fields.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      "RESEND_API_KEY is not set. Add it to your environment to enable the contact form.",
    );
    return {
      status: "error",
      message:
        "Sorry, the contact form isn't configured yet. Please email us directly at info@lwar.group.",
    };
  }

  const resend = new Resend(apiKey);

  const fields: [string, string][] = [
    ["Name", fullName],
    ["Email", email],
    ["Organization", organization || "—"],
    ["Phone", phone || "—"],
    ["Inquiry type", inquiryType],
  ];

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `[${inquiryType}] ${subject}`,
      text: [
        ...fields.map(([label, value]) => `${label}: ${value}`),
        "",
        details,
      ].join("\n"),
      html: `
        <table cellpadding="0" cellspacing="0">
          ${fields
            .map(
              ([label, value]) =>
                `<tr><td style="padding:2px 8px 2px 0;color:#5d6b63;">${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`,
            )
            .join("")}
        </table>
        <p style="white-space:pre-wrap;margin-top:16px;">${escapeHtml(details)}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        status: "error",
        message:
          "Sorry, something went wrong sending your message. Please try again or email us directly at info@lwar.group.",
      };
    }
  } catch (err) {
    console.error("Contact form send failed:", err);
    return {
      status: "error",
      message:
        "Sorry, something went wrong sending your message. Please try again or email us directly at info@lwar.group.",
    };
  }

  return {
    status: "success",
    message: "Thanks — your message has been sent. We'll be in touch soon.",
  };
}
