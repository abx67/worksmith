"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

// ─── Reveal Wrapper ───────────────────────────────────────────────────────────

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1e]/80 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">W</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            worksmith
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ),
          )}
          <a
            href="#contact"
            className="bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Book a Call
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#111827] border-b border-white/5 mt-3 px-6 py-4 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-slate-400 hover:text-white font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block bg-indigo-500 text-white text-center font-semibold px-5 py-3 rounded-full"
          >
            Book a Call
          </a>
        </motion.div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0f1e]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
        style={{ animation: "pulse-glow 4s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl"
        style={{ animation: "pulse-glow 4s ease-in-out infinite 2s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-indigo-300 text-sm font-medium">
              AI Engineering for Small Businesses
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8 text-white">
            AI engineering for{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              the way you actually
            </span>
            <br />
            work.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-12">
            We embed with businesses, understand how they operate, and build{" "}
            <span className="text-white font-medium">AI-powered systems</span>{" "}
            around their workflows.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
            >
              Get a Free Workflow Audit
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="/case-studies"
              className="flex items-center gap-2 text-slate-400 hover:text-white font-medium px-8 py-4 rounded-full border border-white/10 hover:border-indigo-500/30 transition-all"
            >
              <ExternalLink size={18} className="text-indigo-400" />
              View Our Work
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-8 text-slate-500 text-sm">
            No SaaS subscription. No generic chatbot. Just engineered solutions that fit.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { label: "Workflows Automated", value: "50+" },
              { label: "Hours Saved / Month", value: "2,000+" },
              { label: "Businesses Served", value: "20+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  );
}

// ─── Case Studies ─────────────────────────────────────────────────────────────

function CaseStudies() {
  const cases = [
    {
      logo: "/assets/fengshui-logo.svg",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      textColor: "text-emerald-400",
      hoverBg: "hover:border-emerald-500/40 hover:bg-[#0f1f1a]",
      name: "Fengshui",
      url: "https://huengshui.com",
      tagline:
        "AI-powered fengshui analysis from any floor plan or photo",
      built: `An AI image analysis engine that reads floor plans and interior photos, then generates room-by-room fengshui recommendations — turning hours of manual consultation into automated, instant insights.`,
      impacts: [
        "Consultants save hours per client — results delivered in minutes, not days",
        "Covers 6+ room types with tailored rules for bedrooms, kitchens, bathrooms and more",
        "Combines fast static rules with GPT reasoning for nuanced, context-aware suggestions",
      ],
    },
    {
      logo: null,
      initial: "S",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
      textColor: "text-amber-400",
      hoverBg: "hover:border-amber-500/40 hover:bg-[#1a1508]",
      name: "StagePulse",
      url: null,
      tagline:
        "Your casting opportunities, delivered daily — AI-curated from the industry's top sources",
      built: `A fully automated agent that monitors Deadline, Variety, and casting platforms every day, filters for roles that match the actor, and delivers a personalized digest straight to their inbox.`,
      impacts: [
        "Cuts hours of daily manual screening down to a single delivered email",
        "Sources 3+ industry publications and casting boards without human intervention",
        "Smart filtering surfaces only the roles that fit the actor's profile",
      ],
    },
    {
      logo: "/assets/redalligator-logo.png",
      bgColor: "bg-rose-500/10",
      borderColor: "border-rose-500/20",
      textColor: "text-rose-400",
      hoverBg: "hover:border-rose-500/40 hover:bg-[#1a0f14]",
      name: "Red Alligator",
      url: "https://redalligator.red/",
      tagline:
        "Actors rehearse smarter — scripts auto-split into focused practice scenes",
      built: `An AI-assisted rehearsal platform that ingests full scripts and auto-segments them into scenes, giving actors instant access to targeted practice material instead of reading through entire plays.`,
      impacts: [
        "Eliminates tedious manual script breakdown — agents do it in seconds",
        "Game-feel engagement design keeps actors practicing consistently between auditions",
        "Works on any device so actors can rehearse on set, on the go, at home",
      ],
    },
  ];

  return (
    <section className="py-32 relative bg-[#111827]/50">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
              Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
              Small businesses,{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                engineered results
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Real systems we&apos;ve shipped — automating work, surfacing
              opportunities, and giving small teams the leverage of a full
              engineering org.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.12}>
              <article
                className={`bg-[#1a2236] border ${c.borderColor} rounded-2xl p-8 h-full transition-all group ${c.hoverBg}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${c.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  {c.logo ? (
                    <img
                      src={c.logo}
                      alt={`${c.name} logo`}
                      className="w-8 h-8 object-contain"
                    />
                  ) : (
                    <span
                      className={`text-xl font-black ${c.textColor}`}
                    >
                      {c.initial}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-1 text-white">
                  {c.name}
                </h3>
                <p className={`text-sm ${c.textColor} mb-5`}>
                  {c.tagline}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {c.built}
                </p>
                <div className="border-t border-white/5 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                    Impact
                  </p>
                  <ul className="space-y-2">
                    {c.impacts.map((impact) => (
                      <li
                        key={impact}
                        className="flex items-start gap-2 text-slate-400 text-sm"
                      >
                        <CheckCircle2
                          size={14}
                          className={`${c.textColor} mt-0.5 shrink-0`}
                        />
                        {impact}
                      </li>
                    ))}
                  </ul>
                </div>
                {c.url && (
                  <div className="mt-6 pt-5 border-t border-white/5">
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-indigo-300 transition-colors group/link"
                    >
                      Visit Project
                      <ArrowRight
                        size={16}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA / Contact Section ────────────────────────────────────────────────────

function CTA() {
  return (
    <section id="contact" className="py-32 relative bg-[#0a0f1e]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-8">
            <Mail size={16} className="text-indigo-400" />
            <span className="text-indigo-300 text-sm font-medium">
              Let&apos;s Talk
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Ready to get your{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              time back
            </span>?
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Book a free 30-minute workflow audit call. No commitment. Just
            clarity on where AI can help most.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <a
            href="mailto:ya1995fahi@gmail.com"
            className="group inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
          >
            Schedule Your Free Audit
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-12 bg-[#111827] border border-white/5 rounded-2xl p-8 max-w-lg mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center">
                <Mail size={24} className="text-indigo-400" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">
                  ya1995fahi@gmail.com
                </div>
                <div className="text-slate-500 text-sm">
                  We reply within 24 hours
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-sm text-center">
              Or fill out the form and we&apos;d reach out to schedule your
              free workflow audit.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <a
              href="/"
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                worksmith
              </span>
            </a>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              AI engineering for the way you actually work. We embed with
              businesses, understand their operations, and build AI-powered
              systems that make them more efficient.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/case-studies"
                  className="text-slate-500 hover:text-white text-sm transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-500 hover:text-white text-sm transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:ya1995fahi@gmail.com"
                  className="text-slate-500 hover:text-indigo-400 text-sm transition-colors flex items-center gap-2"
                >
                  <Mail size={14} />
                  ya1995fahi@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; 2025 Worksmith. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            AI engineering for small businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CaseStudies />
      <CTA />
      <Footer />
    </main>
  );
}
