"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    { label: "Contact", href: "/#contact" },
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
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">W</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            worksmith
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
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
            href="/#contact"
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

// ─── Fengshui Gallery ─────────────────────────────────────────────────────────

const fengshuiImages = [
  {
    src: "/assets/case-studies/fengshui/interior-living-room-green-houseplants-260nw-2290526749.webp",
    alt: "Green living room with houseplants",
    caption: "Living room analysis",
  },
  {
    src: "/assets/case-studies/fengshui/case1_door_facing_hallway1.jpg",
    alt: "Door facing hallway floor plan",
    caption: "Door & hallway flow",
  },
  {
    src: "/assets/case-studies/fengshui/case2_beam_above_bed1.jpg",
    alt: "Beam above bed analysis",
    caption: "Beam placement",
  },
  {
    src: "/assets/case-studies/fengshui/image2.png",
    alt: "Fengshui analysis result",
    caption: "AI-generated insights",
  },
  {
    src: "/assets/case-studies/fengshui/L9_1.jpg",
    alt: "Room layout analysis",
    caption: "Room layout",
  },
  {
    src: "/assets/case-studies/fengshui/L13_3.jpg",
    alt: "Fengshui remediation",
    caption: "Remediation plan",
  },
  {
    src: "/assets/case-studies/fengshui/L9_2.jpg",
    alt: "Interior assessment",
    caption: "Interior assessment",
  },
  {
    src: "/assets/case-studies/fengshui/L12_1.jpg",
    alt: "Energy flow analysis",
    caption: "Energy flow",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CaseStudies() {
  return (
    <main>
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0f1e]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Reveal>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-white text-sm font-medium transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
              Our Work
            </span>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-8 text-white">
              Case{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Studies
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Three real systems we&apos;ve built for real businesses. Each one
              solves a specific workflow problem with AI engineering.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Fengshui ──────────────────────────────────────────────────── */}
      <section className="py-24 relative bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: Content */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Image
                      src="/assets/fengshui-logo.svg"
                      alt="Fengshui logo"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
                      AI Analysis Engine
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      Fengshui
                    </h2>
                  </div>
                </div>

                <a
                  href="https://huengshui.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors mb-8 group"
                >
                  Visit huengshui.com
                  <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  An AI image analysis engine that reads floor plans and
                  interior photos, then generates room-by-room fengshui
                  recommendations — turning hours of manual consultation into
                  automated, instant insights.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    "Consultants save hours per client — results delivered in minutes, not days",
                    "Covers 6+ room types with tailored rules for bedrooms, kitchens, bathrooms and more",
                    "Combines fast static rules with GPT reasoning for nuanced, context-aware suggestions",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-emerald-400 mt-0.5 shrink-0" />
                      <span className="text-slate-300">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
                  <h3 className="text-emerald-300 font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      Floor plan parsing from uploaded images
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      Interior photo analysis for room assessment
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      Room-type-specific fengshui rule sets
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      GPT-powered reasoning for nuanced readings
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right: Image Gallery */}
              <div>
                <div className="grid grid-cols-2 gap-3">
                  {fengshuiImages.map((img, i) => (
                    <Reveal key={i} delay={i * 0.06}>
                      <div className="relative aspect-square rounded-xl overflow-hidden border border-white/5 group">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <p className="text-white text-xs font-medium">{img.caption}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-white/5" />
      </div>

      {/* ── StagePulse ────────────────────────────────────────────────── */}
      <section className="py-24 relative bg-[#111827]/30">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: Content */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <span className="text-amber-400 text-2xl font-black">S</span>
                  </div>
                  <div>
                    <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">
                      Automation Agent
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      StagePulse
                    </h2>
                  </div>
                </div>

                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  A fully automated agent that monitors Deadline, Variety, and
                  casting platforms every day, filters for roles that match the
                  actor, and delivers a personalized digest straight to their
                  inbox.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    "Cuts hours of daily manual screening down to a single delivered email",
                    "Sources 3+ industry publications and casting boards without human intervention",
                    "Smart filtering surfaces only the roles that fit the actor's profile",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-amber-400 mt-0.5 shrink-0" />
                      <span className="text-slate-300">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6">
                  <h3 className="text-amber-300 font-semibold mb-3">How It Works</h3>
                  <ol className="space-y-3 text-slate-400 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                      <span>Daily scrapes Deadline, Variety, Backstage, and other casting platforms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                      <span>Filters listings against the actor's type, location, and experience level</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                      <span>Compiles a clean, personalized email digest delivered every morning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                      <span>Continuously learns from clicks and ignores to improve future matches</span>
                    </li>
                  </ol>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md bg-[#1a2236] border border-white/5 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    <span className="text-slate-500 text-sm ml-2">StagePulse Daily Digest</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { role: "Lead — Indie Drama", source: "Backstage", time: "2h ago" },
                      { role: "Supporting — Commercial", source: "Deadline", time: "5h ago" },
                      { role: "Recurring — TV Series", source: "Variety", time: "8h ago" },
                    ].map((listing, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between bg-[#0a0f1e] rounded-xl px-4 py-3 border border-white/5"
                      >
                        <div>
                          <p className="text-white text-sm font-medium">{listing.role}</p>
                          <p className="text-slate-500 text-xs">{listing.source}</p>
                        </div>
                        <span className="text-slate-600 text-xs">{listing.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-slate-500 text-xs">3 matching roles today</span>
                    <span className="text-amber-400 text-xs font-semibold">View All →</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-white/5" />
      </div>

      {/* ── Red Alligator ─────────────────────────────────────────────── */}
      <section className="py-24 relative bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: Content */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                    <Image
                      src="/assets/redalligator-logo.png"
                      alt="Red Alligator logo"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-rose-400 text-sm font-semibold uppercase tracking-wider">
                      Rehearsal Platform
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      Red Alligator
                    </h2>
                  </div>
                </div>

                <a
                  href="https://redalligator.red/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 font-semibold transition-colors mb-8 group"
                >
                  Visit redalligator.red
                  <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Red Alligator is a creative studio building tools for actors.
                  We engineered their AI-assisted rehearsal platform that ingests
                  full scripts and auto-segments them into scenes, giving actors
                  instant access to targeted practice material.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    "Eliminates tedious manual script breakdown — agents do it in seconds",
                    "Game-feel engagement design keeps actors practicing consistently between auditions",
                    "Works on any device so actors can rehearse on set, on the go, at home",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-rose-400 mt-0.5 shrink-0" />
                      <span className="text-slate-300">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-6">
                  <h3 className="text-rose-300 font-semibold mb-4">Products Built</h3>
                  <div className="space-y-4">
                    {[
                      {
                        name: "OffBookly",
                        desc: "The core rehearsal platform — upload any script and get instant scene-by-scene breakdowns with AI-guided practice modes.",
                      },
                      {
                        name: "ScriptLenz",
                        desc: "Smart script analysis engine that identifies character arcs, emotional beats, and key moments automatically.",
                      },
                      {
                        name: "SnapActing",
                        desc: "Quick practice sessions — 5-minute micro-rehearsals generated from any scene for busy actors on the go.",
                      },
                    ].map((product) => (
                      <div key={product.name} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                        <div>
                          <p className="text-white font-semibold text-sm">{product.name}</p>
                          <p className="text-slate-400 text-sm">{product.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Product Cards */}
              <div className="space-y-4">
                {[
                  {
                    name: "OffBookly",
                    tag: "Core Platform",
                    color: "rose",
                    desc: "Upload a script. Get instant scene breakdowns, character guides, and AI-guided practice modes.",
                  },
                  {
                    name: "ScriptLenz",
                    tag: "Analysis Engine",
                    color: "rose",
                    desc: "Automatically identifies character arcs, emotional beats, and pivotal moments in any script.",
                  },
                  {
                    name: "SnapActing",
                    tag: "Quick Practice",
                    color: "rose",
                    desc: "5-minute micro-rehearsals generated from any scene — perfect for actors between commitments.",
                  },
                ].map((product, i) => (
                  <Reveal key={product.name} delay={i * 0.1}>
                    <div className="bg-[#1a2236] border border-white/5 rounded-2xl p-6 hover:border-rose-500/30 transition-all group">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
                            <span className="text-rose-400 font-bold text-sm">{product.name[0]}</span>
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">{product.name}</h3>
                            <span className="text-rose-400 text-xs font-medium">{product.tag}</span>
                          </div>
                        </div>
                        <ArrowRight size={18} className="text-slate-600 group-hover:text-rose-400 transition-colors" />
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{product.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-24 relative bg-[#111827]/50">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Have a workflow that needs{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                solving?
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
              We&apos;d love to hear about your challenges. Book a free 30-minute
              workflow audit and see what AI engineering can do for your team.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:ya1995fahi@gmail.com"
                className="group flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
              >
                Schedule Your Free Audit
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/"
                className="flex items-center gap-2 text-slate-400 hover:text-white font-medium px-8 py-4 rounded-full border border-white/10 hover:border-indigo-500/30 transition-all"
              >
                <ArrowLeft size={18} className="text-indigo-400" />
                Back to Home
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 inline-flex items-center gap-3 bg-[#111827] border border-white/5 rounded-full px-6 py-3">
              <Mail size={16} className="text-indigo-400" />
              <span className="text-slate-300 text-sm">ya1995fahi@gmail.com</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-500 text-sm">We reply within 24 hours</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="py-12 border-t border-white/5 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
                <span className="text-xl font-bold text-white tracking-tight">
                  worksmith
                </span>
              </Link>
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
                  <Link
                    href="/"
                    className="text-slate-500 hover:text-white text-sm transition-colors"
                  >
                    Home
                  </Link>
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
    </main>
  );
}
