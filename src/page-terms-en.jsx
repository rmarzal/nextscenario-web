// Terms of service page — English

const termsBodyStyle = { fontSize: 15, lineHeight: 1.65, color: "var(--mute)", maxWidth: 800 };

function TermsPageEN() {
  return (
    <>
      <SubNav lang="en" current="terms.html" />

      <section className="sub-hero" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="sub-crumb"><a href="index.html">Home</a> · <span>Terms of service</span></div>
          <h1 className="sub-h1">Terms of service</h1>
          <p className="sub-lede">Last updated: April 2026</p>
        </div>
      </section>

      <section>
        <div className="container" style={termsBodyStyle}>

          <h3>1. Purpose</h3>
          <p>These Terms of Service ("Terms") govern your access to and use of the NextScenario platform, a business analytics SaaS application operated by NextScenario S.L., registered in Madrid, Spain ("NextScenario", "we", "us", or "our"). By creating an account or using our services, you agree to be bound by these Terms. If you do not agree, you must not use the platform.</p>

          <h3>2. Registration and account</h3>
          <p>To access the platform, you must create an account by providing accurate and complete information. You are responsible for:</p>
          <ul>
            <li>Maintaining the confidentiality of your account credentials.</li>
            <li>All activity that occurs under your account.</li>
            <li>Notifying us immediately at <a href="mailto:legal@nextscenario.com">legal@nextscenario.com</a> if you suspect unauthorized access to your account.</li>
          </ul>
          <p>You must be at least 18 years old and have the legal authority to enter into these Terms on behalf of yourself or your organization. We reserve the right to suspend or terminate accounts that contain false or misleading information.</p>

          <h3>3. Plans and pricing</h3>
          <p>NextScenario offers various subscription plans as described on our pricing page. By selecting a plan, you agree to pay the applicable fees. Key terms include:</p>
          <ul>
            <li>Subscription fees are billed in advance on a monthly or annual basis, depending on the plan selected.</li>
            <li>All prices are listed in euros (EUR) and are exclusive of applicable taxes (VAT/IVA) unless stated otherwise.</li>
            <li>We offer a 14-day free trial for new accounts. No credit card is required during the trial period.</li>
            <li>We reserve the right to modify pricing with at least 30 days' prior written notice. Existing subscriptions will remain at their current rate until the end of the billing cycle.</li>
            <li>Refund requests are handled on a case-by-case basis. Contact us for details.</li>
          </ul>

          <h3>4. Acceptable use</h3>
          <p>You agree to use the platform only for lawful business purposes and in compliance with all applicable laws and regulations. You must not:</p>
          <ul>
            <li>Use the platform to engage in any fraudulent, abusive, or illegal activity.</li>
            <li>Attempt to gain unauthorized access to other users' accounts, data, or any part of our infrastructure.</li>
            <li>Reverse-engineer, decompile, or disassemble any part of the platform.</li>
            <li>Use automated systems (bots, scrapers, etc.) to access the platform without our written consent.</li>
            <li>Resell, redistribute, or sublicense access to the platform without prior authorization.</li>
            <li>Upload or transmit malicious code, viruses, or any content designed to disrupt the platform.</li>
          </ul>

          <h3>5. Intellectual property</h3>
          <p>All intellectual property rights in the NextScenario platform — including software, design, trademarks, logos, documentation, and content — are and remain the exclusive property of NextScenario S.L. or its licensors.</p>
          <p>Your subscription grants you a limited, non-exclusive, non-transferable, revocable license to access and use the platform for the duration of your subscription and in accordance with these Terms. This license does not grant you any ownership rights.</p>

          <h3>6. User data</h3>
          <p>You retain full ownership of all data you provide or that is collected through your connected integrations ("User Data"). By using the platform, you grant NextScenario a limited license to process, store, and display your User Data solely for the purpose of providing and improving the services.</p>
          <ul>
            <li>We will not sell, rent, or share your User Data with third parties for their own purposes.</li>
            <li>Upon account termination, you may request an export of your User Data. After the retention period described in our <a href="privacy.html">Privacy policy</a>, your data will be permanently deleted.</li>
            <li>We implement robust security measures to protect your data, as described in our Privacy policy.</li>
          </ul>

          <h3>7. Limitation of liability</h3>
          <p>To the maximum extent permitted by applicable law:</p>
          <ul>
            <li>NextScenario provides the platform "as is" and "as available" without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</li>
            <li>NextScenario shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from your use of or inability to use the platform.</li>
            <li>Our total aggregate liability for any claims arising under these Terms shall not exceed the total fees paid by you to NextScenario in the 12 months preceding the event giving rise to the claim.</li>
            <li>Financial data displayed on the platform is for informational purposes only and should not be considered as financial, tax, or legal advice.</li>
          </ul>

          <h3>8. Modifications</h3>
          <p>We reserve the right to update or modify these Terms at any time. When we make material changes, we will:</p>
          <ul>
            <li>Notify you via email or through a notice within the platform at least 30 days before the changes take effect.</li>
            <li>Update the "Last updated" date at the top of this page.</li>
          </ul>
          <p>Your continued use of the platform after the effective date of any changes constitutes your acceptance of the updated Terms. If you disagree with the changes, you may terminate your account before the changes take effect.</p>

          <h3>9. Termination</h3>
          <p>Either party may terminate the subscription:</p>
          <ul>
            <li><strong>By you:</strong> You may cancel your subscription at any time through your account settings. Your access will continue until the end of the current billing period.</li>
            <li><strong>By NextScenario:</strong> We may suspend or terminate your account immediately if you violate these Terms, engage in fraudulent activity, or fail to pay applicable fees after reasonable notice.</li>
          </ul>
          <p>Upon termination, your right to access the platform ceases. Provisions that by their nature should survive termination (including intellectual property, limitation of liability, and governing law) shall remain in effect.</p>

          <h3>10. Governing law</h3>
          <p>These Terms shall be governed by and construed in accordance with the laws of Spain, without regard to conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Madrid, Spain.</p>

          <h3>11. Contact</h3>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:legal@nextscenario.com">legal@nextscenario.com</a></li>
            <li><strong>Company:</strong> NextScenario S.L., Madrid, Spain</li>
          </ul>

        </div>
      </section>

      <SubFooter lang="en" current="terms.html" />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<TermsPageEN />);
