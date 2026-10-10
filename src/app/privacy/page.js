import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Heapvue',
  description: 'Learn how Heapvue collects, uses, and protects your personal information and corporate data in compliance with DPDP, GDPR, and global data privacy standards.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-5">
      <div className="container" style={{ maxWidth: '860px', paddingBottom: '60px' }}>
        <div className="mb-5">
          <span 
            className="d-inline-block px-3 py-1 rounded-pill mb-3 fw-semibold text-primary"
            style={{ backgroundColor: '#EFF6FF', fontSize: '0.85rem' }}
          >
            Legal &amp; Compliance
          </span>
          <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: '#0F172A' }}>
            Privacy Policy
          </h1>
          <p className="text-muted" style={{ fontSize: '0.95rem' }}>
            Last updated: October 2026
          </p>
        </div>

        <div className="content-body" style={{ color: '#334155', lineHeight: '1.75', fontSize: '1rem' }}>
          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>1. Introduction</h2>
            <p>
              Heapvue (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting the privacy and confidentiality of individuals who interact with our website, services, and proprietary software products. This Privacy Policy details our practices concerning data collection, processing, and protection in accordance with applicable data protection laws, including the Digital Personal Data Protection Act (DPDP), General Data Protection Regulation (GDPR), and related regulations.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>2. Information We Collect</h2>
            <p>We may collect personal and organizational details when you interact with our website, request a consultation, or utilize our services, including:</p>
            <ul className="ps-3 mb-3">
              <li><strong>Contact Information:</strong> Name, professional work email address, telephone number, job title, and organization name.</li>
              <li><strong>Project Inquiries:</strong> Technical requirements, project briefs, estimated budgets, and delivery timelines submitted through our contact and consultation forms.</li>
              <li><strong>Technical &amp; Usage Data:</strong> IP address, browser type, device information, operating system, pages visited, and interaction timestamps.</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>3. How We Use Your Data</h2>
            <p>We process your data for clear, legitimate business purposes:</p>
            <ul className="ps-3 mb-3">
              <li>To evaluate project scopes, respond to technical inquiries, and provide consultative proposals.</li>
              <li>To deliver, maintain, and enhance our custom engineering solutions and proprietary software products.</li>
              <li>To ensure information security, detect potential fraudulent activity, and comply with regulatory mandates.</li>
              <li>To communicate service updates, technical notices, and relevant engineering insights (with clear opt-out options).</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>4. Data Security &amp; Storage</h2>
            <p>
              We implement industry-standard technical and organizational security measures, including transport-layer encryption (TLS), restricted role-based data access, and continuous monitoring to safeguard personal and commercial data against unauthorized access, loss, or alteration.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>5. Third-Party Sharing</h2>
            <p>
              We do not sell, rent, or trade your personal information. We may share necessary data with trusted cloud infrastructure providers and verified enterprise service partners strictly bound by contractual data protection agreements.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>6. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you have the right to request access to, correction of, or deletion of your personal data held by Heapvue. You may also object to or restrict certain processing activities.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>7. Contact Our Privacy Team</h2>
            <p>
              For any questions regarding this policy or to exercise your privacy rights, please reach out directly to:
            </p>
            <div className="p-3 rounded-3" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
              <p className="mb-1"><strong>Heapvue Privacy &amp; Compliance Office</strong></p>
              <p className="mb-1">Email: <a href="mailto:contact@heapvue.com" className="text-primary text-decoration-none">contact@heapvue.com</a></p>
              <p className="mb-0">Address: 39/2475-B1, SUITE C54 LR Towers, SJRRA 104 S J RD, Palarivattom, Ernakulam, Kerala 682025, India</p>
            </div>
          </section>
        </div>

        <div className="pt-4 border-top mt-5 d-flex gap-3">
          <Link href="/" className="btn btn-outline-secondary btn-sm">
            &larr; Back to Home
          </Link>
          <Link href="/terms" className="btn btn-outline-primary btn-sm">
            View Terms of Service &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
