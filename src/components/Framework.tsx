"use client";

import React, { useState } from "react";

type Key = "discover" | "network" | "advantage";

const CARDS: Array<{
  key: Key;
  index: string;
  title: string;
  subtitle: string;
  intro: string;
}> = [
  {
    key: "discover",
    index: "/ 01",
    title: "DISCOVER",
    subtitle: "Decode Your Position",
    intro: "Connect your PartyID — FlowRyd reveals your full network position.",
  },
  {
    key: "network",
    index: "/ 02",
    title: "NETWORK",
    subtitle: "Find Your Matches",
    intro: "FlowRyd connects you with verified position-compatible partners.",
  },
  {
    key: "advantage",
    index: "/ 03",
    title: "ADVANTAGE",
    subtitle: "Secure Your Edge",
    intro: "Turn position intelligence into sustained competitive advantage.",
  },
];

export default function Framework() {
  const [active, setActive] = useState<Key>("discover");

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CARDS.map((c) => (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            className={`relative p-6 rounded border bg-black/40 flex flex-col justify-between min-h-[320px] text-left transition-colors ${
              active === c.key ? "border-white/30" : "border-white/10 hover:border-white/30"
            }`}
            aria-pressed={active === c.key}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-6 h-6 rounded-full border border-white/30" />
                <div className="nav-compact text-white/60">{c.index}</div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{c.title}</h3>
              <h4 className="text-lg font-medium mb-3 text-white/90">{c.subtitle}</h4>
              <p className="text-sm leading-relaxed text-white/70">{c.intro}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Wide detail panel */}
      <div className="mt-6 p-6 rounded border border-white/10 bg-black/50">
        {active === "discover" && (
          <div className="grid md:grid-cols-2 gap-6 text-white/80">
            <div>
              <h5 className="font-medium mb-3 text-white">Complete Position Intelligence</h5>
              <ul className="space-y-2 text-white/80 list-none">
                {[
                  "Transaction behavior",
                  "Partnership history",
                  "Workflow participation",
                  "Reward performance",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <svg width="8" height="8" viewBox="0 0 8 8" className="text-white/70">
                      <circle cx="4" cy="4" r="3" fill="currentColor" />
                    </svg>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-3 text-white">Uncover Hidden Value</h5>
              <ul className="space-y-2 text-white/80 list-none">
                {[
                  "Missed compatible partners",
                  "Untapped advantages",
                  "Emerging niches",
                  "Strategic blind spots",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <svg width="8" height="8" viewBox="0 0 8 8" className="text-white/70">
                      <circle cx="4" cy="4" r="3" fill="currentColor" />
                    </svg>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2 text-white/70">Your position learns and adapts with every connection.</div>
          </div>
        )}

        {active === "network" && (
          <div className="grid md:grid-cols-2 gap-6 text-white/80">
            <div>
              <h5 className="font-medium mb-3 text-white">Position-Based Connections</h5>
              <ul className="space-y-2 list-none">
                {[
                  "Custody, settlement, and stablecoin partners that fit your profile",
                  "Applications and workflows that complement your structure",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <svg width="8" height="8" viewBox="0 0 8 8" className="text-white/70">
                      <circle cx="4" cy="4" r="3" fill="currentColor" />
                    </svg>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-3 text-white">Proven Blueprints</h5>
              <ul className="space-y-2 list-none">
                {[
                  "Successful workflows from similar participants",
                  "Validated partnership and strategy patterns",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <svg width="8" height="8" viewBox="0 0 8 8" className="text-white/70">
                      <circle cx="4" cy="4" r="3" fill="currentColor" />
                    </svg>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2 text-white/70">No noise. No random networking — just position-verified matches.</div>
          </div>
        )}

        {active === "advantage" && (
          <div className="grid md:grid-cols-2 gap-6 text-white/80">
            <div>
              <h5 className="font-medium mb-3 text-white">Partnership Advantage</h5>
              <ul className="space-y-2 list-none">
                {[
                  "Verified introductions (fit, not outreach)",
                  "Strategic timing",
                  "Success tracking",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <svg width="8" height="8" viewBox="0 0 8 8" className="text-white/70">
                      <circle cx="4" cy="4" r="3" fill="currentColor" />
                    </svg>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-3 text-white">Workflow Advantage</h5>
              <ul className="space-y-2 list-none">
                {[
                  "Tested blueprints",
                  "Adaptive optimization",
                  "Real-time intelligence",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <svg width="8" height="8" viewBox="0 0 8 8" className="text-white/70">
                      <circle cx="4" cy="4" r="3" fill="currentColor" />
                    </svg>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2 text-white/70">Discover → Network → Advantage. Position mastered, edge secured.</div>
          </div>
        )}
      </div>
    </div>
  );
}


