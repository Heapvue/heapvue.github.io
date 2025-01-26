import { Metadata } from 'next'

const PrivacyPolicy = () => {
  return (
    <>
      <div className="container py-5 docs">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="display-4 mb-4">Privacy Policy</h1>
            <p className="text-muted">Effective Date: 1 Jan 2025</p>
            <p>
              Heapvue Technologies ("we," "our," or "us") values your privacy
              and is committed to safeguarding your personal information. This
              Privacy Policy explains how we collect, use, disclose, and protect
              the information you provide when using our website or services. By
              accessing our website or utilizing our services, you agree to the
              terms outlined in this Privacy Policy.
            </p>

            <h3 id="information">Information We Collect</h3>
            <p>
              We may collect various types of information to deliver and enhance
              our services:
            </p>
            <ul>
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

            <h3 id="how-use">How We Use Your Information</h3>
            <p>We use the collected information for the following purposes:</p>
            <ul>
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

            <h3 id="sharing">Sharing Your Information</h3>
            <p>We may share your information under these circumstances:</p>
            <ul>
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

            <h3 id="security">Data Security</h3>
            <p>
              We implement industry-standard security measures to protect your
              personal information. However, no online data transmission can be
              guaranteed secure. While we strive to protect your data, providing
              information online is at your own risk.
            </p>

            <h3 id="cookies">Cookies and Tracking Technologies</h3>
            <p>
              We use cookies, web beacons, and other technologies to enhance
              your browsing experience. You can manage cookie preferences in
              your browser settings, but some site features may not function
              properly if you do so.
            </p>

            <h3 id="third-party">Third-Party Websites</h3>
            <p>
              Our website may include links to external websites or services. We
              are not responsible for the privacy practices or content of these
              third-party entities.
            </p>

            <h3 id="children">Children's Privacy</h3>
            <p>
              Our services are not intended for children under 18 years of age.
              If you believe we have collected data from a child, please contact
              us to delete this information.
            </p>

            <h3>Changes to This Policy</h3>
            <p>
              We reserve the right to update this Privacy Policy as necessary.
              Changes will be reflected in the "Effective Date" above. Continued
              use of our website or services constitutes acceptance of the
              revised policy.
            </p>

            <h3 id="contact">Contact Us</h3>
            <p>
              For questions or concerns regarding this Privacy Policy, contact
              us at:
            </p>
            <p>
              <strong>Heapvue Technologies</strong>
              <br />
              Email:{" "}
              <a href="mailto:contact@heapvue.com">contact@heapvue.com</a>
            </p>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="sticky-top" style={{ top: "5rem" }}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Table of contents</h5>
                  <ul>
                    <li>
                      <a href="#information">Information We Collect</a>
                    </li>
                    <li>
                      <a href="#how-use">How We Use Your Information</a>
                    </li>
                    <li>
                      <a href="#sharing">Sharing Your Information</a>
                    </li>
                    <li>
                      <a href="#security">Data Security</a>
                    </li>
                    <li>
                      <a href="#cookies">Cookies and Tracking Technologies</a>
                    </li>
                    <li>
                      <a href="#third-party">Third-Party Websites</a>
                    </li>
                    <li>
                      <a href="#children">Children's Privacy</a>
                    </li>
                    <li>
                      <a href="#changes">Changes to This Policy</a>
                    </li>
                    <li>
                      <a href="#contact">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;

export const metadata = {
  title: 'Privacy Policy | Data Protection Information | Heapvue',
  description: 'Learn about Heapvue\'s commitment to protecting your privacy. Understand how we collect, use, and safeguard your personal information.',
  keywords: 'privacy policy, data protection, personal information, privacy terms, data security, GDPR compliance',
  openGraph: {
    title: 'Privacy Policy | Data Protection Information | Heapvue',
    description: 'Learn about Heapvue\'s commitment to protecting your privacy. Understand how we collect, use, and safeguard your personal information.',
    images: '/images/legal.jpg',
  }
};
