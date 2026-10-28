
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bell,
  BookOpen,
  Camera,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Laptop,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wallet,
  X,
} from "lucide-react";

const categories = [
  { name: "Electronics", icon: Laptop },
  { name: "Accessories", icon: Wallet },
  { name: "Books & Notes", icon: BookOpen },
  { name: "Other items", icon: Camera },
];

const sampleItems = [
  {
    title: "Wireless headphones",
    category: "Electronics",
    location: "Library · 2nd floor",
    date: "Today, 10:30 AM",
    status: "Found",
    initials: "WH",
    color: "violet",
  },
  {
    title: "Student ID card",
    category: "Personal items",
    location: "Main cafeteria",
    date: "Today, 9:15 AM",
    status: "Lost",
    initials: "ID",
    color: "blue",
  },
  {
    title: "Engineering notebook",
    category: "Books & Notes",
    location: "Academic Block B",
    date: "Yesterday, 3:40 PM",
    status: "Found",
    initials: "NB",
    color: "amber",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All items");
  const [mobileMenu, setMobileMenu] = useState(false);

  const filteredItems = sampleItems.filter((item) => {
    const matchesSearch = [
      item.title,
      item.category,
      item.location,
      item.status,
    ]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All items" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090d] text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#09090d]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 shadow-lg shadow-indigo-500/20">
              <MapPin size={22} strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-[15px] font-semibold tracking-tight">
                Lost<span className="text-indigo-400"> & </span>Found
              </p>
              <p className="text-[10px] tracking-[0.18em] text-zinc-500 uppercase">
                Campus community
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#browse" className="text-sm text-zinc-400 transition hover:text-white">
              Browse items
            </a>
            <a href="#how-it-works" className="text-sm text-zinc-400 transition hover:text-white">
              How it works
            </a>
            <a href="#community" className="text-sm text-zinc-400 transition hover:text-white">
              Community
            </a>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <button
              onClick={() =>
                document.getElementById("browse")?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.06]"
            >
              Sign in
            </button>
            <a
              href="#report"
              className="flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-semibold transition hover:bg-indigo-400"
            >
              Report an item <ArrowUpRight size={16} />
            </a>
          </div>

          <button
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenu(!mobileMenu)}
            className="rounded-lg border border-white/10 p-2 sm:hidden"
          >
            {mobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenu && (
          <div className="border-t border-white/10 px-5 py-4 sm:hidden">
            <nav className="flex flex-col gap-4 text-sm text-zinc-300">
              <a href="#browse" onClick={() => setMobileMenu(false)}>Browse items</a>
              <a href="#how-it-works" onClick={() => setMobileMenu(false)}>How it works</a>
              <a href="#community" onClick={() => setMobileMenu(false)}>Community</a>
              <a href="#report" onClick={() => setMobileMenu(false)}>Report an item ↗</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="pointer-events-none absolute top-0 left-1/2 h-[540px] w-[850px] -translate-x-1/2 rounded-full bg-indigo-600/[0.12] blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-20 sm:px-8 sm:pt-28 sm:pb-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/[0.08] px-4 py-2 text-xs font-medium text-indigo-300 sm:text-sm">
              <Sparkles size={15} />
              A smarter way to find what matters
              <ArrowUpRight size={14} />
            </div>

            <h1 className="text-5xl leading-[1.08] font-semibold tracking-[-0.055em] sm:text-7xl lg:text-[88px]">
              Lost something?
              <br />
              <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Let&apos;s bring it home.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Your campus, connected. Report lost belongings, discover found
              items, and help good things find their way back to the right people.
            </p>

            <div className="mx-auto mt-10 flex max-w-md flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#report"
                className="flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3.5 text-sm font-semibold shadow-xl shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-indigo-400"
              >
                I lost something <ArrowRight size={17} />
              </a>
              <a
                href="#browse"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-zinc-200 transition hover:bg-white/[0.07]"
              >
                I found something <Search size={17} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-zinc-500 sm:text-sm">
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-400" />
                Privacy-conscious
              </span>
              <span className="flex items-center gap-2">
                <Sparkles size={16} className="text-indigo-400" />
                AI-powered matching, coming soon
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-indigo-400" />
                Made for your campus
              </span>
            </div>
          </div>

          {/* Search panel */}
          <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-white/[0.09] bg-[#111116] p-3 shadow-2xl shadow-black/30 sm:p-4">
            <label htmlFor="item-search" className="sr-only">
              Search lost and found items
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl px-3 sm:px-4">
                <Search className="shrink-0 text-zinc-500" size={21} />
                <input
                  id="item-search"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    document.getElementById("browse")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
                  }}
                  placeholder="Search keys, headphones, ID cards..."
                  className="min-w-0 flex-1 bg-transparent py-3 text-sm text-white outline-none placeholder:text-zinc-600"
                />
              </div>
              <a
                href="#browse"
                className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Find an item <ArrowRight size={16} />
              </a>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-white/[0.07] px-2 pt-3">
              <span className="mr-1 text-xs text-zinc-500">Popular:</span>
              {["ID cards", "Headphones", "Keys", "Bags"].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearch(term === "ID cards" ? "Student ID card" : term)}
                  className="rounded-lg border border-white/[0.07] px-3 py-1.5 text-xs text-zinc-400 transition hover:border-indigo-400/30 hover:text-indigo-300"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Early-stage trust strip */}
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 divide-x divide-white/[0.08] border-y border-white/[0.08] py-6">
            <div className="px-2 text-center">
              <p className="text-xl font-semibold tracking-tight sm:text-2xl">One</p>
              <p className="mt-1 text-[11px] text-zinc-500 sm:text-xs">Campus community</p>
            </div>
            <div className="px-2 text-center">
              <p className="text-xl font-semibold tracking-tight sm:text-2xl">Smarter</p>
              <p className="mt-1 text-[11px] text-zinc-500 sm:text-xs">Discovery experience</p>
            </div>
            <div className="px-2 text-center">
              <p className="text-xl font-semibold tracking-tight sm:text-2xl">Together</p>
              <p className="mt-1 text-[11px] text-zinc-500 sm:text-xs">Better recovery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse categories */}
      <section id="browse" className="scroll-mt-24 border-t border-white/[0.07] bg-[#0d0d12] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase">
                Explore your campus
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                What are you looking for?
              </h2>
              <p className="mt-3 text-sm text-zinc-500 sm:text-base">
                Start with a category or browse recent community reports.
              </p>
            </div>
            <button
              onClick={() => {
                setCategory("All items");
                setSearch("");
              }}
              className="flex items-center gap-2 self-start text-sm text-indigo-300 transition hover:text-indigo-200 sm:self-auto"
            >
              View all items <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {categories.map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => {
                  setCategory(name);
                  document.getElementById("recent-items")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`group flex items-center justify-between rounded-2xl border p-5 text-left transition hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-indigo-500/[0.06] sm:p-6 ${
                  category === name
                    ? "border-indigo-400/40 bg-indigo-500/[0.08]"
                    : "border-white/[0.08] bg-white/[0.02]"
                }`}
              >
                <div>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-400/15 bg-indigo-500/10 text-indigo-300">
                    <Icon size={21} />
                  </div>
                  <p className="text-sm font-medium text-zinc-100">{name}</p>
                  <p className="mt-1 text-xs text-zinc-500">Explore items</p>
                </div>
                <ArrowUpRight size={17} className="text-zinc-600 transition group-hover:text-indigo-300" />
              </button>
            ))}
          </div>

          {/* Recent items */}
          <div id="recent-items" className="scroll-mt-24 pt-20">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase">
                  Community board
                </p>
                <h2 className="text-3xl font-semibold tracking-tight">Recently reported</h2>
                <p className="mt-2 text-sm text-zinc-500">
                  Sample listings to preview the interface.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["All items", "Electronics", "Books & Notes"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setCategory(filter)}
                    className={`rounded-lg border px-3 py-2 text-xs transition ${
                      category === filter
                        ? "border-indigo-400/30 bg-indigo-500/10 text-indigo-300"
                        : "border-white/[0.08] text-zinc-500 hover:text-white"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {filteredItems.map((item) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111116] transition hover:-translate-y-1 hover:border-white/[0.15]"
                >
                  <div className={`relative flex h-44 items-center justify-center ${
                    item.color === "violet"
                      ? "bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-[#111116]"
                      : item.color === "blue"
                      ? "bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-[#111116]"
                      : "bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-[#111116]"
                  }`}>
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-black/20 text-2xl font-semibold text-white/80 shadow-xl backdrop-blur">
                      {item.initials}
                    </div>
                    <span className={`absolute top-4 left-4 rounded-full border px-3 py-1 text-xs font-medium ${
                      item.status === "Found"
                        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                        : "border-amber-400/20 bg-amber-400/10 text-amber-300"
                    }`}>
                      {item.status}
                    </span>
                    <span className="absolute right-4 bottom-4 rounded-lg border border-white/10 bg-black/20 px-2.5 py-1.5 text-[11px] text-zinc-300 backdrop-blur">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold tracking-tight">{item.title}</h3>
                    <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
                      <MapPin size={14} className="shrink-0" />
                      {item.location}
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-zinc-500">
                      <Clock3 size={14} className="shrink-0" />
                      {item.date}
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4">
                      <span className="text-xs text-zinc-500">Sample report</span>
                      <span className="flex items-center gap-1.5 text-xs font-medium text-indigo-300">
                        Details <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="mt-7 rounded-2xl border border-dashed border-white/10 px-6 py-14 text-center">
                <Search className="mx-auto mb-4 text-zinc-500" size={30} />
                <p className="font-medium">No matching sample items</p>
                <p className="mt-2 text-sm text-zinc-500">
                  Try another search or reset your category filter.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setCategory("All items");
                  }}
                  className="mt-5 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium hover:bg-indigo-400"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-24 border-t border-white/[0.07] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase">
              Simple by design
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Lost. Found. Reunited.
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-500 sm:text-base">
              Three simple steps toward getting belongings back where they belong.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Report an item",
                desc: "Share a description, the location, and a photo when available.",
                icon: Camera,
              },
              {
                n: "02",
                title: "Discover a match",
                desc: "Search community reports. AI-powered suggestions are planned for a future phase.",
                icon: Search,
              },
              {
                n: "03",
                title: "Reconnect safely",
                desc: "Verify identifying details and coordinate a safe return.",
                icon: CheckCircle2,
              },
            ].map(({ n, title, desc, icon: Icon }) => (
              <div key={n} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-indigo-400">{n}</span>
                  <Icon size={22} className="text-zinc-500" />
                </div>
                <h3 className="mt-7 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report CTA */}
      <section id="report" className="scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/[0.16] via-[#15131f] to-[#101015] px-6 py-14 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -bottom-40 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-indigo-300 uppercase">
                Every item has a way home
              </p>
              <h2 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
                Found something?
                <br />
                Be someone&apos;s good news.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                A small report can make a big difference to someone in your campus community.
              </p>
            </div>
            <a
              href="mailto:hello@example.com?subject=Lost%20and%20Found%20report"
              className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              Get involved <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="community" className="border-t border-white/[0.08] bg-[#08080b]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-300">
              <MapPin size={19} />
            </div>
            <div>
              <p className="text-sm font-semibold">Lost &amp; Found</p>
              <p className="mt-1 text-xs text-zinc-600">Connecting what is lost with where it belongs.</p>
            </div>
          </div>
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Lost &amp; Found · Built for campus communities.
          </p>
        </div>
      </footer>
    </main>
  );
}
