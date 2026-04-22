// Cookie policy page — English

const cookiesBodyStyle = { fontSize: 15, lineHeight: 1.65, color: "var(--mute)", maxWidth: 800 };

function CookiesPageEN() {
  return (
    <>
      <SubNav lang="en" current="cookies.html" />

      <section className="sub-hero" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="sub-crumb"><a href="index.html">Home</a> · <span>Cookie policy</span></div>
          <h1 className="sub-h1">Cookie policy</h1>
          <p className="sub-lede">Last updated: April 2026</p>
        </div>
      </section>

      <section>
        <div className="container" style={cookiesBodyStyle}>

          <h3>1. What are cookies</h3>
          <p>Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and supply information to the site owners.</p>
          <p>Cookies can be "persistent" (remaining on your device until they expire or you delete them) or "session" cookies (deleted when you close your browser). They can be set by the website you are visiting ("first-party cookies") or by third-party services embedded in the site ("third-party cookies").</p>

          <h3>2. Cookies we use</h3>
          <p>The following table describes the cookies used on the NextScenario platform:</p>

          <div style={{ overflowX: "auto", marginTop: 16, marginBottom: 24 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, lineHeight: 1.6 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--line)" }}>
                  <th style={{ textAlign: "left", padding: "10px 16px 10px 0", color: "var(--ink)", fontWeight: 600 }}>Category</th>
                  <th style={{ textAlign: "left", padding: "10px 16px 10px 0", color: "var(--ink)", fontWeight: 600 }}>Purpose</th>
                  <th style={{ textAlign: "left", padding: "10px 16px 10px 0", color: "var(--ink)", fontWeight: 600 }}>Duration</th>
                  <th style={{ textAlign: "left", padding: "10px 0", color: "var(--ink)", fontWeight: 600 }}>Required</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--line)" }}>
                  <td style={{ padding: "10px 16px 10px 0", fontWeight: 500, color: "var(--ink)" }}>Necessary</td>
                  <td style={{ padding: "10px 16px 10px 0" }}>Essential for the platform to function. These cookies enable core features such as authentication, session management, and security. The platform cannot operate properly without them.</td>
                  <td style={{ padding: "10px 16px 10px 0" }}>Session / 1 year</td>
                  <td style={{ padding: "10px 0" }}>Yes</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--line)" }}>
                  <td style={{ padding: "10px 16px 10px 0", fontWeight: 500, color: "var(--ink)" }}>Analytics</td>
                  <td style={{ padding: "10px 16px 10px 0" }}>Help us understand how visitors interact with the platform by collecting and reporting information anonymously. This data helps us improve the user experience.</td>
                  <td style={{ padding: "10px 16px 10px 0" }}>Up to 2 years</td>
                  <td style={{ padding: "10px 0" }}>No</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--line)" }}>
                  <td style={{ padding: "10px 16px 10px 0", fontWeight: 500, color: "var(--ink)" }}>Functional</td>
                  <td style={{ padding: "10px 16px 10px 0" }}>Enable enhanced functionality and personalization, such as remembering your language preference, dashboard layout, and display settings.</td>
                  <td style={{ padding: "10px 16px 10px 0" }}>Up to 1 year</td>
                  <td style={{ padding: "10px 0" }}>No</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--line)" }}>
                  <td style={{ padding: "10px 16px 10px 0", fontWeight: 500, color: "var(--ink)" }}>Marketing</td>
                  <td style={{ padding: "10px 16px 10px 0" }}>Used to track visitors across websites to display relevant advertisements. These cookies may be set by advertising partners to build a profile of your interests.</td>
                  <td style={{ padding: "10px 16px 10px 0" }}>Up to 2 years</td>
                  <td style={{ padding: "10px 0" }}>No</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>3. Managing cookies</h3>
          <p>You can control and manage cookies in several ways:</p>
          <ul>
            <li><strong>Cookie consent banner:</strong> When you first visit our platform, you can choose which categories of cookies to accept or reject through our consent banner.</li>
            <li><strong>Browser settings:</strong> Most browsers allow you to view, manage, and delete cookies through their settings. Note that disabling certain cookies may affect the functionality of the platform.</li>
            <li><strong>Opt-out links:</strong> For specific third-party cookies, you can use the opt-out mechanisms provided by each service (see section 4 below).</li>
          </ul>
          <p>Here are links to cookie management instructions for common browsers:</p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/en-us/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/manage-cookies-in-microsoft-edge-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
          </ul>

          <h3>4. Third-party cookies</h3>
          <p>We use the following third-party services that may set cookies on your device:</p>
          <ul>
            <li><strong>Google Analytics:</strong> We use Google Analytics to collect anonymized usage statistics and understand how visitors interact with our platform. Google Analytics cookies (such as <code>_ga</code> and <code>_gid</code>) track page views, session duration, and traffic sources. You can opt out via the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics opt-out browser add-on</a>.</li>
            <li><strong>Stripe:</strong> Our payment processor Stripe uses cookies to process payments securely, prevent fraud, and comply with regulatory requirements. These cookies are classified as necessary. Learn more in <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe's privacy policy</a>.</li>
            <li><strong>Intercom:</strong> We use Intercom to provide live chat support and in-app messaging. Intercom may set cookies to identify returning visitors and maintain conversation history. Learn more in <a href="https://www.intercom.com/legal/privacy" target="_blank" rel="noopener noreferrer">Intercom's privacy policy</a>.</li>
          </ul>

          <h3>5. Policy updates</h3>
          <p>We may update this Cookie policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. When we make material changes, we will notify you by updating the "Last updated" date at the top of this page and, where appropriate, through a notice on our platform. We encourage you to review this policy periodically.</p>

          <h3>6. Contact</h3>
          <p>If you have any questions about our use of cookies or this policy, please contact us at:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:privacy@nextscenario.com">privacy@nextscenario.com</a></li>
            <li><strong>Company:</strong> NextScenario S.L., Madrid, Spain</li>
          </ul>

        </div>
      </section>

      <SubFooter lang="en" current="cookies.html" />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<CookiesPageEN />);
