export const metadata = {
  title: 'Terms of Service | Heapvue',
  description: 'Review the Terms of Service governing the use of Heapvue websites, enterprise software engineering services, consulting, and proprietary software products.',
};

export default function TermsPage() {
  return (
    <div className="bg-white py-5">
      <div className="container" style={{ maxWidth: '860px', paddingBottom: '60px' }}>
        <div className="mb-5">
          <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: '#0F172A' }}>
            Terms of Service
          </h1>
          <p className="text-muted" style={{ fontSize: '0.95rem' }}>
            Updated at: October 20, 2026
          </p>
        </div>

        <div className="content-body" style={{ color: '#334155', lineHeight: '1.75', fontSize: '1rem' }}>
          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>1. Acceptance of Terms</h2>
            <p>
              By accessing and using our website (heapvue.com), you agree to
              comply with and be bound by these Terms and Conditions. If you do
              not agree with these terms, you are advised not to use the Website
              or any related services.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>2. Use of the Website</h2>
            <ul className="ps-3 mb-3">
              <li>
                <strong>License:</strong> Heapvue grants you a limited,
                non-exclusive, and revocable license to access and use the
                Website for informational and personal purposes only.
              </li>
              <li>
                <strong>To Improve Experiences:</strong> Use analytics to
                enhance website functionality, develop new features, and
                personalize content.
              </li>
              <li>
                <strong>Prohibited Activities:</strong> While using the Website,
                you agree not to:
                <ul className="ps-3 mt-2 mb-2">
                  <li>Violate any applicable laws or regulations.</li>
                  <li>
                    Attempt unauthorized access to the Website, its servers, or
                    related systems.
                  </li>
                  <li>Use the Website for illegal or unethical purposes.</li>
                  <li>
                    Upload or transmit harmful code, viruses, or malicious
                    software.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>3. Intellectual Property</h2>
            <ul className="ps-3 mb-3">
              <li>
                <strong>Copyright:</strong> All content on the Website,
                including text, graphics, logos, and software, is the property
                of Heapvue and is protected under copyright laws.
              </li>
              <li>
                <strong>Trademarks:</strong> All trademarks, logos, and service
                marks displayed on the Website are the property of Heapvue or
                their respective owners. Unauthorized use is strictly
                prohibited.
              </li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>4. Privacy Policy</h2>
            <p>
              Your use of the Website is also governed by our Privacy Policy. By
              using the Website, you consent to the collection and use of your
              information as described in our Privacy Policy.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>5. Third-Party Content and Links</h2>
            <p>
              The Website may contain links to third-party websites. Heapvue
              does not endorse or take responsibility for the content, policies,
              or practices of these websites. You access third-party websites at
              your own risk.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>6. Disclaimer of Warranties</h2>
            <ul className="ps-3 mb-3">
              <li>
                The Website and its content are provided &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo; without any warranties, express or implied, including
                but not limited to warranties of merchantability, fitness for a
                particular purpose, or non-infringement.
              </li>
              <li>
                Heapvue does not guarantee the accuracy, completeness, or
                reliability of the content or functionality of the Website.
              </li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>7. Limitation of Liability</h2>
            <p>
              Heapvue shall not be held liable for any direct, indirect,
              incidental, or consequential damages arising from your use of the
              Website or inability to use the Website, including any errors,
              interruptions, or delays.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>8. Modifications to Terms</h2>
            <p>
              Heapvue reserves the right to modify these Terms and Conditions at
              any time. Any changes will be effective immediately upon posting
              the updated Terms on the Website. It is your responsibility to
              review the Terms periodically. Continued use of the Website
              signifies your acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>9. Security and Data</h2>
            <p>
              Heapvue stores data collected through the Website on secure
              servers. While we implement reasonable safeguards to protect your
              information, no system is entirely immune to breaches. Users are
              advised to exercise caution when submitting personal data online.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>10. Limited License</h2>
            <p>
              Heapvue strictly prohibits the uploading, transmission, or
              distribution of malicious code, hacking materials, or any harmful
              content. Violators will be subject to immediate termination of
              access and legal action if necessary.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>11. Contact Us</h2>
            <p>
              For any questions or concerns about these Terms and Conditions,
              you can contact us at:
            </p>
            <p className="mb-0">
              <strong>Heapvuedigital Innovations Pvt. Ltd.</strong>
              <br />
              Email:{' '}
              <a href="mailto:contact@heapvue.com" className="text-primary text-decoration-none">contact@heapvue.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
