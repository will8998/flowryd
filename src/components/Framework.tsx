"use client";

import React, { useState } from "react";

type Key = "dealroom" | "intelligence" | "marketplace";

const CARDS: Array<{
  key: Key;
  index: string;
  title: string;
  subtitle: string;
  intro: string;
}> = [
  {
    key: "dealroom",
    index: "01",
    title: "Deal Room",
    subtitle: "Your room. All parties.",
    intro:
      "Draft \u2192 Open \u2192 Negotiate \u2192 Locked \u2192 Committed. When it commits, it executes on Canton.",
  },
  {
    key: "intelligence",
    index: "02",
    title: "Intelligence",
    subtitle: "Context for every deal.",
    intro:
      "Canton market context filtered to what\u2019s relevant to your deal. Ryd AI at every step.",
  },
  {
    key: "marketplace",
    index: "03",
    title: "Marketplace",
    subtitle: "Coming soon.",
    intro:
      "Inflight deals to join, App Stacks, and Canton tools. Coming soon.",
  },
];

export default function Framework() {
  const [active, setActive] = useState<Key>("dealroom");

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
      
    </div>
  );
}


