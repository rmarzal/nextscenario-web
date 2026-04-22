// Privacy policy page — English

const legalBodyStyle = { fontSize: 15, lineHeight: 1.65, color: "var(--mute)", maxWidth: 800 };

function PrivacyPageEN() {
  return (
    <>
      <SubNav lang="en" current="privacy.html" />

      <section className="sub-hero" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="sub-crumb"><a href="index.html">Home</a> · <span>Privacy policy</span></div>
          <h1 className="sub-h1">Privacy policy</h1>
          <p className="sub-lede">Last updated: April 2026</p>
        </div>
      </section>

      <section>
        <div className="container" style={legalBodyStyle}>

          <h3>1. Data controller</h3>
          <p>The data controller responsible for processing your personal data is:</p>
          <ul>
            <li><strong>Company:</strong> NextScenario S.L.</li>
            <li><strong>Registered address:</strong> Madrid, Spain</li>
            <li><strong>Tax ID (CIF):</strong> Available upon request</li>
            <li><strong>Contact email:</strong> <a href="mailto:privacy@nextscenario.com">privacy@nextscenario.com</a></li>
          </ul>

          <h3>2. Data we collect</h3>
          <p>We collect the following categories of personal data when you use our platform:</p>
          <ul>
            <li><strong>Account data:</strong> Name, email address, company name, phone number, and billing information provided during registration.</li>
            <li><strong>Usage data:</strong> Information about how you interact with the platform, including pages visited, features used, session duration, IP address, browser type, and device identifiers.</li>
            <li><strong>Banking and ERP integration data:</strong> Financial data retrieved from your connected bank accounts and ERP systems through secure APIs (Open Banking / PSD2). This includes account balances, transactions, and accounting records. We access this data in read-only mode and never initiate payments or modify your bank or ERP records.</li>
          </ul>

          <h3>3. Purpose of processing</h3>
          <p>We process your personal data for the following purposes:</p>
          <ul>
            <li>To provide and operate the NextScenario platform and its features.</li>
            <li>To manage your account, including authentication and billing.</li>
            <li>To aggregate and display your financial data in dashboards, reports, and forecasts.</li>
            <li>To communicate with you regarding your account, updates, and support.</li>
            <li>To improve and develop our services based on anonymized usage analytics.</li>
            <li>To comply with applicable legal obligations.</li>
          </ul>

          <h3>4. Legal basis (GDPR)</h3>
          <p>Under the General Data Protection Regulation (GDPR), we process your data based on the following legal grounds:</p>
          <ul>
            <li><strong>Contract performance (Art. 6(1)(b)):</strong> Processing necessary to provide the services you have subscribed to.</li>
            <li><strong>Legitimate interest (Art. 6(1)(f)):</strong> Processing for analytics, security, and service improvement, where our interests do not override your rights.</li>
            <li><strong>Consent (Art. 6(1)(a)):</strong> Where you have given explicit consent, such as for marketing communications or optional cookies.</li>
            <li><strong>Legal obligation (Art. 6(1)(c)):</strong> Processing required to comply with tax, accounting, or regulatory obligations.</li>
          </ul>

          <h3>5. Recipients of your data</h3>
          <p>We may share your personal data with the following categories of recipients:</p>
          <ul>
            <li><strong>Infrastructure providers:</strong> Cloud hosting and storage services that process data on our behalf under strict data processing agreements.</li>
            <li><strong>Payment processors:</strong> To handle billing and subscriptions securely.</li>
            <li><strong>Banking aggregation partners:</strong> Licensed third-party providers that facilitate Open Banking connections under PSD2 regulation.</li>
            <li><strong>Analytics providers:</strong> To help us understand platform usage in an aggregated and anonymized manner.</li>
            <li><strong>Legal authorities:</strong> When required by law or in response to valid legal processes.</li>
          </ul>
          <p>We do not sell your personal data to third parties.</p>

          <h3>6. International transfers</h3>
          <p>Your data is primarily stored and processed within the European Economic Area (EEA). If any data is transferred outside the EEA, we ensure adequate safeguards are in place, including EU Standard Contractual Clauses (SCCs) or adequacy decisions by the European Commission, in compliance with GDPR requirements.</p>

          <h3>7. Retention period</h3>
          <p>We retain your personal data for as long as your account remains active and as necessary to fulfill the purposes described in this policy. Specifically:</p>
          <ul>
            <li><strong>Account data:</strong> Retained for the duration of your subscription, plus up to 12 months after account deletion for administrative purposes.</li>
            <li><strong>Usage data:</strong> Retained in identifiable form for up to 24 months, then anonymized for statistical analysis.</li>
            <li><strong>Financial integration data:</strong> Retained for the duration of the active connection. Upon disconnection, cached data is purged within 30 days.</li>
            <li><strong>Billing records:</strong> Retained for up to 6 years to comply with Spanish tax and accounting regulations.</li>
          </ul>

          <h3>8. Your rights</h3>
          <p>Under the GDPR, you have the following rights regarding your personal data:</p>
          <ul>
            <li><strong>Right of access:</strong> You can request a copy of the personal data we hold about you.</li>
            <li><strong>Right to rectification:</strong> You can request correction of inaccurate or incomplete data.</li>
            <li><strong>Right to erasure:</strong> You can request deletion of your personal data, subject to legal retention obligations.</li>
            <li><strong>Right to data portability:</strong> You can request your data in a structured, machine-readable format.</li>
            <li><strong>Right to object:</strong> You can object to processing based on legitimate interest or for direct marketing purposes.</li>
            <li><strong>Right to restriction:</strong> You can request that we limit the processing of your data in certain circumstances.</li>
          </ul>
          <p>To exercise any of these rights, please contact us at <a href="mailto:privacy@nextscenario.com">privacy@nextscenario.com</a>. We will respond within 30 days. You also have the right to lodge a complaint with the Spanish Data Protection Agency (AEPD) at <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.</p>

          <h3>9. Security</h3>
          <p>We implement robust technical and organizational measures to protect your personal data, including:</p>
          <ul>
            <li><strong>AES-256 encryption</strong> for data at rest and TLS 1.3 for data in transit.</li>
            <li>Infrastructure aligned with <strong>ISO 27001</strong> information security standards.</li>
            <li>Role-based access controls and multi-factor authentication for internal systems.</li>
            <li>Regular security audits and vulnerability assessments.</li>
            <li>Incident response procedures with notification within 72 hours as required by GDPR.</li>
          </ul>

          <h3>10. Cookies</h3>
          <p>We use cookies and similar technologies to operate and improve our platform. For detailed information about the cookies we use and how to manage your preferences, please see our <a href="cookies.html">Cookie policy</a>.</p>

          <h3>11. Data Protection Officer (DPO)</h3>
          <p>For any questions or concerns regarding this privacy policy or our data processing practices, you can contact our Data Protection Officer at:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:privacy@nextscenario.com">privacy@nextscenario.com</a></li>
          </ul>

        </div>
      </section>

      <SubFooter lang="en" current="privacy.html" />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<PrivacyPageEN />);
