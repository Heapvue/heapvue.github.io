import React from "react";

function Terms() {
  return (
    <>
      <div className="container py-5 docs">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="display-4 mb-4">Terms of Service</h1>
            <p className="text-muted">Effective Date: 1 Jan 2025</p>

            <h3 id="acceptence">Acceptance of Terms</h3>
            <p>
              By accessing and using our website (heapvue.com), you agree to
              comply with and be bound by these Terms and Conditions. If you do
              not agree with these terms, you are advised not to use the Website
              or any related services.
            </p>

            <h3 id="how-use">Use of the Website</h3>
            <ul>
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
                <ul>
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

            <h3 id="intellectual">Intellectual Property</h3>
            <ul>
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

            <h3 id="privacy">Privacy Policy</h3>
            <p>
              Your use of the Website is also governed by our Privacy Policy. By
              using the Website, you consent to the collection and use of your
              information as described in our Privacy Policy.
            </p>

            <h3 id="third">Third-Party Content and Links</h3>
            <p>
              The Website may contain links to third-party websites. Heapvue
              does not endorse or take responsibility for the content, policies,
              or practices of these websites. You access third-party websites at
              your own risk.
            </p>

            <h3 id="disclaimer">Disclaimer of Warranties</h3>
            <ul>
              <li>
                The Website and its content are provided "as is" and "as
                available" without any warranties, express or implied, including
                but not limited to warranties of merchantability, fitness for a
                particular purpose, or non-infringement.
              </li>
              <li>
                Heapvue does not guarantee the accuracy, completeness, or
                reliability of the content or functionality of the Website.
              </li>
            </ul>

            <h3 id="limitation">Limitation of Liability</h3>
            <p>
              Heapvue shall not be held liable for any direct, indirect,
              incidental, or consequential damages arising from your use of the
              Website or inability to use the Website, including any errors,
              interruptions, or delays.
            </p>

            <h3 id="modifications">Modifications to Terms</h3>
            <p>
              Heapvue reserves the right to modify these Terms and Conditions at
              any time. Any changes will be effective immediately upon posting
              the updated Terms on the Website. It is your responsibility to
              review the Terms periodically. Continued use of the Website
              signifies your acceptance of the updated Terms.
            </p>

            <h3 id="security">Security and Data</h3>
            <p>
              Heapvue stores data collected through the Website on secure
              servers. While we implement reasonable safeguards to protect your
              information, no system is entirely immune to breaches. Users are
              advised to exercise caution when submitting personal data online.
            </p>

            <h3 id="limited-license">Limited License</h3>
            <p>
              Heapvue strictly prohibits the uploading, transmission, or
              distribution of malicious code, hacking materials, or any harmful
              content. Violators will be subject to immediate termination of
              access and legal action if necessary.
            </p>

            <h3 id="contact">Contact Us</h3>
            <p>
              For any questions or concerns about these Terms and Conditions,
              you can contact us at:
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
                      <a href="#acceptence">Acceptance of Terms</a>
                    </li>
                    <li>
                      <a href="#how-use">Use of the Website</a>
                    </li>
                    <li>
                      <a href="#intellectual">Intellectual Property</a>
                    </li>
                    <li>
                      <a href="#privacy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#third">Third-Party Content and Links</a>
                    </li>
                    <li>
                      <a href="#disclaimer"> Disclaimer of Warranties</a>
                    </li>
                    <li>
                      <a href="#limitation"> Limitation of Liability</a>
                    </li>
                    <li>
                      <a href="#modifications">Modifications to Terms</a>
                    </li>
                    <li>
                      <a href="#security">Security and Data</a>
                    </li>
                    <li>
                      <a href="#limited-license">Limited License</a>
                    </li>
                    <li>
                      <a href="#contact">Contact Information</a>
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
}

export default Terms;
