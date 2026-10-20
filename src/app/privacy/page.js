export const metadata = {
  title: 'Privacy Policy | Heapvue',
  description: 'Learn how Heapvue collects, uses, and protects your personal information and corporate data.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-5">
      <div className="container" style={{ maxWidth: '860px', paddingBottom: '60px' }}>
        <div className="mb-5">
          <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: '#0F172A' }}>
            Privacy Policy
          </h1>
          <p className="text-muted" style={{ fontSize: '0.95rem' }}>
            Updated at: October 20, 2026
          </p>
        </div>

        <div className="content-body" style={{ color: '#334155', lineHeight: '1.75', fontSize: '1rem' }}>
          <p className="mb-4">
            Heapvue (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) values your privacy
            and is committed to safeguarding your personal information. This
            Privacy Policy explains how we collect, use, disclose, and protect
            the information you provide when using our website or services. By
            accessing our website or utilizing our services, you agree to the
            terms outlined in this Privacy Policy.
          </p>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>1. Information We Collect</h2>
            <p>
              We may collect various types of information to deliver and enhance
              our services:
            </p>
            <ul className="ps-3 mb-3">
              <li>
                <strong>Personal Information:</strong> Your name, email address,
                phone number, and other contact details, collected when you
                interact with our website or services.
              </li>
              <li>
                <strong>Account Information:</strong> Information like your
                username, password, and preferences, if you create an account
                with us.
              </li>
              <li>
                <strong>Usage Data:</strong> Automatically collected details
                such as IP addresses, device information, browser type, and
                pages visited to analyze website performance and user
                interaction.
              </li>
              <li>
                <strong>Third-Party Data:</strong> Information shared with us by
                trusted third parties or through social media integrations you
                authorize.
              </li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>2. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="ps-3 mb-3">
              <li>
                <strong>To Provide Services:</strong> Process orders, respond to
                inquiries, and deliver our products or services.
              </li>
              <li>
                <strong>To Improve Experiences:</strong> Use analytics to
                enhance website functionality, develop new features, and
                personalize content.
              </li>
              <li>
                <strong>For Communication:</strong> Share updates, newsletters,
                and promotional offers. You may opt out of marketing
                communications at any time.
              </li>
              <li>
                <strong>Legal Compliance:</strong> Fulfill obligations under
                applicable laws or respond to lawful requests from authorities.
              </li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>3. Sharing Your Information</h2>
            <p>We may share your information under these circumstances:</p>
            <ul className="ps-3 mb-3">
              <li>
                <strong>Service Providers:</strong> With third parties
                performing services such as payment processing, email delivery,
                or website hosting.
              </li>
              <li>
                <strong>Legal Requirements:</strong> To comply with laws,
                enforce our policies, or protect the rights and safety of
                others.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, or sale of our assets, your information may be
                transferred to the successor entity.
              </li>
              <li>
                <strong>Marketing Purposes:</strong> As permitted by law, share
                aggregated or anonymized data with partners for marketing and
                business analysis.
              </li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your
              personal information. However, no online data transmission can be
              guaranteed secure. While we strive to protect your data, providing
              information online is at your own risk.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>5. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies, web beacons, and other technologies to enhance
              your browsing experience. You can manage cookie preferences in
              your browser settings, but some site features may not function
              properly if you do so.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>6. Third-Party Websites</h2>
            <p>
              Our website may include links to external websites or services. We
              are not responsible for the privacy practices or content of these
              third-party entities.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>7. Children&apos;s Privacy</h2>
            <p>
              Our services are not intended for children under 18 years of age.
              If you believe we have collected data from a child, please contact
              us to delete this information.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>8. Changes to This Policy</h2>
            <p>
              We reserve the right to update this Privacy Policy as necessary.
              Changes will be reflected in the updated date above. Continued
              use of our website or services constitutes acceptance of the
              revised policy.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h4 fw-bold mb-3" style={{ color: '#0F172A' }}>9. Contact Us</h2>
            <p>
              For questions or concerns regarding this Privacy Policy, contact
              us at:
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
