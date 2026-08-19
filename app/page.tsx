import type { ComponentType, SVGProps } from "react";
import {
  AlertTriangle,
  ArrowDown,
  Bell,
  Book,
  ChartLine,
  Clock,
  DollarSign,
  FileText,
  GraduationCap,
  SquareCheck,
  Sun,
  Users,
  Zap,
} from "./components/icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const stakeholders: {
  title: string;
  body: string;
  Icon: Icon;
  accent: string;
  chip: string;
}[] = [
  {
    title: "Teachers",
    body: "AI-grade homework, one-tap attendance, instant test evaluation.",
    Icon: Book,
    accent: "bg-indigo-700",
    chip: "bg-indigo-700",
  },
  {
    title: "Students",
    body: "Homework, tests & personalized learning paths in one place.",
    Icon: GraduationCap,
    accent: "bg-blue-500",
    chip: "bg-blue-600",
  },
  {
    title: "Parents",
    body: "Real-time alerts replace quarterly PTMs & circulars.",
    Icon: Users,
    accent: "bg-emerald-500",
    chip: "bg-emerald-500",
  },
];

const modules: { title: string; Icon: Icon }[] = [
  { title: "Homework & AI Grading", Icon: FileText },
  { title: "One-Tap Attendance", Icon: SquareCheck },
  { title: "Real-Time Notifications", Icon: Bell },
  { title: "Instant Test Evaluation", Icon: Clock },
  { title: "Performance Analytics", Icon: ChartLine },
  { title: "AI-Personalized Learning", Icon: Sun },
];

const advantages: { title: string; body: string; Icon: Icon }[] = [
  {
    title: "1 Platform, 3 Stakeholders",
    body: "Unified, connected system",
    Icon: Users,
  },
  { title: "Manual Work Automated", body: "AI cuts admin hours", Icon: Zap },
  { title: "Real-Time Data Moat", body: "Every event deepens it", Icon: ChartLine },
  {
    title: "Recurring SaaS Revenue",
    body: "Scalable across schools",
    Icon: DollarSign,
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">
      {children}
    </h2>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center py-1.5" aria-hidden="true">
      <ArrowDown className="h-4 w-4 text-zinc-300" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex w-full flex-1 flex-col justify-center bg-white px-4 py-5 font-sans sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        {/* Problem */}
        <div className="rounded-lg border-l-4 border-red-600 bg-gradient-to-r from-red-50 to-red-50/30 px-4 py-2.5">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="mt-px h-4 w-4 shrink-0 text-red-600" />
            <p className="text-sm leading-snug text-zinc-800">
              <span className="font-bold text-red-600">The problem:</span> No
              unified platform connects teachers, students &amp; parents —
              academics, attendance, communication and personalized learning stay
              fragmented.
            </p>
          </div>
        </div>

        <Arrow />

        {/* Solution */}
        <div className="rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-900 px-5 py-4 text-center shadow-md shadow-indigo-600/20">
          <h1 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
            Jinni — One Unified School Operating System
          </h1>
          <p className="mx-auto mt-1 max-w-3xl text-xs text-indigo-100 sm:text-sm">
            Connects every stakeholder &amp; workflow — replacing paper, PTMs and
            circulars with real-time, AI-powered tools.
          </p>
        </div>

        <Arrow />

        {/* Who Jinni connects */}
        <SectionLabel>Who Jinni Connects</SectionLabel>
        <div className="mt-2 grid gap-3 md:grid-cols-3">
          {stakeholders.map(({ title, body, Icon, accent, chip }) => (
            <div
              key={title}
              className="overflow-hidden rounded-lg border border-zinc-200 bg-white transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className={`h-1 ${accent}`} />
              <div className="p-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-md ${chip} text-white`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-sm font-bold text-zinc-900">{title}</h3>
                </div>
                <p className="mt-2 text-xs leading-snug text-zinc-600">{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Core modules */}
        <div className="mt-4">
          <SectionLabel>Core Modules</SectionLabel>
        </div>
        <div className="mt-2 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {modules.map(({ title, Icon }) => (
            <div
              key={title}
              className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2.5 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-indigo-50 text-indigo-600">
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="text-xs font-bold text-zinc-900">{title}</h3>
            </div>
          ))}
        </div>

        {/* Flywheel */}
        <div className="mt-4 flex items-center gap-3">
          <span className="hidden flex-1 border-t-2 border-dashed border-indigo-300 sm:block" />
          <p className="text-center text-[11px] font-bold text-indigo-700">
            Every interaction sharpens Jinni&apos;s AI → deeper personalization
            &amp; retention
          </p>
          <span className="hidden flex-1 border-t-2 border-dashed border-indigo-300 sm:block" />
        </div>

        {/* Why this wins */}
        <div className="mt-4">
          <SectionLabel>Why This Wins</SectionLabel>
        </div>
        <div className="mt-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map(({ title, body, Icon }) => (
            <div
              key={title}
              className="rounded-lg border border-zinc-200 bg-white p-3 text-center transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="mt-1.5 text-xs font-bold text-zinc-900">{title}</h3>
              <p className="mt-0.5 text-[11px] text-zinc-500">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
