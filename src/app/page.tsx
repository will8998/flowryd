"use client";
import TypeWord from "@/components/TypeWord";
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
      {/* Header moved to layout */}

      {/* HERO (LayerZero-like structure) */}
      <section ref={heroRef} className="lzr-background pt-24 md:pt-28 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="kicker">Accelerator for AllFi</div>
              <h1 className="headline-xl tracking-tight">
                <span className="block text-[56px] md:text-[96px] lg:text-[120px]">Take</span>
                <span className="block text-[56px] md:text-[96px] lg:text-[120px]">
                  the <TypeWord className="font-inherit" words={["Friction", "Guesswork", "Gatekeeping"]} />
                </span>
                <span className="block text-[56px] md:text-[96px] lg:text-[120px]">Out.</span>
              </h1>
              <div className="space-y-4">
                <div className="text-white/70 max-w-3xl space-y-3">
                  <p className="text-lg md:text-xl leading-relaxed">
                    Who are the parties? What&apos;s the sequence? What does it actually take to get from idea to committed?
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed">
                    Flowryd OS is your playbook. Open a deal, see exactly how it flows — the functions, the steps, the parties. Work it with everyone in your own Deal Room.
                  </p>
                </div>
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
        {/* WHY BLOCK — with animated icon grid */}
        <section id="problem" className="section border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              {/* Left grid panel (visual) */}
              <div className="md:col-span-5">
                <div className="nav-compact text-white/70 mb-3">[ 01 / 04 ]</div>
                <div className="relative h-[520px] rounded border border-white/10 overflow-hidden bg-black/40">
                  {/* subtle grid pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full" style={{
                      backgroundImage: `repeating-linear-gradient(0deg, transparent 0px, transparent 23px, rgba(255,255,255,0.06) 23px, rgba(255,255,255,0.06) 24px),repeating-linear-gradient(90deg, transparent 0px, transparent 23px, rgba(255,255,255,0.06) 23px, rgba(255,255,255,0.06) 24px)`
                    }} />
                  </div>
                  {/* 3x3 icon tiles — sequential fade one-at-a-time */}
                  <div className="absolute inset-6 grid grid-cols-3 grid-rows-3 gap-6">
                  {Array.from({ length: 9 }).map((_, i) => {
                    const seed = (n: number) => {
                      const s = Math.sin(n * 12.9898) * 43758.5453;
                      return s - Math.floor(s);
                    };
                    const r1 = seed(i + 1);
                    const r2 = seed(i + 11);
                    const r3 = seed(i + 21);
                    const delay = `${(r1 * 2.8).toFixed(2)}s`;
                    const dur = `${(2 + r2 * 3).toFixed(2)}s`;
                    const tx = `${(r3 * 2 - 1).toFixed(1)}px`;
                    const ty = `${(seed(i + 31) * 2 - 1).toFixed(1)}px`;
                    return (
                      <div
                        key={i}
                        className="pulse-tile border border-white/10 bg-black/30 rounded flex items-center justify-center"
                        style={{ ["--d" as string]: delay, ["--t" as string]: dur, ["--tx" as string]: tx, ["--ty" as string]: ty }}
                        aria-hidden
                      >
                        {(() => {
                          switch (i % 4) {
                            case 0:
                              return (
                                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" className="text-white/80">
                                  <path d="M3 11l18-8-8 18-2-7-8-3z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                </svg>
                              );
                            case 1:
                              return (
                                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" className="text-white/80">
                                  <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
                                  <circle cx="9" cy="9" r="1.8" fill="currentColor" />
                                  <circle cx="15" cy="15" r="1.8" fill="currentColor" />
                                </svg>
                              );
                            case 2:
                              return (
                                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" className="text-white/80">
                                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
                                  <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                              );
                            default:
                              return (
                                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" className="text-white/80">
                                  <rect x="5" y="5" width="5" height="5" stroke="currentColor" strokeWidth="1.5" />
                                  <rect x="14" y="5" width="5" height="5" stroke="currentColor" strokeWidth="1.5" />
                                  <rect x="5" y="14" width="5" height="5" stroke="currentColor" strokeWidth="1.5" />
                                  <rect x="14" y="14" width="5" height="5" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                              );
                          }
                        })()}
                      </div>
                    );
                  })}
                  </div>
                </div>
              </div>

              {/* Right content panel (text) */}
              <div className="md:col-span-7">
                <div className="nav-compact mb-6">WHY</div>

                <div className="space-y-6">
                  <h2 className="text-white text-2xl md:text-3xl font-medium leading-tight">
                    The infrastructure works. The coordination doesn&apos;t.
                  </h2>

                  <p className="text-white/80 text-lg leading-relaxed">
                    Canton Network has $9T+ in monthly transaction volume, 600+ institutions, and hundreds of specialized apps ready to transact. The infrastructure works.
                  </p>
                  <p className="text-white/80 text-lg leading-relaxed">
                    What doesn&apos;t work is the coordination. Getting from &ldquo;we should do a deal&rdquo; to &ldquo;the deal is committed and executing&rdquo; still runs on email chains, phone calls, and institutional memory held by the handful of people who know the playbook.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-white text-xl font-medium">The current play:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Box 1 */}
                      <div className="flex items-start gap-3 p-4 rounded border border-white/10 bg-black/30">
                        <div className="shrink-0 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/80">
                            <path d="M3 11l18-8-8 18-2-7-8-3z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-medium">Email chains</div>
                          <div className="text-white/70">Instead of a shared Deal Room</div>
                        </div>
                      </div>

                      {/* Box 2 */}
                      <div className="flex items-start gap-3 p-4 rounded border border-white/10 bg-black/30">
                        <div className="shrink-0 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/80">
                            <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
                            <circle cx="9" cy="9" r="1.2" fill="currentColor" />
                            <circle cx="15" cy="15" r="1.2" fill="currentColor" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-medium">Guessing on parties</div>
                          <div className="text-white/70">Instead of seeing who fits the flow</div>
                        </div>
                      </div>

                      {/* Box 3 */}
                      <div className="flex items-start gap-3 p-4 rounded border border-white/10 bg-black/30">
                        <div className="shrink-0 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/80">
                            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-medium">Institutional memory</div>
                          <div className="text-white/70">Instead of a visible playbook</div>
                        </div>
                      </div>

                      {/* Box 4 */}
                      <div className="flex items-start gap-3 p-4 rounded border border-white/10 bg-black/30">
                        <div className="shrink-0 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/80">
                            <rect x="5" y="5" width="5" height="5" stroke="currentColor" strokeWidth="1.5" />
                            <rect x="14" y="5" width="5" height="5" stroke="currentColor" strokeWidth="1.5" />
                            <rect x="5" y="14" width="5" height="5" stroke="currentColor" strokeWidth="1.5" />
                            <rect x="14" y="14" width="5" height="5" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-medium">Gatekeeping</div>
                          <div className="text-white/70">Instead of open rails for everyone</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/80 text-lg leading-relaxed border-l-2 border-white/20 pl-4">
                    Flowryd OS makes that playbook visible to everyone.<br /><br />
                    That&apos;s AllFi — where TradFi and digital assets transact together, on open rails, without the gatekeeping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS — 3 steps + intelligence panels */}
        <section id="what" className="section border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-5xl md:text-6xl font-semibold mb-6">How It Works</h2>
              <p className="text-white/70 text-xl">Your playbook for onchain transaction flows</p>
            </div>

            <div className="mb-6 flex items-center gap-3">
              <Image src="/flow.svg" alt="Flowryd OS Logo" width={32} height={32} className="h-8 w-8" />
              <div className="text-2xl font-semibold text-white">The Flowryd OS Code</div>
            </div>

            {/* 3-step explainer cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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

            {/* Intelligence panels — animated visuals */}
            <div className="mt-8 border-t border-white/10 pt-6" id="intelligence">
              <div className="nav-compact text-white/70 mb-2">Ryd AI intelligence. Your advantage.</div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-white/70">
                <div className="panel p-3 md:col-span-4 relative">
                  <div className="nav-compact mb-2">DEAL_SIGNAL <span className="text-white/50">— Market context in</span></div>
                  <div className="cells">
                    {Array.from({ length: 200 }).map((_, i) => (
                      <div key={i} className="cell" style={{ animationDelay: `${(i%10)*0.1}s` }} />
                    ))}
                  </div>
                  <div className="tx-pulse" />
                </div>
                <div className="panel p-3 md:col-span-4">
                  <div className="nav-compact mb-2">Accelerator mapping and deal flows</div>
                  <div className="glow-bar-list">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="glow-bar" style={{ animationDelay: `${i*0.25}s` }} />
                    ))}
                  </div>
                </div>
                <div className="panel p-3 md:col-span-4">
                  <div className="nav-compact mb-2">Deal committed and executing on Canton</div>
                  <div className="flicker py-10 diamond-pulse">
                    <div className="eth-diamond" />
                    <div className="text-center mt-4 text-white/60 nav-compact">— Deal executed on Flowryd OS</div>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-white/70 text-center">Every deal becomes a flow. Every flow becomes an Accelerator.</p>
              <div className="mt-6 panel p-4 mx-auto max-w-2xl text-center">
                <div className="nav-compact mb-1">MARKETPLACE</div>
                <div className="font-medium mb-1">Accelerator Marketplace — Coming Soon</div>
                <p className="text-white/80">Inflight deals to join, App Stacks, and Canton tools.</p>
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

        {/* Two-column momentum section */}
        <section id="moment" className="section border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="stage-rail mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-8">
              AllFi is here. The playbook is open.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded border border-white/10 bg-black/30">
                <div className="nav-compact text-white/70 mb-4">The infrastructure is ready:</div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-md border border-white/10 bg-white/5 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/80"><path d="M12 2l2.2 5.5L20 10l-5.5 2-2.5 6-2-6L4 10l6-2.5L12 2z" stroke="currentColor" strokeWidth="1.3"/></svg>
                    </div>
                    <div className="text-white/80">$9T+ monthly transaction volume</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-md border border-white/10 bg-white/5 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/80"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.3"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.3"/></svg>
                    </div>
                    <div className="text-white/80">600+ institutions on Canton</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-md border border-white/10 bg-white/5 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/80"><circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.3"/><circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.3"/><circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="1.3"/><path d="M8 7.5l3 7M16 7.5l-3 7" stroke="currentColor" strokeWidth="1.3"/></svg>
                    </div>
                    <div className="text-white/80">600,000+ transactions per day</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded border border-white/10 bg-black/30">
                <div className="nav-compact text-white/70 mb-4">The old gates are gone.</div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-md border border-white/10 bg-white/5 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/80"><rect x="6" y="11" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.3"/><path d="M9 11V8a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="1.3"/></svg>
                    </div>
                    <div className="text-white/80">Open rails, not gatekeepers</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-md border border-white/10 bg-white/5 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/80"><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.3"/><path d="M6 6l12 12" stroke="currentColor" strokeWidth="1.3"/></svg>
                    </div>
                    <div className="text-white/80">TradFi and digital assets together</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-md border border-white/10 bg-white/5 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/80"><path d="M12 4l8 4-8 4-8-4 8-4z" stroke="currentColor" strokeWidth="1.3"/><path d="M4 12l8 4 8-4" stroke="currentColor" strokeWidth="1.3"/></svg>
                    </div>
                    <div className="text-white/80">Priced per org, not per user</div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl text-white/80 text-center mt-8">
              Not just for those who already know the playbook. Flows for all.
            </h3>
            <div className="stage-rail mt-6"></div>
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

      </main>

      {/* Footer moved to layout */}
    </div>
  );
}
