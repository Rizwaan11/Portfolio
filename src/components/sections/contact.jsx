"use client";
import { useState } from "react";
import { Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Meteors } from "@/components/ui/meteors";
import { SOCIAL_ICONS } from "@/components/icons/tech-icons";
import { socials, contact, web3formsAccessKey } from "@/lib/data";

function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [fields, setFields] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: web3formsAccessKey, ...fields }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 font-mono text-sm text-accent"
      >
        Message sent — I&apos;ll get back to you soon.
      </motion.p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 mx-auto max-w-[420px] flex flex-col gap-3 text-left">
      <input
        type="text"
        name="name"
        required
        placeholder="Name"
        value={fields.name}
        onChange={handleChange}
        className="w-full rounded-xl border border-line-visible bg-white/[0.03] px-4 py-3 text-sm text-t1 placeholder:text-t3 outline-none focus:border-accent transition-colors"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        value={fields.email}
        onChange={handleChange}
        className="w-full rounded-xl border border-line-visible bg-white/[0.03] px-4 py-3 text-sm text-t1 placeholder:text-t3 outline-none focus:border-accent transition-colors"
      />
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Message"
        value={fields.message}
        onChange={handleChange}
        className="w-full rounded-xl border border-line-visible bg-white/[0.03] px-4 py-3 text-sm text-t1 placeholder:text-t3 outline-none focus:border-accent transition-colors resize-none"
      />
      <AnimatePresence>
        {status === "error" && (
          <motion.p
            key="err"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-mono text-xs text-red-400"
          >
            Something went wrong — try emailing me directly.
          </motion.p>
        )}
      </AnimatePresence>
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-xl bg-accent px-6 py-3 text-sm font-bold text-white shadow-[0_8px_28px_-8px_var(--color-accent-glow)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1100px] px-6 py-20">
      <Reveal>
        <SpotlightCard className="relative overflow-hidden rounded-[22px] border border-line-visible bg-bg-elevated px-6 py-[clamp(48px,8vw,80px)] text-center">
          <Meteors />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(50% 80% at 50% 100%, var(--color-accent-soft), transparent 60%)" }}
          />
          <div className="relative">
            <p className="mb-2 font-mono text-[13px] tracking-[0.1em] text-accent">{"// contact"}</p>
            <h2 className="text-[clamp(2.2rem,5.5vw,3.6rem)] font-extrabold tracking-[-0.04em]">{contact.heading}</h2>
            <p className="mx-auto mt-4 max-w-[440px] text-[1.02rem] leading-[1.6] text-t2">{contact.subtitle}</p>

            <ContactForm />

            <a
              href={`mailto:${contact.email}`}
              className="mt-6 inline-flex items-center gap-2 font-mono text-[12.5px] text-t3 transition-colors hover:text-accent"
            >
              <Mail size={14} /> or email me directly at {contact.email}
            </a>

            <div className="mt-7 flex flex-wrap justify-center gap-2.5">
              {socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon];
                return (
                  <MagneticButton
                    key={s.label}
                    as="a"
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-line-visible bg-white/[0.02] text-t3 transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
                  >
                    <Icon size={18} />
                  </MagneticButton>
                );
              })}
            </div>
          </div>
        </SpotlightCard>
      </Reveal>
    </section>
  );
}
