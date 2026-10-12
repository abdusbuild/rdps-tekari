"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { roleNames, type Staff } from "@/lib/data";

const tones = [
  "from-crimson to-maroon text-ivory",
  "from-saffron to-crimson text-ivory",
  "from-maroon to-night text-saffron",
  "from-saffron-soft to-saffron text-maroon",
];

const initials = (n: string) =>
  n
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

export function StaffDirectory({ staff }: { staff: Staff[] }) {
  const [q, setQ] = useState("");
  const [role, setRole] = useState("All");
  const roles = ["All", "PGT", "TGT", "PRT", "Other"];
  const list = useMemo(
    () =>
      staff.filter((s) => {
        const matchRole =
          role === "All" || (role === "Other" ? !["PGT", "TGT", "PRT"].includes(s.role) : s.role === role);
        return matchRole && s.name.toLowerCase().includes(q.trim().toLowerCase());
      }),
    [staff, q, role],
  );

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {roles.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              aria-pressed={role === r}
              className={clsx(
                "relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                role === r ? "text-ivory" : "text-ink-soft ring-1 ring-ink/10 hover:text-ink",
              )}
            >
              {role === r && <motion.span layoutId="role-chip" className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
              <span className="relative">{r}</span>
            </button>
          ))}
        </div>
        <label className="relative block md:w-80">
          <span className="sr-only">Search staff by name</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name…"
            className="w-full rounded-full bg-cream py-3 pl-11 pr-4 text-sm outline-none ring-1 ring-transparent transition focus:bg-ivory focus:ring-crimson"
          />
        </label>
      </div>

      <motion.ul layout className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {list.map((s, i) => (
            <motion.li
              layout
              key={s.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.025, 0.4), ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center gap-4 rounded-2xl bg-cream p-4 transition-colors duration-300 hover:bg-ivory hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,.12)]"
            >
              <span
                className={clsx(
                  "grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br font-display text-lg font-semibold transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105",
                  tones[s.name.length % tones.length],
                )}
              >
                {initials(s.name)}
              </span>
              <span className="min-w-0">
                <span className="block truncate font-semibold">{s.name}</span>
                <span className="block text-xs text-muted">
                  {s.role}
                  {roleNames[s.role] ? ` · ${roleNames[s.role]}` : ""}
                </span>
              </span>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      {list.length === 0 && <p className="mt-10 text-center text-muted">No staff member matches “{q}”.</p>}
    </div>
  );
}
