import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-background/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="FlowRyd Home">
          <img src="/flowrydlogo.svg" alt="FlowRyd" className="h-6 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-6 nav-compact">
          <a href="#problem" className="text-white/70 hover:text-white">Problem</a>
          <a href="#what" className="text-white/70 hover:text-white">With FlowRyd</a>
          <a href="#dashboard" className="text-white/70 hover:text-white">How it Works</a>
          <a href="#diagram" className="text-white/70 hover:text-white">Flow</a>
        </nav>
        <a href="/media-kit" className="nav-compact btn-outline px-4 py-2 rounded">Media Kit</a>
      </div>
    </header>
  );
}


