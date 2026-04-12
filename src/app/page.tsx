"use client";
import Framework from "@/components/Framework";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    let raf = 0;
    let lastX = 0, lastY = 0;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width; // -0.5..0.5
      const dy = (e.clientY - cy) / rect.height;
      const magnitude = 12; // px
      lastX = -dx * magnitude;
      lastY = -dy * magnitude;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const apply = () => {
      el.style.setProperty("--px", `${lastX.toFixed(2)}px`);
      el.style.setProperty("--py", `${lastY.toFixed(2)}px`);
      raf = 0;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div className="relative min-h-screen text-foreground bg-background">
      {/* Sticky CTA removed */}
      {/* Header moved to layout */}

      {/* HERO (LayerZero-like structure) */}
      <section ref={heroRef} className="lzr-background pt-24 md:pt-28 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="kicker">Accelerator for AllFi</div>
              <h1 className="headline-xl tracking-tight text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1]">
                Take the friction out of onchain transaction flows.
              </h1>
              <div className="text-white/70 max-w-3xl space-y-3">
                <p className="text-lg md:text-xl leading-relaxed">
                  The guesswork is the problem. Who are the parties? What&apos;s the sequence? What does it actually take to get from idea to committed? Most of that knowledge lives with people who&apos;ve done it before — and they&apos;re not sharing the playbook.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  Flowryd OS is your playbook. Open a deal, see exactly how it flows — the functions, the steps, the parties. Work it with everyone in your own Deal Room.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 max-w-[720px]">
                <a
                  href="https://flowryd.typeform.com/to/z4N2MGrQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group inline-flex items-center justify-between min-h-12 border border-white/30 hover:border-white/60 rounded px-4 py-3"
                >
                  <span className="text-white/90 text-base md:text-lg leading-snug">Let&apos;s Flow</span>
                  <span className="transition-transform group-hover:translate-x-0.5">🚀</span>
                </a>
                <a
                  href="https://flowryd.typeform.com/to/UkJLqGuB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group inline-flex items-center justify-between min-h-12 bg-white/5 border border-white/10 hover:bg-white/10 rounded px-4 py-3 transition-colors"
                >
                  <span className="text-white/90 text-base md:text-lg leading-snug">Book a Demo</span>
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
              </div>
            </div>
            <div className="relative h-[320px] md:h-[420px] lg:h-[520px]"></div>
          </div>
        </div>
      </section>

  
      {/* SECTIONS */}
      <main>
        <section id="problem" className="section border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="nav-compact mb-6">WHY</div>
            <div className="max-w-3xl space-y-6">
              <p className="text-white/80 text-lg leading-relaxed">
                Canton Network has $9T+ in monthly transaction volume, 600+ institutions, and hundreds of specialized apps ready to transact. The infrastructure works.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                What doesn&apos;t work is the coordination. Getting from &ldquo;we should do a deal&rdquo; to &ldquo;the deal is committed and executing&rdquo; still runs on email chains, phone calls, and institutional memory held by the handful of people who know the playbook.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Flowryd OS makes that playbook visible to everyone. That&apos;s AllFi — where TradFi and digital assets transact together, on open rails, without the gatekeeping.
              </p>
            </div>
          </div>
        </section>

        <section id="what" className="section border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-semibold mb-6">How It Works</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded border border-white/10 bg-black/30 space-y-4">
                <div className="nav-compact text-white/60">01</div>
                <h3 className="text-2xl font-semibold text-white">Open a deal.</h3>
                <p className="text-white/70 leading-relaxed">
                  Choose from Accelerators — production-ready transaction flows mapped to ICMA, ISDA, and Canton standards — or build from scratch. A Deal Room opens with structure, roles, and steps pre-loaded.
                </p>
              </div>
              <div className="p-6 rounded border border-white/10 bg-black/30 space-y-4">
                <div className="nav-compact text-white/60">02</div>
                <h3 className="text-2xl font-semibold text-white">See the flow.</h3>
                <p className="text-white/70 leading-relaxed">
                  Every function, every step, every party role — visible from day one. Ryd AI navigates the Canton ecosystem alongside you, surfacing relevant intelligence as the deal progresses.
                </p>
              </div>
              <div className="p-6 rounded border border-white/10 bg-black/30 space-y-4">
                <div className="nav-compact text-white/60">03</div>
                <h3 className="text-2xl font-semibold text-white">Work it together.</h3>
                <p className="text-white/70 leading-relaxed">
                  All parties in one room. Send and receive offers. Move through deal states. When everyone is Committed, it executes on Canton Network. No reconciliation. No chasing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Modules */}
        <section id="modules" className="section border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Framework />
          </div>
        </section>

        
   

        

        {/* GET STARTED */}
        <section id="develop" className="section border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">Let&apos;s Flow. 🚀</h2>
            <p className="text-white/70 max-w-3xl mb-8">Flowryd OS is your playbook for institutional multi-party transactions on Canton Network. Open a deal, see the flow, work it together.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://flowryd.typeform.com/to/z4N2MGrQ"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded border border-white/20 hover:border-white/50 bg-black/30 px-5 py-4 flex items-center justify-between"
              >
                <div>
                  <div className="nav-compact mb-1">Let&apos;s Flow</div>
                  <div className="text-white/60 text-sm">Open your first Deal Room on Flowryd OS.</div>
                </div>
                <span className="transition-transform group-hover:translate-x-0.5">🚀</span>
              </a>
              <a
                href="https://flowryd.typeform.com/to/UkJLqGuB"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded border border-white/20 hover:border-white/50 bg-black/30 px-5 py-4 flex items-center justify-between"
              >
                <div>
                  <div className="nav-compact mb-1">Book a Demo</div>
                  <div className="text-white/60 text-sm">See Flowryd OS in action with your use case.</div>
                </div>
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </div>
        </section>

     

        {/* Proof strip */}
        <section className="py-6 border-y border-white/10 bg-black/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">$9T+</div>
                <div className="nav-compact text-white/60 mt-1">monthly transaction volume</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">600+</div>
                <div className="nav-compact text-white/60 mt-1">institutions</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">12/13</div>
                <div className="nav-compact text-white/60 mt-1">governance vote</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">Per org</div>
                <div className="nav-compact text-white/60 mt-1">priced per org, not per user</div>
              </div>
            </div>
          </div>
        </section>

        {/* Application form removed */}

      </main>

      {/* Footer moved to layout */}
    </div>
  );
}
