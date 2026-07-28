"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const fullName = String(form.get("fullName") ?? "");
    const email = String(form.get("email") ?? "");
    const organization = String(form.get("organization") ?? "");
    const phone = String(form.get("phone") ?? "");
    const inquiryType = String(form.get("inquiryType") ?? "");
    const subject = String(form.get("subject") ?? "");
    const details = String(form.get("details") ?? "");

    const emailSubject = encodeURIComponent(
      `[${inquiryType || "Website inquiry"}] ${subject}`
    );

    const emailBody = encodeURIComponent(
      [
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Organization: ${organization}`,
        `Phone: ${phone}`,
        `Inquiry type: ${inquiryType}`,
        "",
        details,
      ].join("\n")
    );

    setMessage(
      "Your email application is opening. Review the message and send it to complete your inquiry."
    );

    window.location.href = `mailto:info@lwar.group?subject=${emailSubject}&body=${emailBody}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-[#123d2a]">
            Full Name *
          </span>

          <input
            required
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#287641] focus:ring-4 focus:ring-green-100"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-[#123d2a]">
            Email Address *
          </span>

          <input
            required
            name="email"
            type="email"
            placeholder="Enter your email"
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#287641] focus:ring-4 focus:ring-green-100"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-[#123d2a]">
            Organization / Institution
          </span>

          <input
            name="organization"
            type="text"
            placeholder="Enter organization name"
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#287641] focus:ring-4 focus:ring-green-100"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-[#123d2a]">
            Phone Number
          </span>

          <input
            name="phone"
            type="tel"
            placeholder="Enter phone number"
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#287641] focus:ring-4 focus:ring-green-100"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-bold text-[#123d2a]">
          Inquiry Type *
        </span>

        <select
          required
          name="inquiryType"
          defaultValue=""
          className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#287641] focus:ring-4 focus:ring-green-100"
        >
          <option value="" disabled>
            Select inquiry type
          </option>

          <option>Start a Project</option>
          <option>Strategic Partnership</option>
          <option>Training and Programs</option>
          <option>Research Collaboration</option>
          <option>Speaking Invitation</option>
          <option>General Inquiry</option>
        </select>
      </label>

      <label className="block">
        <span className="text-sm font-bold text-[#123d2a]">Subject *</span>

        <input
          required
          name="subject"
          type="text"
          placeholder="Enter subject"
          className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#287641] focus:ring-4 focus:ring-green-100"
        />
      </label>

      <label className="block">
        <span className="text-sm font-bold text-[#123d2a]">
          How can we help you? *
        </span>

        <textarea
          required
          name="details"
          rows={6}
          placeholder="Write your message here..."
          className="mt-2 w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#287641] focus:ring-4 focus:ring-green-100"
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-slate-600">
        <input
          required
          type="checkbox"
          className="mt-1 h-4 w-4 accent-[#075031]"
        />

        <span>
          I agree that LWAR Group may use these details to respond to my
          inquiry.
        </span>
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-lg bg-[#075031] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#0b6740]"
      >
        Send Message
        <Send className="ml-3 h-4 w-4" aria-hidden="true" />
      </button>

      {message ? (
        <p role="status" className="text-sm leading-6 text-[#176536]">
          {message}
        </p>
      ) : null}
    </form>
  );
}