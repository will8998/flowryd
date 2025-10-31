export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 text-white/80">
      <h1 className="text-4xl font-semibold mb-6 text-white">Privacy Policy</h1>
      <p className="mb-4">Towler Advisory (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard personal information when you interact with our products, websites, and services (the &quot;Services&quot;).</p>

      <h2 className="text-2xl font-medium mt-8 mb-3 text-white">1. Information We Collect</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Account information (name, email, organization, role)</li>
        <li>Usage data and device information</li>
        <li>Logs, diagnostics, and metadata required to operate the Services</li>
        <li>Communications you send to us (support requests, feedback)</li>
      </ul>

      <h2 className="text-2xl font-medium mt-8 mb-3 text-white">2. How We Use Information</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Provide, maintain, and improve the Services</li>
        <li>Personalize experiences and deliver relevant content</li>
        <li>Communicate about updates, security notices, and support</li>
        <li>Comply with legal obligations and enforce terms</li>
      </ul>

      <h2 className="text-2xl font-medium mt-8 mb-3 text-white">3. Sharing and Disclosure</h2>
      <p className="mb-4">We may share information with cloud providers, analytics, payment, or support vendors who process data on our behalf under contract. We may disclose information to comply with law, protect our rights, or with your consent.</p>

      <h2 className="text-2xl font-medium mt-8 mb-3 text-white">4. Data Retention</h2>
      <p className="mb-4">We retain personal information for as long as necessary to fulfill the purposes outlined in this policy unless a longer retention period is required by law.</p>

      <h2 className="text-2xl font-medium mt-8 mb-3 text-white">5. Security</h2>
      <p className="mb-4">We employ administrative, technical, and organizational measures designed to protect information. No method of transmission or storage is perfectly secure.</p>

      <h2 className="text-2xl font-medium mt-8 mb-3 text-white">6. Your Rights</h2>
      <p className="mb-4">Depending on your location, you may have rights to access, correct, delete, or restrict use of your personal information. Contact us to exercise these rights.</p>

      <h2 className="text-2xl font-medium mt-8 mb-3 text-white">7. International Transfers</h2>
      <p className="mb-4">Information may be transferred to and processed in countries other than your own. We take steps to ensure appropriate safeguards are in place.</p>

      <h2 className="text-2xl font-medium mt-8 mb-3 text-white">8. Children</h2>
      <p className="mb-4">Our Services are not directed to children under 16. We do not knowingly collect personal information from children.</p>

      <h2 className="text-2xl font-medium mt-8 mb-3 text-white">9. Changes</h2>
      <p className="mb-8">We may update this policy from time to time. The updated version will be indicated by a revised date and is effective when posted.</p>

      <div className="text-white/60 nav-compact">© {new Date().getFullYear()} Towler Advisory</div>
    </main>
  );
}


