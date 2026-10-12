"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { school } from "@/lib/data";

const field =
  "peer w-full rounded-2xl bg-cream px-5 pb-3 pt-7 text-ink outline-none ring-1 ring-transparent transition focus:bg-ivory focus:ring-crimson";
const label =
  "pointer-events-none absolute left-5 top-5 origin-left text-sm text-muted transition-all duration-300 peer-focus:top-2.5 peer-focus:scale-[.8] peer-focus:text-crimson peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:scale-[.8]";

/** No backend: composes an email to the school office in the visitor's mail app. */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = `${d.get("type")} — ${d.get("name")}`;
    const body = [
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      d.get("class") ? `Class sought: ${d.get("class")}` : "",
      "",
      String(d.get("message") ?? ""),
    ]
      .filter((l) => l !== null)
      .join("\n");
    window.location.href = `mailto:${school.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="relative">
      <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
        <fieldset className="sm:col-span-2">
          <legend className="sr-only">Enquiry type</legend>
          <div className="flex flex-wrap gap-2">
            {["Admission enquiry", "General question", "Feedback"].map((t, i) => (
              <label key={t} className="cursor-pointer">
                <input type="radio" name="type" value={t} defaultChecked={i === 0} className="peer sr-only" />
                <span className="block rounded-full px-4 py-2 text-sm font-semibold ring-1 ring-ink/10 transition-colors peer-checked:bg-ink peer-checked:text-ivory peer-focus-visible:ring-crimson">
                  {t}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="relative">
          <input id="name" name="name" required placeholder=" " autoComplete="name" className={field} />
          <label htmlFor="name" className={label}>Parent / student name</label>
        </div>
        <div className="relative">
          <input id="phone" name="phone" required type="tel" placeholder=" " autoComplete="tel" className={field} />
          <label htmlFor="phone" className={label}>Phone number</label>
        </div>
        <div className="relative sm:col-span-2">
          <input id="class" name="class" placeholder=" " className={field} />
          <label htmlFor="class" className={label}>Class sought (optional)</label>
        </div>
        <div className="relative sm:col-span-2">
          <textarea id="message" name="message" required rows={5} placeholder=" " className={field + " resize-none"} />
          <label htmlFor="message" className={label}>Your message</label>
        </div>
        <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">Opens your email app with the message addressed to the school office.</p>
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-crimson px-7 py-4 font-semibold text-ivory transition-colors hover:bg-maroon"
          >
            Send message
            <Send className="size-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </button>
        </div>
      </form>

      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 flex items-start gap-3 rounded-2xl bg-leaf/10 p-4 text-sm text-ink-soft"
          >
            <CheckCircle2 className="size-5 shrink-0 text-leaf" />
            <p>
              Your email app should open now. If it didn&apos;t, write to{" "}
              <a className="font-semibold text-crimson underline" href={`mailto:${school.email}`}>{school.email}</a> or call{" "}
              <a className="font-semibold text-crimson underline" href={school.phoneHrefs[0]}>{school.phones[0]}</a>.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
