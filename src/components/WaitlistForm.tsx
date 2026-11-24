"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

const interestOptions = [
  "Kopdar Tatap Muka",
  "Ruang Tulis (Platform Esai)",
  "Ruang Pulih (Aplikasi Penyembuhan Diri)",
  "Ruang Karya (Ekspresi Komunitas)",
];

export function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "Kopdar Tatap Muka",
  ]);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const toggleInterest = (item: string) => {
    setSelectedInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("submitting");

    if (siteConfig.waitlistEndpoint) {
      try {
        const res = await fetch(siteConfig.waitlistEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            interests: selectedInterests.join(", "),
          }),
        });
        if (!res.ok) throw new Error("Submission failed");
        setStatus("success");
      } catch {
        setStatus("error");
      }
    } else {
      // Static local confirmation mode until endpoint is configured in src/config/site.ts
      await new Promise((r) => setTimeout(r, 450));
      setStatus("success");
    }
  };

  if (status === "success") {
    return (
      <div className="surface-card flex flex-col items-center justify-center rounded-2xl p-8 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--accent-gold)] bg-[var(--accent-gold-soft)] text-[var(--accent-gold)]">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="font-serif text-2xl font-semibold text-[var(--text-primary)]">
          Terima Kasih, {name || "Sahabat Makna"}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
          Minat Anda telah kami catat. Kami akan mengabarkan jadwal kopdar terbaru
          serta akses awal ketika Ruang Tulis, Ruang Pulih, dan Ruang Karya resmi dibuka.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setName("");
            setEmail("");
          }}
          className="mt-6 text-xs font-medium tracking-wider text-[var(--accent-gold)] uppercase underline-offset-4 hover:underline"
        >
          Daftarkan alamat email lain
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="surface-card space-y-5 rounded-2xl p-6 sm:p-8"
    >
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent-gold)]">
        <Sparkles className="h-3.5 w-3.5" />
        Daftar Tunggu & Kabar Kopdar
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="waitlist-name"
            className="mb-1.5 block text-xs font-medium text-[var(--text-secondary)]"
          >
            Nama Panggilan
          </label>
          <input
            id="waitlist-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Misal: Nadia"
            className="w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-gold)] focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="waitlist-email"
            className="mb-1.5 block text-xs font-medium text-[var(--text-secondary)]"
          >
            Alamat Email
          </label>
          <input
            id="waitlist-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nama@email.com"
            className="w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-gold)] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <span className="mb-2 block text-xs font-medium text-[var(--text-secondary)]">
          Ruang yang paling ingin Anda ikuti:
        </span>
        <div className="flex flex-wrap gap-2">
          {interestOptions.map((item) => {
            const active = selectedInterests.includes(item);
            return (
              <button
                key={item}
                type="button"
                onClick={() => toggleInterest(item)}
                className={`rounded-full border px-3 py-1.5 text-xs transition-all ${
                  active
                    ? "border-[var(--accent-gold)] bg-[var(--accent-gold-soft)] font-medium text-[var(--accent-gold)]"
                    : "border-[var(--border-subtle)] bg-transparent text-[var(--text-secondary)] hover:border-[var(--border-strong)]"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      {status === "error" && (
        <p className="text-xs text-rose-400">
          Maaf, terjadi kendala saat mengirim. Silakan coba lagi atau hubungi kami
          langsung lewat tautan komunitas.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--accent-gold)] px-6 py-3 text-sm font-semibold text-[#091a2e] transition-all hover:opacity-90 disabled:opacity-60"
      >
        <Send className="h-4 w-4" />
        {status === "submitting" ? "Mencatat..." : "Masuk Daftar Tunggu"}
      </button>

      <p className="text-center text-[11px] text-[var(--text-muted)]">
        Tanpa spam. Hanya kabar kopdar, esai pilihan, dan undangan akses awal ekosistem Teras Makna.
      </p>
    </form>
  );
}
