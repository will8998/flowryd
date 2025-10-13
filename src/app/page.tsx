import MatchingAnimation from "@/components/MatchingAnimation";
import TypeWord from "@/components/TypeWord";
import ClientHero from "@/components/ClientHero";

export default function Home() {
  return (
    <div className="relative min-h-screen text-foreground bg-background">
      {/* Sticky top CTA */}
      <a href="#apply" className="fixed bottom-6 right-6 z-50 nav-compact btn-outline rounded px-4 py-3 bg-black/50 backdrop-blur border-white/20 hover:border-white/40">Get My First 5 Opportunities</a>
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-background/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-full bg-white" aria-hidden />
            <span className="nav-compact">FlowRYD</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 nav-compact">
            <a href="#problem" className="text-white/70 hover:text-white">Problem</a>
            <a href="#what" className="text-white/70 hover:text-white">With FlowRyd</a>
            <a href="#dashboard" className="text-white/70 hover:text-white">How it Works</a>
            <a href="#diagram" className="text-white/70 hover:text-white">Flow</a>
            <a href="#develop" className="text-white/70 hover:text-white">Develop</a>
          </nav>
          <a href="/onboarding" className="nav-compact btn-outline px-4 py-2 rounded">Get Started</a>
        </div>
      </header>

      {/* HERO (LayerZero-like structure) */}
      <section className="lzr-background pt-24 md:pt-28 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <h1 className="headline-xl tracking-tight">
                <span className="block text-[56px] md:text-[96px] lg:text-[120px]">Flow</span>
                <span className="block text-[56px] md:text-[96px] lg:text-[120px]">
                  <TypeWord className="font-inherit" words={["FAST", "QUICK", "RYD"]} />
                </span>
                <span className="block text-[56px] md:text-[96px] lg:text-[120px]">Together</span>
              </h1>
              <div className="space-y-2">
                <div className="kicker">From ‘let’s connect’ to ‘we shipped’ in 6 weeks.</div>
                <p className="text-white/70 max-w-3xl">The acceleration layer of Canton, connecting participants, blueprints, and capital to turn coordination into real market activity.</p>
              </div>
              <div>
                <a href="#apply" className="group inline-flex items-center justify-between w-[320px] md:w-[420px] h-12 border border-white/30 hover:border-white/60 rounded px-4 nav-compact">
                  <span>START BUILDING</span>
                  <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                </a>
              </div>
            </div>
            <div className="relative h-[320px] md:h-[420px] lg:h-[520px]"><ClientHero /></div>
          </div>
        </div>
      </section>

  
      {/* SECTIONS */}
      <main>
        <section id="problem" className="section border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              {/* Left grid panel (visual) */}
              <div className="md:col-span-5">
                <div className="nav-compact text-white/70 mb-3">[ 01 / 06 ]</div>
                <div className="relative h-[520px] rounded border border-white/10 overflow-hidden bg-black/40">
                  {/* subtle grid pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full" style={{
                      backgroundImage: `repeating-linear-gradient(0deg, transparent 0px, transparent 23px, rgba(255,255,255,0.06) 23px, rgba(255,255,255,0.06) 24px),repeating-linear-gradient(90deg, transparent 0px, transparent 23px, rgba(255,255,255,0.06) 23px, rgba(255,255,255,0.06) 24px)`
                    }} />
                  </div>
                  {/* decorative tiles */}
                  <div className="absolute inset-6 grid grid-cols-3 grid-rows-3 gap-6">
                    <div className="border border-white/10 bg-black/30 rounded" />
                    <div className="border border-white/10 bg-black/30 rounded" />
                    <div className="border border-white/10 bg-black/30 rounded" />
                    <div className="border border-white/10 bg-black/30 rounded" />
                    <div className="border border-white/10 bg-black/30 rounded" />
                    <div className="border border-white/10 bg-black/30 rounded" />
                    <div className="border border-white/10 bg-black/30 rounded" />
                    <div className="border border-white/10 bg-black/30 rounded" />
                    <div className="border border-white/10 bg-black/30 rounded" />
                  </div>
                </div>
              </div>

              {/* Right content panel (text + CTAs) */}
              <div className="md:col-span-7">
                <div className="nav-compact mb-4">POSITIONING</div>
                <p className="text-white/70 text-2xl md:text-4xl leading-snug">
                  You already know your use case. What you don’t know is who you need to make it work.
                  <span className="text-white"> Discovery is broken</span> — partners are scattered across LinkedIn, Slack, Discord, Telegram;
                  <span className="text-white"> collaboration is slow</span> — multi‑party flows mean endless meetings and months of legal; and
                  <span className="text-white"> there’s no blueprint</span> — every on‑chain flow gets rebuilt from scratch.
                </p>
                <p className="mt-6 text-white/60">Bottom line: Technology works. Participation is growing. But coordination doesn’t scale—and that’s how great networks die waiting.</p>

                {/* CTA row */}
                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <a className="group inline-flex items-center justify-between sm:w-[280px] h-12 border border-white/20 hover:border-white/50 rounded px-4 nav-compact" href="#apply">
                    <span className="flex items-center gap-2">
                      <img src="/file.svg" alt="doc" className="w-4 h-4 opacity-80" /> BLUEPRINT
                    </span>
                    <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                  </a>
                  <a className="group inline-flex items-center justify-between sm:w-[280px] h-12 border border-white/20 hover:border-white/50 rounded px-4 nav-compact" href="#what">
                    <span className="flex items-center gap-2">
                      <img src="/globe.svg" alt="github" className="w-4 h-4 opacity-80" /> ECOSYSTEM
                    </span>
                    <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                  </a>
                  <a className="group inline-flex items-center justify-between sm:w-[280px] h-12 border border-white/20 hover:border-white/50 rounded px-4 nav-compact" href="#faq">
                    <span className="flex items-center gap-2">
                      <img src="/window.svg" alt="blog" className="w-4 h-4 opacity-80" /> BLOG
                    </span>
                    <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="what" className="section border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl md:text-6xl font-semibold mb-10">With Flowryd</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Left visual grid panel */}
              <VisualGridPanel />
              {/* Three cards in the reference style */}
              <FeatureCard index="/ 01" title="Instant Matching" icon="ban" body="Your validator/app joins. FlowRyd shows 5 immediate opportunities aligned to your goals." />
              <FeatureCard index="/ 02" title="Immutable Blueprints" icon="lock" body="The execution map is versioned and reusable; the pattern won’t drift as it scales." />
              <FeatureCard index="/ 03" title="Permissionless Cadence" icon="link" body="Anyone can run the cadence and adopt the blueprint to generate more flows." />
            </div>
          </div>
        </section>


   

        {/* Lighter-style dashboard animation */}
        <section id="dashboard" className="section border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-2">
              <p className="kicker">How FlowRyd Works</p>
            </div>
            <p className="text-white/70 mb-8">The Canton coordination engine — matching, modeling, and automating every step of multi-party market creation.</p>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-white/70">
              {/* five info boxes */}
              <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="panel p-4">
                  <div className="nav-compact mb-1 text-white/60">1. Discover</div>
                  <div className="font-medium mb-1">Agent-Based Partner Matching</div>
                  <p className="text-white/80">Find the right partners instantly — powered by LLM agents.</p>
                </div>
                <div className="panel p-4">
                  <div className="nav-compact mb-1 text-white/60">2. Validate</div>
                  <div className="font-medium mb-1">Success Prediction & Revenue Modeling</div>
                  <p className="text-white/80">Predict success and revenue before you build.</p>
                </div>
                <div className="panel p-4">
                  <div className="nav-compact mb-1 text-white/60">3. Prototype</div>
                  <div className="font-medium mb-1">Flow Prototyping Workspace</div>
                  <p className="text-white/80">Prototype legal-ready flows in weeks.</p>
                </div>
                <div className="panel p-4">
                  <div className="nav-compact mb-1 text-white/60">4. Orchestrate</div>
                  <div className="font-medium mb-1">Automated GTM Cadences</div>
                  <p className="text-white/80">Automate outreach, proof, and tracking.</p>
                </div>
                <div className="panel p-4">
                  <div className="nav-compact mb-1 text-white/60">5. Reward</div>
                  <div className="font-medium mb-1">Blueprint Marketplace & Rewards</div>
                  <p className="text-white/80">Earn $CC rewards as your blueprints spread.</p>
                </div>
              </div>
              {/* timeline rail */}
              <div className="md:col-span-12">
                <div className="stage-rail" />
              </div>

              <div className="panel p-3 md:col-span-4 relative">
                <div className="nav-compact mb-2">INCOMING_TX <span className="text-white/50">— Signals in</span></div>
                <div className="cells">
                  {Array.from({ length: 200 }).map((_, i) => (
                    <div key={i} className="cell" style={{ animationDelay: `${(i%10)*0.1}s` }} />
                  ))}
                </div>
                <div className="tx-pulse" />
              </div>
              <div className="panel p-3 md:col-span-4">
                <div className="nav-compact mb-2">MATCHING ENGINE <span className="text-white/50">— Matching & validation</span></div>
                <div className="glow-bar-list">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="glow-bar" style={{ animationDelay: `${i*0.25}s` }} />
                  ))}
                </div>
              </div>
              <div className="panel p-3 md:col-span-4">
                <div className="nav-compact mb-2">CANTON</div>
                <div className="flicker py-10 diamond-pulse">
                  <div className="eth-diamond" />
                  <div className="text-center mt-4 text-white/60 nav-compact">— Flow deployed on Canton</div>
                </div>
              </div>
            </div>
            <p className="mt-8 text-white/70 text-center">Every connection becomes a flow. Every flow becomes a blueprint.</p>
          </div>
        </section>

   

        {/* GET STARTED replaces Develop with FlowRyd */}
        <section id="develop" className="section border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">Get Started Now.</h2>
            <p className="text-white/70 max-w-3xl mb-8">FlowRyd gives teams the acceleration layer to coordinate participants, reuse blueprints, and move from talks to shipped flows in weeks.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/onboarding" title="Join the Canton coordination layer and start matching flows instantly." className="group rounded border border-white/20 hover:border-white/50 bg-black/30 px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="nav-compact mb-1">Onboard as Node →</div>
                  <div className="text-white/60 text-sm">Ideal for builders, validators, or apps joining the FlowRyd network.</div>
                </div>
                <span className="transition-transform group-hover:translate-x-0.5">↗</span>
              </a>
              <a href="/contact" title="Book a session with our team to explore integration and early access." className="group rounded border border-white/20 hover:border-white/50 bg-black/30 px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="nav-compact mb-1">Schedule a Call →</div>
                  <div className="text-white/60 text-sm">Ideal for partners, enterprises, and BD contacts.</div>
                </div>
                <span className="transition-transform group-hover:translate-x-0.5">↗</span>
          </a>
        </div>
          </div>
        </section>

     

        {/* Social proof strip */}
        <section className="py-6 border-y border-white/10 bg-black/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 nav-compact text-white/70">
            Built for Canton participants: validators, featured apps, 25K+ parties.
          </div>
        </section>

        {/* Application form removed */}

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-white/80">
            <div>
              <div className="nav-compact mb-3">SOCIAL MEDIA</div>
              <ul className="space-y-2 text-white/60 nav-compact">
                <li><a href="#">Telegram</a></li>
                <li><a href="#">Discord</a></li>
                <li><a href="#">X (Twitter)</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div>
              <div className="nav-compact mb-3">RESOURCES</div>
              <ul className="space-y-2">
                <li className="text-2xl">Whitepaper</li>
                <li className="text-2xl">Documentation</li>
              </ul>
            </div>
            <div>
              <div className="nav-compact mb-3">FOR THE DEVELOPERS</div>
              <ul className="space-y-2 text-white/60 nav-compact">
                <li><a href="#">Developer Assistance</a></li>
                <li><a href="#">FlowRyd Scan</a></li>
                <li><a href="#">FlowRyd Github</a></li>
              </ul>
            </div>
            <div>
              <div className="nav-compact mb-3">ECOSYSTEM</div>
              <ul className="space-y-2 text-white/60 nav-compact">
                <li><a href="#">Application</a></li>
                <li><a href="#">Submission Form</a></li>
              </ul>
            </div>
            <div>
              <div className="nav-compact mb-3">CAREERS</div>
              <div className="text-green-400 nav-compact">[12] WE’RE HIRING</div>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-between text-white/60 nav-compact gap-4">
            <div className="flex items-center gap-6">
              <a href="#">Media Kit</a>
              <a href="#">Terms of Use</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
            </div>
            <div>© {new Date().getFullYear()} FlowRYD</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-6 rounded border border-white/10 bg-muted/30">
      <div className="text-3xl font-semibold">{value}</div>
      <div className="mt-1 text-white/60 nav-compact">{label}</div>
    </div>
  );
}

function PrincipleCard({ index, title, body }: { index: string; title: string; body: string }) {
  return (
    <div className="p-6 rounded border border-white/10 bg-muted/30">
      <div className="nav-compact text-white/70 mb-2">{index}</div>
      <h3 className="mb-2 font-medium">{title}</h3>
      <p className="text-white/70">{body}</p>
    </div>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="p-6 rounded border border-white/10 bg-muted/30">
      <h3 className="mb-2 font-medium">{title}</h3>
      <p className="text-white/70">{body}</p>
    </div>
  );
}

function QA({ q, a }: { q: string; a: string }) {
  return (
    <div>
      <div className="font-medium">{q}</div>
      <div className="text-white/70">{a}</div>
    </div>
  );
}

function VisualGridPanel() {
  return (
    <div className="relative h-[420px] md:h-[480px] rounded border border-white/10 overflow-hidden bg-black/40">
      {/* Logos mode for the hero-positioning grid */}
      <MatchingAnimation logos />
    </div>
  );
}

function FeatureCard({ index, title, body }: { index: string; title: string; body: string; icon?: string }) {
  return (
    <div className="relative p-6 rounded border border-white/10 bg-black/40 flex flex-col justify-between min-h-[420px]">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-6 h-6 rounded-full border border-white/30" />
          <div className="nav-compact text-white/60">{index}</div>
        </div>
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      <p className="text-white/60 text-sm mt-6">{body}</p>
    </div>
  );
}

function FlowDiagram() {
  return (
    <div className="relative h-96 w-full bg-black/50 border border-white/10 rounded-lg overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent 0px, transparent 23px, rgba(255,255,255,0.05) 23px, rgba(255,255,255,0.05) 24px),
            repeating-linear-gradient(90deg, transparent 0px, transparent 23px, rgba(255,255,255,0.05) 23px, rgba(255,255,255,0.05) 24px)
          `
        }} />
      </div>

      {/* Flow animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Left side - Source */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <div className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
            <div className="mt-2 text-center text-white/60 text-sm">Source Chain</div>
          </div>

          {/* Animated arrow */}
          <div className="absolute left-20 top-1/2 -translate-y-1/2 w-32 h-0.5 bg-gradient-to-r from-white/20 to-white/60">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-white/60 border-t-2 border-t-transparent border-b-2 border-b-transparent animate-pulse"></div>
          </div>

          {/* Center - Executor */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 border-2 border-white/40 rounded-full flex items-center justify-center bg-white/5">
              <div className="w-8 h-8 border border-white/60 rounded-full flex items-center justify-center">
                <div className="w-1 h-4 bg-white/60 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="mt-2 text-center text-white/60 text-sm">Off Chain<br/>Infrastructure</div>
          </div>

          {/* Right side - Destination */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <div className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
            <div className="mt-2 text-center text-white/60 text-sm">Destination Chain</div>
          </div>

          {/* Bottom security stack */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="flex space-x-2">
              <div className="w-8 h-6 border border-white/30 rounded bg-white/5"></div>
              <div className="w-8 h-6 border border-white/30 rounded bg-white/5"></div>
              <div className="w-8 h-6 border border-white/30 rounded bg-white/5"></div>
            </div>
            <div className="text-center text-white/60 text-xs mt-1">Security Stack (DVNs)</div>
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-ping"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${30 + Math.random() * 40}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

function FlowDiagramDetailed() {
  const rays = Array.from({ length: 12 });
  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-white/10 diagram-grid">
      {/* Columns */}
      <div className="grid grid-cols-12 gap-0">
        <div className="col-span-12 text-center nav-compact py-2 border-b border-white/10">OFF CHAIN INFRASTRUCTURE</div>
      </div>

      <div className="grid grid-cols-12 gap-0 text-white/70">
        {/* Left labels */}
        <div className="col-span-2 nav-compact p-3 border-r border-white/10">SOURCE CHAIN</div>
        <div className="col-span-8 p-3 anim-scan"></div>
        <div className="col-span-2 nav-compact p-3 border-l border-white/10 text-right">DESTINATION CHAIN</div>
      </div>

      {/* Middle rows */}
      <div className="grid grid-cols-12 gap-0 text-white/80">
        <div className="col-span-2 nav-compact p-3 border-t border-white/10">OAPP</div>
        <div className="col-span-8 border-t border-white/10"></div>
        <div className="col-span-2 nav-compact p-3 border-t border-white/10 text-right">OAPP</div>

        <div className="col-span-2 nav-compact p-3 border-t border-white/10">ENDPOINT</div>
        <div className="col-span-8 relative border-t border-white/10">
          {/* executor */}
          <div className="absolute right-[28%] top-6 border border-white/20 rounded p-2">
            <div className="nav-compact text-center mb-2">EXECUTOR</div>
            <div className="executor-burst mx-auto relative">
              {rays.map((_, i) => (
                <span key={i} style={{ transform: `translate(-50%, -50%) rotate(${(i * 360) / rays.length}deg)` }} />
              ))}
            </div>
          </div>
          {/* Animated path connecting left to right through executor */}
          <svg className="absolute left-0 right-0 top-0 h-40" viewBox="0 0 1000 160" preserveAspectRatio="none">
            <path className="draw-path" d="M 40 80 C 200 80, 400 20, 560 80 S 880 140, 960 80" />
          </svg>
        </div>
        <div className="col-span-2 nav-compact p-3 border-t border-white/10 text-right">ENDPOINT</div>

        <div className="col-span-2 nav-compact p-3 border-t border-white/10">MESSAGE LIB</div>
        <div className="col-span-8 border-t border-white/10"></div>
        <div className="col-span-2 nav-compact p-3 border-t border-white/10 text-right">MESSAGE LIB</div>
      </div>

      {/* Security stack */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto my-6 w-[80%] border border-white/20 p-3 rounded">
          <div className="nav-compact text-center mb-3">SECURITY STACK (DVNs)</div>
          <div className="grid grid-cols-4 gap-4">
            {[0, 1, 2, 3].map((idx) => (
              <div key={idx} className="relative aspect-square rounded-full border-2 border-white/50 flex items-center justify-center">
                <div className={`absolute inset-2 rounded-full border-2 ${idx === 1 ? 'border-green-400/70' : 'border-white/30'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
