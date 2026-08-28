import "../styles/privacy-policy.css";
import SEO from "../components/SEO";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <SEO
        title="Privacy Policy | Amy Plante Realtor"
        description="Learn how Amy Plante Realtor handles information collected through this website and its connected services."
        canonicalPath="/privacy-policy"
        robots="noindex, follow"
      />

      <main className="privacy-page">
        <div className="container privacy-container">
          <header className="privacy-header">
            <span className="privacy-eyebrow">Website Information</span>
            <h1>Privacy Policy</h1>
            <p>Last updated: August 28, 2026</p>
          </header>

          <div className="privacy-content">
            <section>
              <h2>Overview</h2>
              <p>
                Amy Plante Realtor respects your privacy. This Privacy Policy
                explains what information may be collected when you visit
                amyplanterealtor.com, contact Amy, request information, schedule
                a consultation, or subscribe to email updates.
              </p>
            </section>

            <section>
              <h2>Information You Provide</h2>
              <p>
                You may voluntarily provide information such as your name, email
                address, telephone number, property information, real estate
                needs, preferred appointment time, or other details included in
                a message or form.
              </p>
              <p>
                This information may be submitted through email, telephone,
                Calendly, Google Forms, Flodesk, or another contact method
                clearly identified on the website.
              </p>
            </section>

            <section>
              <h2>Website Analytics and Cookies</h2>
              <p>
                This website uses Google Analytics to understand how visitors
                find and use the site. Google Analytics may collect information
                such as pages visited, interactions with links, approximate
                location, browser type, device information, session activity,
                and referral source.
              </p>
              <p>
                Google Analytics uses first-party cookies, including cookies
                used to distinguish visitors and sessions. This information
                helps improve the website and evaluate which content is most
                useful. It is not used by Amy Plante Realtor to personally
                identify individual website visitors.
              </p>
              <p>
                You can manage or delete cookies through your browser settings.
                Google also offers a{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Analytics opt-out browser add-on
                </a>
                .
              </p>
            </section>

            <section>
              <h2>How Information Is Used</h2>
              <p>Information may be used to:</p>

              <ul>
                <li>Respond to questions and real estate inquiries</li>
                <li>Schedule consultations</li>
                <li>Provide requested home or market information</li>
                <li>Send newsletters when a visitor chooses to subscribe</li>
                <li>Understand website usage and improve its content</li>
                <li>Maintain the security and operation of the website</li>
              </ul>
            </section>

            <section>
              <h2>Service Providers</h2>
              <p>
                The website uses trusted third-party services to provide
                specific functions. These may include Google Analytics for
                website measurement, Flodesk for email subscriptions, Calendly
                for appointment scheduling, Google Forms for information
                requests, and Vercel for website hosting.
              </p>
              <p>
                Information submitted through those services is also governed by
                the applicable provider’s privacy practices.
              </p>
            </section>

            <section>
              <h2>Information Sharing</h2>
              <p>
                Amy Plante Realtor does not sell personal information.
                Information may be shared with service providers when needed to
                operate the website, respond to a request, deliver a selected
                service, comply with the law, or protect legal rights and
                website security.
              </p>
            </section>

            <section>
              <h2>Email Communications</h2>
              <p>
                If you subscribe to the Home & Harmony newsletter, your email
                address is used to send the communications you requested. You
                can unsubscribe at any time by using the unsubscribe link
                included in an email.
              </p>
            </section>

            <section>
              <h2>Data Retention and Security</h2>
              <p>
                Information is retained only as reasonably necessary for the
                purpose for which it was collected, to maintain business
                records, or to meet legal obligations. Reasonable safeguards are
                used to protect information, but no method of internet
                transmission or electronic storage can be guaranteed to be
                completely secure.
              </p>
            </section>

            <section>
              <h2>Third-Party Websites</h2>
              <p>
                This website links to external websites and services, including
                property-search, review, social-media, scheduling, and
                informational websites. Amy Plante Realtor is not responsible
                for the privacy practices or content of external websites.
              </p>
            </section>

            <section>
              <h2>Children’s Privacy</h2>
              <p>
                This website is not intended for children under 13, and Amy
                Plante Realtor does not knowingly collect personal information
                from children under 13 through this website.
              </p>
            </section>

            <section>
              <h2>Policy Updates</h2>
              <p>
                This policy may be updated as the website or its services
                change. The updated date shown at the top of this page will
                reflect the latest revision.
              </p>
            </section>

            <section>
              <h2>Contact</h2>
              <p>Questions about this Privacy Policy may be directed to:</p>

              <address>
                <strong>Amy Plante Realtor</strong>
                <br />
                25 Messenger St
                <br />
                Plainville, MA 02762
                <br />
                <a href="mailto:amyplanterealtor@gmail.com">
                  amyplanterealtor@gmail.com
                </a>
                <br />
                <a href="tel:5089629759">508-962-9759</a>
              </address>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
