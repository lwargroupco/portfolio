"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Send } from "lucide-react";

import {
  sendContactMessage,
  type ContactFormState,
} from "../../app/contact/actions";

const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center rounded-lg bg-[#0b6740] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#0e7d4f] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-[#1a9b5c] dark:hover:bg-[#22b06a]"
    >
      {pending ? "Sending..." : "Send Message"}
      <Send className="ml-3 h-4 w-4" aria-hidden="true" />
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(
    sendContactMessage,
    initialContactFormState,
  );

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-[#123d2a] dark:text-emerald-100/85">
            Full Name *
          </span>

          <input
            required
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#287641] focus:ring-4 focus:ring-green-100 dark:border-white/15 dark:bg-white/5 dark:text-emerald-50 dark:placeholder:text-emerald-100/30 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/15"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-[#123d2a] dark:text-emerald-100/85">
            Email Address *
          </span>

          <input
            required
            name="email"
            type="email"
            placeholder="Enter your email"
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#287641] focus:ring-4 focus:ring-green-100 dark:border-white/15 dark:bg-white/5 dark:text-emerald-50 dark:placeholder:text-emerald-100/30 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/15"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-[#123d2a] dark:text-emerald-100/85">
            Organization / Institution
          </span>

          <input
            name="organization"
            type="text"
            placeholder="Enter organization name"
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#287641] focus:ring-4 focus:ring-green-100 dark:border-white/15 dark:bg-white/5 dark:text-emerald-50 dark:placeholder:text-emerald-100/30 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/15"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-[#123d2a] dark:text-emerald-100/85">
            Phone Number
          </span>

          <input
            name="phone"
            type="tel"
            placeholder="Enter phone number"
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#287641] focus:ring-4 focus:ring-green-100 dark:border-white/15 dark:bg-white/5 dark:text-emerald-50 dark:placeholder:text-emerald-100/30 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/15"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-bold text-[#123d2a] dark:text-emerald-100/85">
          Inquiry Type *
        </span>

        <select
          required
          name="inquiryType"
          defaultValue=""
          className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-[#287641] focus:ring-4 focus:ring-green-100 dark:border-white/15 dark:bg-white/5 dark:text-emerald-50 dark:[color-scheme:dark] dark:focus:border-emerald-400 dark:focus:ring-emerald-400/15"
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
        <span className="text-sm font-bold text-[#123d2a] dark:text-emerald-100/85">Subject *</span>

        <input
          required
          name="subject"
          type="text"
          placeholder="Enter subject"
          className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#287641] focus:ring-4 focus:ring-green-100 dark:border-white/15 dark:bg-white/5 dark:text-emerald-50 dark:placeholder:text-emerald-100/30 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/15"
        />
      </label>

      <label className="block">
        <span className="text-sm font-bold text-[#123d2a] dark:text-emerald-100/85">
          How can we help you? *
        </span>

        <textarea
          required
          name="details"
          rows={6}
          placeholder="Write your message here..."
          className="mt-2 w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#287641] focus:ring-4 focus:ring-green-100 dark:border-white/15 dark:bg-white/5 dark:text-emerald-50 dark:placeholder:text-emerald-100/30 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/15"
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-slate-600 dark:text-emerald-100/60">
        <input
          required
          type="checkbox"
          className="mt-1 h-4 w-4 accent-[#075031] dark:accent-[#22b06a]"
        />

        <span>
          I agree that LWAR Companies may use these details to respond to my
          inquiry.
        </span>
      </label>

      <SubmitButton />

      {state.status !== "idle" ? (
        <p
          role="status"
          className={`text-sm leading-6 ${
            state.status === "error"
              ? "text-red-600 dark:text-red-400"
              : "text-[#176536] dark:text-emerald-400"
          }`}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
