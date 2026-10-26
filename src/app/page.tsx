"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Zap,
  Cpu,
  Users,
  Lightbulb,
  TrendingUp,
  MessageSquare,
  Mail,
  Menu,
  X,
  Play,
  Layers,
  Settings,
  Target,
  Rocket,
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
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Services", href: "#services" },
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
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">W</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            worksmith
          </span>
        </a>

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
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" style={{ animation: 'pulse-glow 4s ease-in-out infinite' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" style={{ animation: 'pulse-glow 4s ease-in-out infinite 2s' }} />
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
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#process"
              className="flex items-center gap-2 text-slate-400 hover:text-white font-medium px-8 py-4 rounded-full border border-white/10 hover:border-indigo-500/30 transition-all"
            >
              <Play size={18} className="text-indigo-400" />
              See How It Works
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

// ─── Problem Section ──────────────────────────────────────────────────────────

function Problem() {
  const problems = [
    {
      icon: Clock,
      title: "Too much work, too little leverage",
      points: [
        "Repetitive administrative work eats into strategic time",
        "Data scattered across a dozen tools",
        "Manual copy/paste between systems — every day",
      ],
    },
    {
      icon: Cpu,
      title: "AI is powerful, but hard to operationalize",
      points: [
        "Chatbots and demos don't solve real workflow problems",
        "No time to experiment with prompts and APIs",
        "The gap between AI potential and daily use is wide",
      ],
    },
    {
      icon: Users,
      title: "Founders are the bottleneck",
      points: [
        "High-value people stuck on low-value tasks",
        "Can't hire fast enough to keep up",
        "Every decision flows through one person",
      ],
    },
  ];

  return (
    <section id="about" className="py-32 relative bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
              The Problem
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
              Small businesses don&apos;t need more
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                software.
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              They need their existing work to work better. The core problem
              isn&apos;t tooling — it&apos;s that AI hasn&apos;t been
              engineered around how you actually operate.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.15}>
              <div className="bg-[#111827] border border-white/5 rounded-2xl p-8 hover:border-indigo-500/20 transition-all hover:bg-[#1a2236] group h-full">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <p.icon size={24} className="text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {p.title}
                </h3>
                <ul className="space-y-3">
                  {p.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-slate-400 text-sm">
                      <CheckCircle2 size={16} className="text-indigo-500/60 mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 text-center">
            <p className="text-lg text-white font-medium">
              The insight:{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                The FDE model shouldn&apos;t only belong to Fortune 500 companies.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Process Section ──────────────────────────────────────────────────────────

function Process() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      icon: Target,
      description: "We spend 1–2 weeks inside your business. Understanding your tools, your bottlenecks, where time disappears, and what the owner personally does every day.",
      detail: "We map your software stack, trace data flow, and calculate the real cost of repetitive work.",
    },
    {
      num: "02",
      title: "Build",
      icon: Zap,
      description: "We engineer an AI-powered solution tailored to your actual workflow — not a generic tool you have to adapt to.",
      detail: "LLMs, APIs, databases, CRMs, email, spreadsheets, agents — integrated into something that works.",
    },
    {
      num: "03",
      title: "Deploy",
      icon: Settings,
      description: "We integrate it into your existing systems. No disruption. No retraining marathon. Just results.",
      detail: "Your team uses what they already know, now supercharged with AI behind the scenes.",
    },
    {
      num: "04",
      title: "Improve",
      icon: TrendingUp,
      description: "We stay embedded. Continuously watching: what's still annoying? What broke? What new process should we automate?",
      detail: "Human FDE + AI = compounding leverage. Every week gets better.",
    },
  ];

  return (
    <section id="process" className="py-32 relative bg-[#111827]/50">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
              The{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                FDE model
              </span>
              , powered by AI
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We don&apos;t just recommend. We embed, build, and stay.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.12}>
              <div className="relative bg-[#1a2236] border border-white/5 rounded-2xl p-8 h-full hover:border-indigo-500/20 transition-all group">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 text-indigo-500/20 text-2xl z-10">
                    →
                  </div>
                )}
                <div className="text-5xl font-black text-indigo-500/10 mb-4 group-hover:text-indigo-500/20 transition-colors">
                  {step.num}
                </div>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-5">
                  <step.icon size={20} className="text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
                <p className="text-slate-500 text-xs leading-relaxed border-t border-white/5 pt-4 mt-auto">
                  {step.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-6 py-3">
              <span className="text-indigo-300 font-semibold">Human FDE + AI</span>
              <span className="text-slate-400">=</span>
              <span className="text-white font-semibold">Compounding leverage</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────

function Services() {
  const services = [
    {
      icon: Lightbulb,
      title: "Workflow Audit",
      price: "Entry point",
      description: "A paid discovery engagement. We map your operations and identify the highest-ROI automation opportunities. Usually 1–2 weeks.",
      tag: "Start here",
    },
    {
      icon: Rocket,
      title: "Build",
      price: "Fixed-fee",
      description: "We engineer and deploy your AI-powered workflow. LLMs, APIs, integrations — all wired together into a system that works.",
      tag: "Implementation",
    },
    {
      icon: Layers,
      title: "Operate",
      price: "Monthly retainer",
      description: "We stay embedded. Watching for new bottlenecks, broken processes, and opportunities to automate more. You get an external AI team.",
      tag: "Ongoing",
    },
    {
      icon: TrendingUp,
      title: "Expand",
      price: "As needed",
      description: "One painful workflow solved? Let&apos;s find the next one. We continuously identify and automate additional high-value processes.",
      tag: "Growth",
    },
  ];

  return (
    <section id="services" className="py-32 relative bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
              What{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                we build
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We don&apos;t sell a fixed product. We solve the workflow.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <Reveal key={svc.title} delay={i * 0.1}>
              <div className="bg-[#111827] border border-white/5 rounded-2xl p-8 hover:border-indigo-500/20 transition-all group h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svc.icon size={24} className="text-indigo-400" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300 bg-indigo-500/10 px-3 py-1.5 rounded-full">
                    {svc.tag}
                  </span>
                </div>
                <div className="flex items-baseline gap-3 mb-3">
                  <h3 className="text-2xl font-semibold text-white">{svc.title}</h3>
                  <span className="text-slate-500 text-sm">{svc.price}</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  {svc.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-slate-400">
              <span className="text-white font-medium">
                Potential examples of what we build:
              </span>{" "}
              AI sales assistants, lead qualification, automated reporting,
              customer support workflows, document processing, email automation,
              internal knowledge systems, CRM automation, custom AI agents,
              business intelligence dashboards.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Who We Serve ─────────────────────────────────────────────────────────────

function WhoWeServe() {
  const segments = [
    {
      icon: Zap,
      title: "Entrepreneurs",
      quote: '"I am the bottleneck."',
      desc: "Doing everything yourself. No time for strategy because operations are consuming all your hours.",
    },
    {
      icon: Rocket,
      title: "Startups",
      quote: '"We need to move faster without hiring 10 people."',
      desc: "Lean teams hitting growing pains. Every new customer brings new operational complexity.",
    },
    {
      icon: Users,
      title: "Small Businesses",
      quote: '"We have people doing the same thing every day."',
      desc: "Repetitive workflows eating capacity. Staff time that could be spent on growth is lost to routine.",
    },
  ];

  return (
    <section className="py-32 relative bg-[#111827]/50">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
              Who We Serve
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
              Built for teams where{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                high-value people
              </span>
              <br />
              waste time on low-value work
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {segments.map((seg, i) => (
            <Reveal key={seg.title} delay={i * 0.15}>
              <div className="bg-[#1a2236] border border-white/5 rounded-2xl p-8 h-full hover:border-indigo-500/20 transition-all text-center group">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <seg.icon size={28} className="text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{seg.title}</h3>
                <p className="text-indigo-300 font-medium text-sm mb-4">{seg.quote}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{seg.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 text-center">
            <div className="inline-block bg-indigo-500/10 border border-indigo-500/20 rounded-2xl px-8 py-5">
              <p className="text-white font-semibold text-lg">
                Common denominator:{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  High-value people doing low-value work.
                </span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Why Worksmith ────────────────────────────────────────────────────────────

function WhyWorksmith() {
  const comparisons = [
    {
      who: "Traditional Consultant",
      flow: "Analyze → Recommend → Leave",
      color: "text-slate-500",
      outcome: "Report gathers dust",
    },
    {
      who: "SaaS Company",
      flow: "Sell product → Customer adapts",
      color: "text-slate-400",
      outcome: "Tool sits unused",
    },
    {
      who: "Worksmith",
      flow: "Understand → Engineer → Deploy → Operate",
      color: "text-indigo-300",
      outcome: "Real workflow change",
    },
  ];

  return (
    <section className="py-32 relative bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
              Why Worksmith
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
              Why{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Worksmith?
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {comparisons.map((comp, i) => (
            <Reveal key={comp.who} delay={i * 0.12}>
              <div
                className={`bg-[#111827] border rounded-2xl p-8 h-full ${
                  i === 2
                    ? "border-indigo-500/30 shadow-lg shadow-indigo-500/10"
                    : "border-white/5"
                } hover:border-indigo-500/20 transition-all`}
              >
                {i === 2 && (
                  <span className="inline-block text-xs font-bold uppercase tracking-wider bg-indigo-500 text-white px-3 py-1 rounded-full mb-6">
                    Recommended
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-2 text-white">{comp.who}</h3>
                <p className={`text-sm font-mono mb-6 ${comp.color}`}>
                  {comp.flow}
                </p>
                <p className="text-slate-500 text-sm">{comp.outcome}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="text-center">
            <p className="text-lg text-slate-400">
              Our advantage is the combination of:
            </p>
            <p className="text-2xl md:text-3xl font-bold mt-4">
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                FDE mindset + AI-native engineering + small-business focus
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Vision Section ───────────────────────────────────────────────────────────

function Vision() {
  const timeline = [
    {
      era: "Today",
      title: "A team of FDEs helping businesses use AI",
      desc: "High-touch, founder-led engagements. One workflow at a time.",
    },
    {
      era: "Tomorrow",
      title: "A library of reusable AI workflows",
      desc: "Patterns that solve the same problems across industries.",
    },
    {
      era: "Eventually",
      title: "The AI operating layer for small businesses",
      desc: "Every small business gets the engineering leverage of a world-class technical team.",
    },
  ];

  return (
    <section className="py-32 relative bg-[#111827]/50">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
              Our Vision
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
              From services to{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                platform
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Services → repeatable solutions → proprietary platform → SaaS
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {timeline.map((item, i) => (
            <Reveal key={item.era} delay={i * 0.15}>
              <div className="bg-[#1a2236] border border-white/5 rounded-2xl p-8 h-full relative overflow-hidden group hover:border-indigo-500/20 transition-all">
                {i < timeline.length - 1 && (
                  <div className="absolute top-1/2 -right-3 text-indigo-500/20 text-2xl hidden md:block">
                    →
                  </div>
                )}
                <div className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">
                  {item.era}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 text-center">
            <p className="text-slate-500 text-sm italic">
              &quot;Every small business deserves the engineering leverage of a
              world-class technical team.&quot;
            </p>
          </div>
        </Reveal>
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
            href="mailto:hello@worksmith.studio"
            className="group inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
          >
            Schedule Your Free Audit
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-12 bg-[#111827] border border-white/5 rounded-2xl p-8 max-w-lg mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center">
                <MessageSquare size={24} className="text-indigo-400" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">
                  hello@worksmith.studio
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
            <a href="#" className="flex items-center gap-2 mb-4">
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
              {["About", "Process", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-500 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@worksmith.studio"
                  className="text-slate-500 hover:text-indigo-400 text-sm transition-colors flex items-center gap-2"
                >
                  <Mail size={14} />
                  hello@worksmith.studio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 Worksmith. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            AI engineering for small businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Case Studies ─────────────────────────────────────────────────────────────

function CaseStudies() {
  const cases = [
    {
      initial: "F",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      textColor: "text-emerald-400",
      name: "Fengshui",
      tagline: "AI-powered fengshui analysis from any floor plan or photo",
      built: "An AI image analysis engine that reads floor plans and interior photos, then generates room-by-room fengshui recommendations — turning hours of manual consultation into automated, instant insights.",
      impacts: [
        "Consultants save hours per client — results delivered in minutes, not days",
        "Covers 6+ room types with tailored rules for bedrooms, kitchens, bathrooms and more",
        "Combines fast static rules with GPT reasoning for nuanced, context-aware suggestions",
      ],
    },
    {
      initial: "S",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
      textColor: "text-amber-400",
      name: "StagePulse",
      tagline: "Your casting opportunities, delivered daily — AI-curated from the industry's top sources",
      built: "A fully automated agent that monitors Deadline, Variety, and casting platforms every day, filters for roles that match the actor, and delivers a personalized digest straight to their inbox.",
      impacts: [
        "Cuts hours of daily manual screening down to a single delivered email",
        "Sources 3+ industry publications and casting boards without human intervention",
        "Smart filtering surfaces only the roles that fit the actor's profile",
      ],
    },
    {
      initial: "O",
      bgColor: "bg-rose-500/10",
      borderColor: "border-rose-500/20",
      textColor: "text-rose-400",
      name: "OffBookly",
      tagline: "Actors rehearse smarter — scripts auto-split into focused practice scenes",
      built: "An AI-assisted rehearsal platform that ingests full scripts and auto-segments them into scenes, giving actors instant access to targeted practice material instead of reading through entire plays.",
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
              Real systems we&apos;ve shipped — automating work, surfacing opportunities, and giving small teams the leverage of a full engineering org.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.12}>
              <article
                className={`bg-[#1a2236] border ${c.borderColor} rounded-2xl p-8 h-full hover:bg-[#1e2a42] transition-all group`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${c.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <span className={`text-xl font-black ${c.textColor}`}>
                    {c.initial}
                  </span>
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
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Process />
      <Services />
      <CaseStudies />
      <WhoWeServe />
      <WhyWorksmith />
      <Vision />
      <CTA />
      <Footer />
    </main>
  );
}
