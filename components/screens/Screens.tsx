"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Fingerprint,
  Lock,
  MapPin,
  Mic,
  ShieldCheck,
  ChevronLeft,
  Settings,
  Sun,
  Droplet,
  Moon,
  Calendar,
  Power,
  Flame,
  Activity,
  Search,
  User,
  ShoppingBag,
  Store,
} from "lucide-react";

/* Compact in-phone UIs, reused across the hero fan and the feature rows. */

export function YumyooScreen() {
  const [activeTab, setActiveTab] = useState<"splash" | "home" | "menu" | "track">("home");

  const renderContent = () => {
    switch (activeTab) {
      case "splash":
        return (
          <motion.div
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#FF5E3A] to-[#FF8A3D] text-white p-6 overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute top-[-10%] left-[-10%] h-40 w-40 rounded-full bg-white/5 blur-xl" />
            <div className="absolute bottom-[-10%] right-[-10%] h-40 w-40 rounded-full bg-white/5 blur-xl" />

            <div className="flex flex-col items-center gap-4 text-center z-10">
              <motion.div 
                className="flex h-16 w-16 items-center justify-center rounded-[1.3rem] bg-white shadow-xl shadow-orange-950/10"
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg width="36" height="36" viewBox="0 0 100 100" fill="none" className="text-[#FF5E3A]">
                  <rect x="25" y="25" width="12" height="24" rx="6" fill="currentColor" />
                  <rect x="63" y="25" width="12" height="24" rx="6" fill="currentColor" />
                  <path d="M25 60 C 25 80, 75 80, 75 60" stroke="currentColor" strokeWidth="9" strokeLinecap="round" fill="none" />
                </svg>
              </motion.div>
              <h2 className="font-serif text-3xl font-bold tracking-tight mt-1">Yumyoo</h2>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] opacity-90 mt-0.5">
                Ready Before You Arrive.
              </p>
            </div>

            <button
              onClick={() => setActiveTab("home")}
              className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/10 border border-white/20 py-2.5 text-[10px] font-bold tracking-wider uppercase text-white hover:bg-white/20 transition-colors"
            >
              Get Started
            </button>
          </motion.div>
        );

      case "home":
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col bg-[#FFFDFB] text-ink p-4 pt-9 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <MapPin size={11} className="text-[#FF5E3A]" />
                <span className="text-[10px] font-bold text-ink/70 truncate max-w-[120px]">S Building, Abdul Latif</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[8px] font-bold text-amber-600 border border-amber-500/15">GOLD ₹1</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-[#FF5E3A]">
                  <User size={12} className="fill-[#FF5E3A]/10" />
                </span>
              </div>
            </div>

            {/* Search */}
            <div className="mt-3.5 relative flex items-center">
              <Search size={12} className="absolute left-3 text-muted" />
              <input
                type="text"
                placeholder="Search cafes, food, stores..."
                disabled
                className="w-full rounded-xl border border-line bg-black/[0.01] py-2 pl-8 pr-3 text-[10px] text-muted outline-none"
              />
            </div>

            {/* Banner */}
            <div className="mt-3.5 rounded-2xl bg-gradient-to-br from-[#FF8A3D] to-[#FF5E3A] p-3 text-white relative overflow-hidden">
              <div className="absolute right-[-10px] bottom-[-20px] h-20 w-20 rounded-full bg-white/10 blur-md" />
              <p className="text-[9px] font-bold uppercase tracking-wider opacity-90">Meals Under</p>
              <p className="font-serif text-2xl font-bold leading-none mt-1">₹250</p>
              <p className="text-[8px] opacity-85 mt-1">Best offers applied</p>
            </div>

            {/* Scrollable contents */}
            <div className="flex-1 overflow-y-auto no-scrollbar my-3 flex flex-col gap-3">
              {/* Category pills */}
              <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                {["🍔 Burger", "🍕 Pizza", "🍜 Ramen", "☕ Cafe", "🍦 Gelato"].map((cat) => (
                  <span key={cat} className="shrink-0 rounded-full border border-line bg-white px-2.5 py-1 text-[9px] font-semibold text-ink/75 shadow-sm">
                    {cat}
                  </span>
                ))}
              </div>

              {/* Recommended list */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted">Recommended for you</h4>
                <div className="mt-2 flex flex-col gap-2">
                  {[
                    { name: "Hotel Akshay", rating: "4.3", time: "30-35 mins", dist: "2.6 km", tags: "Cafe, Desserts" },
                    { name: "Spice Durbar Biryani House", rating: "4.2", time: "30-35 mins", dist: "1.8 km", tags: "Indian, Biryani" }
                  ].map((store) => (
                    <div
                      key={store.name}
                      onClick={() => setActiveTab("menu")}
                      className="cursor-pointer rounded-xl border border-line bg-white p-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-start gap-3 hover:border-[#FF5E3A]/25 transition-colors"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFFAF5] text-[#FF5E3A] border border-[#FFE9DC] shadow-inner font-serif text-base font-bold shrink-0">
                        {store.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <p className="text-[11px] font-bold text-ink truncate">{store.name}</p>
                          <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">★ {store.rating}</span>
                        </div>
                        <p className="text-[8px] text-muted mt-0.5">{store.tags}</p>
                        <p className="text-[8px] text-ink/65 font-medium mt-1">
                          {store.time} • {store.dist}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "menu":
        return (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col bg-[#FFFDFB] text-ink p-4 pt-9 overflow-hidden"
          >
            {/* Store details */}
            <div className="flex justify-between items-start gap-1">
              <div>
                <div className="flex items-center gap-1.5">
                  <ChevronLeft size={14} className="cursor-pointer" onClick={() => setActiveTab("home")} />
                  <h3 className="font-serif text-lg font-bold">Gelato Vinto</h3>
                </div>
                <p className="text-[8px] text-muted mt-0.5 pl-5">🍦 4.6 (230+) • Cafe, Desserts</p>
                <p className="text-[8px] text-ink/60 font-semibold mt-1 pl-5">10-15 mins • 1.2 km</p>
              </div>
            </div>

            <div className="my-2 border-t border-line" />

            {/* Menu tab selection */}
            <div className="flex gap-3 text-[9px] font-bold text-muted pb-1 border-b border-line px-1">
              <span className="text-[#FF5E3A] border-b border-[#FF5E3A]">Menu</span>
              <span>Best Sellers</span>
              <span>Reviews</span>
            </div>

            {/* Menu list */}
            <div className="flex-1 overflow-y-auto no-scrollbar my-2.5 flex flex-col gap-2.5 pr-0.5">
              {[
                { name: "Belgian Chocolate Gelato", desc: "Rich Belgian chocolate gelato.", price: "₹180", emoji: "🍫" },
                { name: "Pistachio Delight Gelato", desc: "Premium Sicilian pistachio gelato.", price: "₹190", emoji: "🍦" },
                { name: "Mango Sorbet", desc: "Fresh Alphonso mango sorbet.", price: "₹170", emoji: "🥭" }
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between rounded-xl border border-line bg-white p-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFFAF5] border border-[#FFE9DC] text-base shrink-0">{item.emoji}</span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold text-ink leading-tight truncate">{item.name}</p>
                      <p className="text-[8px] text-muted leading-tight mt-0.5 truncate">{item.desc}</p>
                      <p className="text-[9px] font-bold text-[#FF5E3A] mt-1">{item.price}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActiveTab("track")}
                    className="shrink-0 rounded-lg bg-orange-50 hover:bg-orange-100 px-2 py-1 text-[8px] font-bold text-[#FF5E3A] border border-[#FFE9DC] transition-colors"
                  >
                    + Add
                  </button>
                </div>
              ))}
            </div>

            {/* Cart banner */}
            <div 
              onClick={() => setActiveTab("track")}
              className="cursor-pointer mt-auto rounded-xl bg-[#FF5E3A] p-2.5 flex items-center justify-between text-white shadow-lg shadow-orange-500/20 hover:bg-[#FF8A3D] transition-colors"
            >
              <div className="flex items-center gap-1.5">
                <ShoppingBag size={12} />
                <span className="text-[9px] font-bold">Cart - 2 items</span>
              </div>
              <span className="text-[9px] font-bold">₹370</span>
            </div>
          </motion.div>
        );

      case "track":
        return (
          <motion.div
            key="track"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col bg-[#FFFDFB] text-ink p-4 pt-9 overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center text-[10px] font-medium text-ink/75">
              <ChevronLeft size={14} className="cursor-pointer" onClick={() => setActiveTab("menu")} />
              <span className="font-serif text-[11px] font-bold tracking-tight text-ink">Order Tracking</span>
              <span className="text-[8px] font-bold text-[#FF5E3A] bg-orange-50 border border-orange-100 rounded px-1.5 py-0.5">Help</span>
            </div>

            <div className="flex-1 flex flex-col my-3.5">
              {/* Order Status */}
              <div className="text-center">
                <p className="text-[9px] font-semibold text-[#FF5E3A] tracking-wider uppercase">Preparing your order</p>
                <p className="text-xs text-muted mt-0.5">We are cooking your food with love!</p>
              </div>

              {/* Map Trace Graphic */}
              <div className="my-4 relative flex-1 min-h-[90px] rounded-2xl border border-line bg-gradient-to-br from-orange-50/50 to-orange-100/10 overflow-hidden flex items-center justify-center p-4">
                <svg className="absolute inset-0 h-full w-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10,20 Q40,60 90,30 T170,80" fill="none" stroke="#FF5E3A" strokeWidth="2" strokeDasharray="4" />
                </svg>
                <div className="text-center z-10">
                  <p className="text-[9px] font-bold text-ink/50 uppercase tracking-widest">Estimated Arrival</p>
                  <p className="font-serif text-2xl font-bold text-[#FF5E3A] leading-none mt-1">10:55 PM</p>
                  <p className="text-[8px] font-bold text-[#FF5E3A] opacity-75 mt-1">15 mins left</p>
                </div>
              </div>

              {/* Timeline list */}
              <div className="flex flex-col gap-2 mt-auto">
                {[
                  { title: "Confirmed", time: "10:32 AM", done: true },
                  { title: "Preparing", time: "10:35 AM", active: true },
                  { title: "Ready", time: "Est. 10:50 AM" },
                  { title: "Picked Up", time: "Est. 10:55 AM" }
                ].map((step) => (
                  <div key={step.title} className="flex items-center gap-3 pl-1">
                    <span className={`h-2 w-2 rounded-full ring-4 ${step.done ? "bg-emerald-500 ring-emerald-50" : step.active ? "bg-[#FF5E3A] ring-orange-100 animate-pulse" : "bg-black/10 ring-transparent"}`} />
                    <div className="flex-1 flex justify-between items-center leading-none">
                      <span className={`text-[9px] font-bold ${step.done || step.active ? "text-ink" : "text-muted"}`}>{step.title}</span>
                      <span className="text-[8px] text-muted">{step.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="relative flex h-full flex-col bg-white select-none overflow-hidden">
      {/* Dynamic view content */}
      <div className="flex-1 relative w-full overflow-hidden">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>

      {/* App bottom tab bar */}
      <div className="h-[46px] border-t border-black/[0.04] bg-white/85 backdrop-blur-md flex items-center justify-around px-2 pb-0.5 z-20">
        {[
          { id: "splash", icon: Flame, label: "Splash" },
          { id: "home", icon: Store, label: "Home" },
          { id: "menu", icon: ShoppingBag, label: "Menu" },
          { id: "track", icon: Clock, label: "Track" },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as "splash" | "home" | "menu" | "track")}
              className="flex flex-col items-center justify-center gap-0.5 flex-1 h-full py-1 text-center"
            >
              <tab.icon
                size={14}
                className={`transition-colors ${
                  isActive ? "text-[#FF5E3A] fill-[#FF5E3A]/15" : "text-black/35"
                }`}
              />
              <span
                className={`text-[8px] font-bold transition-colors leading-none tracking-wide ${
                  isActive ? "text-black/85 font-bold" : "text-black/35 font-medium"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function MedicScreen() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#EAFBF4] to-[#EEF1FF] p-4 pt-9 text-ink">
      <p className="text-[10px] uppercase tracking-wide text-muted">Today</p>
      <h3 className="font-serif text-lg font-semibold">Good morning</h3>

      <div className="mt-3 rounded-2xl bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between text-[10px] text-muted">
          <span>Weekly adherence</span>
          <span className="font-semibold text-emerald-500">96%</span>
        </div>
        <div className="mt-3 flex h-16 items-end gap-1.5">
          {[55, 78, 42, 90, 68, 100, 82].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-accent/60 to-glow"
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
            />
          ))}
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-1.5">
        {[
          ["💊", "Vitamin D", "8:00 AM"],
          ["🩺", "Blood pressure", "Pending"],
        ].map(([e, n, t]) => (
          <div
            key={n}
            className="flex items-center gap-2 rounded-xl bg-white p-2.5 shadow-sm"
          >
            <span className="text-base">{e}</span>
            <div className="flex-1">
              <p className="text-[11px] font-semibold">{n}</p>
              <p className="text-[9px] text-muted">{t}</p>
            </div>
            <span className="h-4 w-4 rounded-full border-2 border-accent/40" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function HearlyScreen() {
  return (
    <div className="flex h-full flex-col bg-[#15121f] p-4 pt-9 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
            <Mic size={14} />
          </span>
          <div>
            <p className="text-[11px] font-semibold">Standup · Live</p>
            <p className="text-[9px] text-white/60">4 participants</p>
          </div>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-emerald-400/20 px-2 py-0.5 text-[9px] text-emerald-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          REC
        </span>
      </div>

      <div className="mt-6 flex h-16 items-end justify-center gap-1">
        {Array.from({ length: 22 }).map((_, i) => (
          <motion.span
            key={i}
            className="w-1 rounded-full bg-gradient-to-t from-accent/50 to-white"
            animate={{ height: ["18%", "90%", "32%", "70%", "18%"] }}
            transition={{
              duration: 1.4 + (i % 5) * 0.18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.05,
            }}
            style={{ height: "30%" }}
          />
        ))}
      </div>

      <div className="mt-auto rounded-2xl bg-white/10 p-3">
        <p className="text-[9px] uppercase tracking-wide text-white/50">
          AI clarity score
        </p>
        <div className="mt-2 flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/15">
            <motion.div
              className="h-full rounded-full bg-white"
              initial={{ width: "0%" }}
              whileInView={{ width: "94%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.1 }}
            />
          </div>
          <span className="text-xs font-bold">94%</span>
        </div>
      </div>
    </div>
  );
}

export function SecureScreen() {
  return (
    <div className="flex h-full flex-col bg-[#0E0B1A] p-4 pt-9 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(167,139,250,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="relative">
        <p className="text-[10px] uppercase tracking-wide text-white/50">Vault</p>
        <h3 className="font-serif text-lg font-semibold">Your passwords</h3>
      </div>

      <div className="relative my-4 flex items-center justify-center">
        <motion.div
          className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        >
          <Lock size={26} className="text-accent" />
        </motion.div>
      </div>

      <div className="relative flex flex-col gap-1.5">
        {[
          ["A", "apple.com"],
          ["G", "github.com"],
          ["F", "figma.com"],
        ].map(([l, n]) => (
          <div
            key={n}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/20 text-[11px] font-bold text-accent">
              {l}
            </span>
            <div className="flex-1">
              <p className="text-[11px] font-semibold">{n}</p>
              <p className="font-mono text-[10px] tracking-widest text-white/40">
                ••••••••
              </p>
            </div>
            <ShieldCheck size={13} className="text-emerald-400" />
          </div>
        ))}
      </div>

      <div className="relative mt-auto flex items-center justify-center gap-1.5 pt-3 text-[10px] text-white/60">
        <Fingerprint size={12} /> Unlock with Face ID
      </div>
    </div>
  );
}

export function SolaceScreen() {
  const [activeTab, setActiveTab] = useState<"sun" | "hydration" | "summary" | "sleep">("summary");

  // Render view based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "sun":
        return (
          <motion.div
            key="sun"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col bg-gradient-to-b from-[#FFFDF9] to-[#FFF3E3] p-4 pt-9 text-amber-950 overflow-hidden"
          >
            <div className="flex justify-between items-center text-amber-900/60 text-[10px] font-medium">
              <ChevronLeft size={14} className="cursor-pointer" onClick={() => setActiveTab("summary")} />
              <span className="font-serif text-[11px] font-bold tracking-tight text-amber-950">Sun Session</span>
              <Sun size={14} className="text-amber-500 animate-spin-slow" />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center my-4">
              {/* Circular Sun Session Timer */}
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-amber-500/20 shadow-[0_0_25px_rgba(245,158,11,0.15)] bg-amber-500/5">
                <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="transparent"
                    stroke="#FDE68A"
                    strokeWidth="3"
                    className="opacity-40"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="transparent"
                    stroke="#F59E0B"
                    strokeWidth="4"
                    strokeDasharray="276"
                    initial={{ strokeDashoffset: 276 }}
                    animate={{ strokeDashoffset: 100 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="text-center z-10">
                  <span className="font-serif text-3xl font-bold tracking-tight text-amber-900">04:27</span>
                  <p className="text-[9px] font-semibold text-amber-800/60 uppercase tracking-widest mt-0.5">remaining</p>
                </div>
              </div>

              <p className="mt-6 text-center text-[10px] leading-relaxed text-amber-900/80 px-2 font-medium">
                Each moment of light is a gift to your well-being.
              </p>
            </div>

            <button
              onClick={() => setActiveTab("summary")}
              className="mt-auto rounded-xl bg-amber-950/5 hover:bg-amber-950/10 border border-amber-950/10 py-2.5 text-center text-[11px] font-semibold text-amber-950 transition-colors"
            >
              Leave gently
            </button>
          </motion.div>
        );

      case "hydration":
        return (
          <motion.div
            key="hydration"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col bg-gradient-to-b from-[#F3F9FE] to-[#E9F3FC] p-4 pt-9 text-sky-950 overflow-hidden"
          >
            <div className="flex justify-between items-center text-sky-900/60 text-[10px] font-medium">
              <ChevronLeft size={14} className="cursor-pointer" onClick={() => setActiveTab("summary")} />
              <span className="font-serif text-[11px] font-bold tracking-tight text-sky-950">Hydration</span>
              <Settings size={14} className="text-sky-900/60" />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center my-3">
              {/* Circular Hydration progress */}
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-sky-400/20 shadow-[0_0_20px_rgba(14,165,233,0.1)] bg-sky-500/5">
                <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="transparent"
                    stroke="#BAE6FD"
                    strokeWidth="3"
                    className="opacity-40"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="transparent"
                    stroke="#0284C7"
                    strokeWidth="4"
                    strokeDasharray="276"
                    initial={{ strokeDashoffset: 276 }}
                    animate={{ strokeDashoffset: 110 }} // 60% full
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="text-center z-10 flex flex-col items-center">
                  <Droplet size={18} className="text-sky-500 fill-sky-500 animate-bounce" />
                  <span className="font-serif text-lg font-bold text-sky-950 mt-1">2,400 <span className="text-xs text-sky-900/60 font-sans">/ 4,000 ml</span></span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-[11px] font-bold text-sky-950">A moment of hydration</p>
                <p className="text-[9px] text-sky-900/60 mt-0.5">A gentle sip can help</p>
              </div>

              {/* Toast card */}
              <div className="mt-4 w-full rounded-2xl bg-white border border-sky-100 p-3 shadow-sm flex items-start justify-between gap-2">
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-sky-950 leading-tight">Log from Lock Screen</p>
                  <p className="text-[8px] text-sky-900/60 leading-normal mt-0.5">
                    Long-press any notification to log a glass instantly.
                  </p>
                </div>
                <button className="shrink-0 rounded-lg bg-sky-50 px-2 py-1 text-[8px] font-bold text-sky-600 border border-sky-100 hover:bg-sky-100 transition-colors">
                  Try it
                </button>
              </div>
            </div>
          </motion.div>
        );

      case "sleep":
        return (
          <motion.div
            key="sleep"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col bg-gradient-to-b from-[#090A1A] to-[#121635] p-4 pt-9 text-indigo-100 overflow-hidden"
          >
            {/* Stars */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              {[
                { top: "15%", left: "20%" },
                { top: "25%", left: "75%" },
                { top: "40%", left: "45%" },
                { top: "12%", left: "60%" },
                { top: "50%", left: "80%" },
                { top: "30%", left: "15%" },
                { top: "65%", left: "25%" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-white rounded-full"
                  style={s}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 2 + i % 3, repeat: Infinity, delay: i * 0.4 }}
                />
              ))}
            </div>

            <div className="relative flex justify-between items-center text-indigo-200/60 text-[10px] font-medium z-10">
              <ChevronLeft size={14} className="cursor-pointer" onClick={() => setActiveTab("summary")} />
              <span className="font-serif text-[11px] font-bold tracking-tight text-indigo-100">Sleep Ritual</span>
              <Power size={14} className="text-indigo-400" />
            </div>

            <div className="relative flex-1 flex flex-col items-center justify-center my-4 z-10">
              {/* Crescent Moon */}
              <motion.div
                className="relative flex h-36 w-36 items-center justify-center rounded-full"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Glow ring */}
                <div className="absolute h-24 w-24 rounded-full bg-indigo-500/10 blur-xl animate-pulse" />
                <svg className="h-20 w-20 text-yellow-100 filter drop-shadow-[0_0_15px_rgba(253,230,138,0.4)]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </motion.div>

              <div className="mt-2 text-center">
                <p className="text-[10px] font-semibold text-indigo-400 tracking-widest uppercase">ARRIVAL</p>
                <p className="text-[12px] font-bold text-white mt-1">Step away from the day</p>
                <p className="text-[9px] text-indigo-200/60 leading-normal mt-0.5 px-3">
                  Find a quiet state of being.
                </p>
              </div>
            </div>

            <button
              onClick={() => setActiveTab("summary")}
              className="relative mt-auto rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 py-2.5 text-center text-[11px] font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all z-10"
            >
              Begin Ritual
            </button>
          </motion.div>
        );

      case "summary":
      default:
        return (
          <motion.div
            key="summary"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col bg-gradient-to-b from-[#FFF2F0] to-[#FFEBEA] p-4 pt-9 text-rose-950 overflow-hidden"
          >
            <div className="flex justify-between items-center text-rose-950/60 text-[10px] font-medium">
              <span className="text-[9px] uppercase tracking-wider font-bold text-rose-900/50">Quiet Evening</span>
              <span className="font-serif text-[11px] font-bold tracking-tight text-rose-950">Daily Rhythm</span>
              <Calendar size={14} className="text-rose-900/60" />
            </div>

            {/* List of scrollable cards */}
            <div className="flex-1 overflow-y-auto no-scrollbar my-3 flex flex-col gap-2 pr-0.5">
              {/* Sunlight Streak Card */}
              <div className="rounded-xl bg-white border border-rose-100 p-2.5 shadow-[0_1px_3px_rgba(244,63,94,0.04)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-50 text-orange-500 border border-orange-100 shadow-inner">
                    <Flame size={14} className="fill-orange-500" />
                  </span>
                  <div>
                    <p className="text-[8px] font-bold text-rose-900/55 uppercase tracking-wider leading-none">Sunlight Streak</p>
                    <p className="text-[12px] font-bold text-rose-950 mt-0.5 leading-none">0 Days</p>
                  </div>
                </div>
                <ChevronLeft size={12} className="rotate-180 text-rose-950/30" />
              </div>

              {/* Light Exposure Card */}
              <div className="rounded-xl bg-white border border-rose-100 p-2.5 shadow-[0_1px_3px_rgba(244,63,94,0.04)]">
                <div className="flex items-start gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-500 border border-amber-100 shadow-inner shrink-0">
                    <Sun size={14} />
                  </span>
                  <div className="flex-1">
                    <p className="text-[8px] font-bold text-rose-900/55 uppercase tracking-wider leading-none">Light Exposure</p>
                    <p className="text-[9px] text-rose-900/60 leading-normal mt-0.5">
                      A reflection of your natural exposure
                    </p>
                    {/* Days of week dots */}
                    <div className="flex justify-between items-center mt-2 px-1">
                      {["M", "T", "W", "T", "F", "S", "S"].map((day, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-1">
                          <span className="text-[7px] font-bold text-rose-900/40">{day}</span>
                          <span className={`h-2.5 w-2.5 rounded-full ${idx < 3 ? "bg-amber-400/80 shadow-[0_0_4px_rgba(251,191,36,0.3)]" : "bg-rose-900/5 border border-rose-950/5"}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sunlight Card */}
              <div className="rounded-xl bg-white border border-rose-100 p-2.5 shadow-[0_1px_3px_rgba(244,63,94,0.04)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-yellow-50 text-yellow-600 border border-yellow-100 shadow-inner">
                    <Sun size={13} className="fill-yellow-600/20" />
                  </span>
                  <div>
                    <p className="text-[8px] font-bold text-rose-900/55 uppercase tracking-wider leading-none">Sunlight</p>
                    <p className="text-[12px] font-bold text-rose-950 mt-0.5 leading-none">Pending</p>
                  </div>
                </div>
                <span className="text-[8px] font-bold text-rose-900/50 bg-rose-50 border border-rose-100 rounded px-1.5 py-0.5">Open sky works best</span>
              </div>

              {/* Hydration Card */}
              <div className="rounded-xl bg-white border border-rose-100 p-2.5 shadow-[0_1px_3px_rgba(244,63,94,0.04)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-50 text-sky-500 border border-sky-100 shadow-inner">
                    <Droplet size={13} className="fill-sky-500/20" />
                  </span>
                  <div>
                    <p className="text-[8px] font-bold text-rose-900/55 uppercase tracking-wider leading-none">Hydration</p>
                    <p className="text-[12px] font-bold text-rose-950 mt-0.5 leading-none">0 / 2,000 ml</p>
                  </div>
                </div>
                <span className="text-[8px] font-semibold text-sky-700/60 bg-sky-50 border border-sky-100 rounded px-1.5 py-0.5 leading-none">Time for first glass</span>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="relative flex h-full flex-col bg-white select-none overflow-hidden">
      {/* Dynamic view content */}
      <div className="flex-1 relative w-full overflow-hidden">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>

      {/* App bottom tab bar */}
      <div className="h-[46px] border-t border-black/[0.04] bg-white/80 backdrop-blur-md flex items-center justify-around px-2 pb-0.5 z-20">
        {[
          { id: "sun", icon: Sun, label: "Sun" },
          { id: "hydration", icon: Droplet, label: "Hydration" },
          { id: "summary", icon: Activity, label: "Summary" },
          { id: "sleep", icon: Moon, label: "Sleep" },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as "sun" | "hydration" | "summary" | "sleep")}
              className="flex flex-col items-center justify-center gap-0.5 flex-1 h-full py-1 text-center"
            >
              <tab.icon
                size={14}
                className={`transition-colors ${
                  isActive
                    ? tab.id === "sun"
                      ? "text-amber-500 fill-amber-500/20"
                      : tab.id === "hydration"
                      ? "text-sky-500 fill-sky-500/20"
                      : tab.id === "sleep"
                      ? "text-indigo-600 fill-indigo-600/20"
                      : "text-rose-500 fill-rose-500/20"
                    : "text-black/35"
                }`}
              />
              <span
                className={`text-[8px] font-bold transition-colors leading-none tracking-wide ${
                  isActive ? "text-black/80 font-bold" : "text-black/35 font-medium"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

