import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Heapvue',
  description: 'Review the Terms of Service governing the use of Heapvue websites, enterprise software engineering services, consulting, and proprietary software products.',
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-muted" style={{ fontSize: '0.95rem' }}>
            Last updated: October 2026
          </p>
        </div>

        <div className="content-body" style={{ color: '#334155', lineHeight: '1.75', fontSize: '1rem' }}>
          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>1. Acceptance of Terms</h2>
            <p>
              By accessing the Heapvue website (&ldquo;Site&rdquo;) or engaging with our technology services, digital platforms, and software products, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>2. Services &amp; Solutions</h2>
            <p>
              Heapvue delivers enterprise software engineering, cloud infrastructure architecture, artificial intelligence integration, and proprietary business software platforms. All engagements, master service agreements (MSAs), statements of work (SOWs), and service level agreements (SLAs) are governed by specific contractual agreements executed between Heapvue and the respective client.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>3. Intellectual Property Rights</h2>
            <p>
              All materials on this site, including text, graphics, logos, icons, diagrams, and software code, are the proprietary property of Heapvue or licensed to us. Custom client work deliverables are owned according to the explicit intellectual property terms defined in the applicable client Master Services Agreement.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>4. Acceptable Use</h2>
            <p>
              You agree not to use the Site or any of our systems for any unlawful purpose, to transmit malicious software, to attempt unauthorized access to our infrastructure, or to reverse engineer any proprietary algorithms or architectures provided by Heapvue without explicit authorization.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>5. Limitation of Liability</h2>
            <p>
              In no event shall Heapvue or its directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or inability to access our website or public materials.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>6. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, with jurisdiction in Ernakulam/Kochi, Kerala, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>7. Inquiries</h2>
            <p>
              If you have any questions concerning these Terms, please contact our legal counsel team at:
            </p>
            <div className="p-3 rounded-3" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
              <p className="mb-1"><strong>Heapvue Legal Department</strong></p>
              <p className="mb-1">Email: <a href="mailto:contact@heapvue.com" className="text-primary text-decoration-none">contact@heapvue.com</a></p>
              <p className="mb-0">Address: 39/2475-B1, SUITE C54 LR Towers, SJRRA 104 S J RD, Palarivattom, Ernakulam, Kerala 682025, India</p>
            </div>
          </section>
        </div>

        <div className="pt-4 border-top mt-5 d-flex gap-3">
          <Link href="/" className="btn btn-outline-secondary btn-sm">
            &larr; Back to Home
          </Link>
          <Link href="/privacy" className="btn btn-outline-primary btn-sm">
            View Privacy Policy &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
