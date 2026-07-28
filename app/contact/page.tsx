import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Clock,
  Globe2,
  GraduationCap,
  Handshake,
  Mail,
  MapPin,
  MessageSquare,
  Mic,
  Phone,
  Search,
  ShieldCheck,
} from "lucide-react";

import ContactForm from "../../components/contact/ContactForm";
import IconCircle from "../../components/ui/IconCircle";
import PageHero from "../../components/ui/PageHero";
import SectionTitle from "../../components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact LWAR Group about projects, partnerships, training, research collaboration, speaking, or general inquiries.",
};

const benefits = [
  {
    title: "Global Reach",
    description: "A collaborative and internationally connected outlook.",
    icon: Globe2,
  },
  {
    title: "Responsive Support",
    description: "Clear communication and dedicated attention.",
    icon: ShieldCheck,
  },
  {
    title: "Strategic Partnerships",
    description: "Relationships focused on meaningful long-term impact.",
    icon: Handshake,
  },
];

const inquiryTypes = [
  {
    title: "Start a Project",
    description:
      "Tell us about your requirements and the outcomes you want to achieve.",
    icon: Briefcase,
  },
  {
    title: "Partnership",
    description:
      "Explore strategic collaboration and partnership opportunities.",
    icon: Handshake,
  },
  {
    title: "Training & Programs",
    description:
      "Ask about academy programs, corporate training, and development.",
    icon: GraduationCap,
  },
  {
    title: "Research Collaboration",
    description:
      "Partner with the research team on studies and strategic projects.",
    icon: Search,
  },
  {
    title: "Speaking Invitation",
    description:
      "Invite LWAR leadership to speak at an event or conference.",
    icon: Mic,
  },
  {
    title: "General Inquiry",
    description:
      "Ask a question and our team will direct it to the right person.",
    icon: MessageSquare,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        currentPage="Contact"
        title="Contact"
        highlightedTitle="Us"
        subtitle="Let’s build intelligent solutions and meaningful impact—together."
        description="Whether you have a question, a project in mind, or want to explore partnership opportunities, the LWAR Group team is ready to help."
        imageSrc="/images/contact/contact-panda.png"
        imageAlt="LWAR Group panda welcoming visitors to contact the organization"
      />

      <section className="relative z-10 -mt-10 px-5 sm:px-8">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl border border-green-950/10 bg-white shadow-xl sm:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="flex items-center gap-4 border-b border-r border-green-950/10 p-6"
            >
              <IconCircle icon={benefit.icon} size="small" />

              <div>
                <h2 className="font-black text-[#073b27]">
                  {benefit.title}
                </h2>

                <p className="mt-1 text-sm text-slate-600">
                  {benefit.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white pb-20 pt-28 sm:pb-24 sm:pt-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-3xl border border-green-950/10 bg-[#fbfcfa] p-7 shadow-sm sm:p-9">
            <div className="flex items-center gap-4">
              <IconCircle icon={MessageSquare} size="small" />

              <div>
                <h2 className="text-2xl font-black text-[#073b27]">
                  Send Us a Message
                </h2>

                <p className="mt-1 text-sm text-slate-600">
                  Complete the form and review the generated email before
                  sending it.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <ContactForm />
            </div>
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-green-950/10 bg-white p-7 shadow-sm sm:p-9">
            <div className="relative z-10">
              <h2 className="text-2xl font-black text-[#073b27]">
                Get in Touch
              </h2>

              <p className="mt-3 max-w-sm leading-7 text-slate-600">
                We are here to support your journey toward transformation and
                growth.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <IconCircle icon={MapPin} size="small" />

                  <div>
                    <h3 className="font-black text-[#073b27]">
                      Head Office
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      Lahore, Punjab, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <IconCircle icon={Phone} size="small" />

                  <div>
                    <h3 className="font-black text-[#073b27]">Phone</h3>

                    <a
                      href="tel:+923144010027"
                      className="mt-1 block text-sm text-slate-600 hover:text-[#075031]"
                    >
                      +92 314 4010027
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <IconCircle icon={Mail} size="small" />

                  <div>
                    <h3 className="font-black text-[#073b27]">Email</h3>

                    <a
                      href="mailto:info@lwar.group"
                      className="mt-1 block text-sm text-slate-600 hover:text-[#075031]"
                    >
                      info@lwar.group
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <IconCircle icon={Clock} size="small" />

                  <div>
                    <h3 className="font-black text-[#073b27]">
                      Business Hours
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Monday – Friday
                      <br />
                      9:00 AM – 6:00 PM (PKT)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Image
              src="/images/contact/world-map.png"
              alt=""
              width={800}
              height={500}
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 w-[78%] opacity-20"
            />
          </article>
        </div>
      </section>

      <section className="bg-[#f7faf5] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="How Can We Help?"
            title="Choose the reason for your inquiry"
            description="This helps our team route your message to the right part of LWAR Group."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {inquiryTypes.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-green-950/10 bg-white p-6 text-center"
              >
                <div className="flex justify-center">
                  <IconCircle icon={item.icon} />
                </div>

                <h3 className="mt-5 text-lg font-black text-[#073b27]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-3xl bg-gradient-to-r from-[#043b27] to-[#08623a] px-7 py-12 text-white shadow-xl sm:px-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-black sm:text-4xl">
              Let&apos;s build something extraordinary—together.
            </h2>

            <p className="mt-4 text-emerald-50/75">
              Your vision. Our expertise. Meaningful impact.
            </p>
          </div>

         <div className="shrink-0">
  <Link
    href="/services"
    className="inline-flex min-w-[240px] items-center justify-center rounded-lg bg-white px-7 py-4 text-sm font-bold !text-[#075031] shadow-md transition hover:bg-green-100"
  >
    Explore Our Services
    <span className="ml-3 text-[#075031]">→</span>
  </Link>
</div>
        </div>
      </section>
    </>
  );
}