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
            <a href="#positioning" className="text-white/70 hover:text-white">Developers</a>
            <a href="#products" className="text-white/70 hover:text-white">Products</a>
            <a href="#ecosystem" className="text-white/70 hover:text-white">Ecosystem</a>
            <a href="#resources" className="text-white/70 hover:text-white">Resources</a>
            <a href="#scan" className="text-white/70 hover:text-white">Scan</a>
          </nav>
          <button className="nav-compact btn-outline px-4 py-2 rounded">Developer Assistance</button>
        </div>
      </header>

      {/* HERO (LayerZero-like structure) */}
      <section className="lzr-background pt-24 md:pt-28 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="space-y-10">
            <h1 className="headline-xl tracking-tight">
              <span className="block text-[56px] md:text-[96px] lg:text-[120px]">Build</span>
              <span className="block text-[56px] md:text-[96px] lg:text-[120px] text-[#b49bff]">Flows</span>
              <span className="block text-[56px] md:text-[96px] lg:text-[120px]">Omnichain</span>
            </h1>
            <div className="space-y-2">
              <div className="kicker">Flow. Fast. Together.</div>
              <div className="text-xl md:text-2xl text-white/85">From ‘let’s connect’ to ‘we shipped’ in 6 weeks.</div>
              <p className="text-white/70 max-w-3xl">The acceleration layer of Canton, connecting participants, blueprints, and capital to turn coordination into real market activity.</p>
            </div>
            <div>
              <a href="#apply" className="group inline-flex items-center justify-between w-[320px] md:w-[420px] h-12 border border-white/30 hover:border-white/60 rounded px-4 nav-compact">
                <span>START BUILDING</span>
                <span className="transition-transform group-hover:translate-x-0.5">↗</span>
              </a>
            </div>
            <p className="nav-compact text-white/50">/// one protocol. any blockchain.</p>
          </div>
        </div>
        {/* credibility bar under CTA */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
          <p className="text-sm text-white/60 max-w-4xl">Canton today: 600+ validators, 35+ featured apps, 25,000+ parties. Infrastructure is here. Flows aren’t. We fix that.</p>
        </div>
      </section>

      {/* SECTIONS */}
      <main>
        <section id="problem" className="section border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="kicker mb-4">The Problem</p>
            <div className="space-y-4 max-w-4xl text-white/80">
              <p>You already know your use case. What you don’t know is who you need to make it work.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Discovery is broken: partners are scattered across LinkedIn, Slack, Discord, Telegram.</li>
                <li>Collaboration is slow: multi-party flows → endless meetings, months of legal.</li>
                <li>No blueprint: every on-chain flow gets rebuilt from scratch. Growth stays linear.</li>
              </ul>
              <p className="text-white/60">Bottom line: Technology works. Participation is growing. But coordination doesn’t scale—and that’s how great networks die waiting.</p>
            </div>
          </div>
        </section>

        <section id="what" className="section border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="kicker mb-4">What FlowRyd Does</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">Match → Blueprint → Orchestrate → Multiply</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card title="Instant Matching" body="Your validator/app joins. FlowRyd shows 5 immediate opportunities aligned to your goals." />
              <Card title="Proven Blueprint" body="We hand you the execution map: who, what, in what order, with pre-modeled success patterns." />
              <Card title="Automated Cadence" body="Outreach, intros, prototype sprints, and next-best nudges—run as a go-to-market cadence." />
              <Card title="Compounding Flows" body="Every successful connection becomes a reusable blueprint. Every blueprint unlocks more flows." />
            </div>
          </div>
        </section>

        <section id="how" className="section border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="kicker mb-4">How It Works</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card title="Agent-Based Partner Matching" body="Real-time matching via LLM agents and scenario-based flow modeling, so you stop guessing and start building." />
              <Card title="Success Prediction & Revenue Modeling" body="Know the likelihood of success before you waste a quarter in meetings." />
              <Card title="Flow Prototyping Workspace" body="Spin up a test flow in weeks, not quarters. Legal frameworks included." />
              <Card title="Automated GTM Cadences" body="Intros, follow-ups, and proof points run on rails. You get momentum without micromanaging." />
              <Card title="Blueprint Marketplace + Rewards" body="Publish blueprints. Earn $CC royalties as others adopt them. Activity Markers reward real coordination." />
            </div>
          </div>
        </section>

        <section id="why" className="section border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="kicker mb-4">Why Now</p>
            <p className="text-white/70 max-w-4xl">Canton has world-class infrastructure but capital markets aren’t made of racks and APIs—they’re made of flows. The last pilot proved privacy on a public network works—but took 18 months to push one 15-party flow. At that pace, growth stalls. FlowRyd compresses that to ~6 weeks.</p>
          </div>
        </section>

        <section id="offer" className="section border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="kicker mb-4">What You Get</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">The FlowRyd MVP Access Pass</h2>
            <ul className="list-disc pl-6 space-y-2 max-w-3xl text-white/80">
              <li>Your First 5 Qualified Opportunities in Canton</li>
              <li>A Done-For-You Flow Blueprint (partners, sequence, metrics)</li>
              <li>Automated GTM Cadence (intros, follow-ups, prototype sprints)</li>
              <li>Activity Markers + $CC blueprint royalties as your flows get adopted</li>
              <li>Adoption tracking + media hub for sharing results</li>
            </ul>
            <div className="mt-6">
              <a href="#apply" className="btn-outline inline-flex items-center justify-center rounded px-5 py-3 nav-compact">Apply for MVP Access</a>
              <p className="mt-3 text-white/60 text-sm max-w-3xl">We’re accepting a limited founding cohort to keep signal high and compounding effects real. When it fills, doors close until the next horizon.</p>
            </div>
          </div>
        </section>

        <section id="avatars" className="section border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="kicker mb-4">Who It’s For</p>
            <ul className="list-disc pl-6 space-y-2 max-w-3xl text-white/80">
              <li>Validators who want real transaction flows, not vanity stats.</li>
              <li>Featured Apps ready to become default partners in repeatable blueprints.</li>
              <li>Ecosystem Leads tasked with accelerating sustainable network activity.</li>
            </ul>
          </div>
        </section>

        <section id="objections" className="section border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="kicker mb-4">Objections → Reframes</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card title="We can network ourselves." body="If that worked, you wouldn’t still be scheduling discovery calls. FlowRyd replaces guesswork with modeled matches and proven sequences." />
              <Card title="Legal slows everything." body="Our flow blueprints include frameworks designed for repeatable adoption, not bespoke one-offs." />
              <Card title="We need proof before we commit." body="That’s the point: prototyping in weeks with clear success metrics and adoption tracking." />
            </div>
          </div>
        </section>

        <section id="risk" className="section border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="kicker mb-4">Risk Reversal</p>
            <p className="text-white/80 max-w-3xl">Try the Blueprint Risk-Free: If we can’t surface 5 qualified opportunities within 14 days of onboarding, you don’t continue. Simple.</p>
          </div>
        </section>

        {/* Social proof strip */}
        <section className="py-6 border-y border-white/10 bg-black/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 nav-compact text-white/70">
            Built for Canton participants: validators, featured apps, 25K+ parties.
          </div>
        </section>

        {/* Application form */}
        <section id="apply" className="section">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold mb-4">Apply for MVP Access</h3>
            <form className="grid grid-cols-1 gap-4">
              <input className="bg-black/50 border border-white/10 rounded px-3 py-2" placeholder="Name" aria-label="Name" />
              <input className="bg-black/50 border border-white/10 rounded px-3 py-2" placeholder="Work Email" type="email" aria-label="Work Email" />
              <input className="bg-black/50 border border-white/10 rounded px-3 py-2" placeholder="Role" aria-label="Role" />
              <input className="bg-black/50 border border-white/10 rounded px-3 py-2" placeholder="Canton Project" aria-label="Canton Project" />
              <select className="bg-black/50 border border-white/10 rounded px-3 py-2" aria-label="Biggest Current Blocker">
                <option>Discovery is fragmented</option>
                <option>Coordination/legal delays</option>
                <option>No repeatable blueprint</option>
                <option>Need proof before scaling</option>
              </select>
              <button type="submit" className="btn-outline rounded px-5 py-3 nav-compact">Get My First 5 Opportunities</button>
              <p className="text-white/60 text-sm">We review each application to keep quality high. If accepted, we’ll schedule your blueprint session within 72 hours.</p>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="kicker mb-4">FAQ</p>
            <div className="space-y-4 max-w-4xl text-white/80">
              <QA q="Are you another marketplace?" a="No. We’re the acceleration layer that coordinates who-needs-who and how they connect—then automates execution." />
              <QA q="What if our use case is niche?" a="That’s where modeling helps. We map capabilities, needs, patterns, and trust to surface non-obvious matches." />
              <QA q="How do rewards work?" a="Publish a blueprint. When others adopt it, royalties flow in $CC. Activity Markers recognize genuine coordination." />
              <QA q="Who do we talk to?" a="Liz Towler — +44 7549-024-609 • liz@towleradvisory.com" />
          </div>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center text-white/60 nav-compact">
        © {new Date().getFullYear()} FlowRYD
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
