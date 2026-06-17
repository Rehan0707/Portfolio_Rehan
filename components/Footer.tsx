"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-10 overflow-hidden border-t border-line">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-primary/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">
                RS
              </span>
              <span className="font-serif text-xl font-semibold">
                {profile.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Building products that improve everyday life with SwiftUI, Apple
              Intelligence, and thoughtful design.
            </p>
            <p className="mt-3 text-sm text-muted">{profile.location}</p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <nav className="flex flex-col gap-2.5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Navigate
              </p>
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-2.5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Connect
              </p>
              {[
                { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
                { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
                { icon: Github, label: "GitHub", href: profile.github },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
                >
                  <Icon size={15} /> {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
