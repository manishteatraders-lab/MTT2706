import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Manish Tea Traders",
  description: "Privacy Policy for Manish Tea Traders. Detailed information on how we handle your data, including WhatsApp API communications.",
  alternates: {
    canonical: "https://www.manishteatraders.in/privacy-policy/"
  }
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose prose-tea">
          <h1>Privacy Policy</h1>
          <p>Last Updated: February 22, 2026</p>

          <section id="introduction">
              <h2>1. Introduction & Scope</h2>
              <p>Manish Tea Traders (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and safeguard your personal data when you interact with us via our website or our WhatsApp Business API services.</p>
          </section>

          <section id="information-collection">
              <h2>2. Information We Collect</h2>
              <p>We collect information necessary to process your wholesale orders and facilitate communications, including:</p>
              <ul>
                  <li><strong>Basic Info:</strong> Name, Business Name, and GST Number (for tax invoicing).</li>
                  <li><strong>Contact Info:</strong> Shipping and Billing Address, Email Address.</li>
                  <li><strong>WhatsApp API Data:</strong>
                      <ul>
                          <li>Phone Number (Mandatory for the API to function).</li>
                          <li>Profile Name (The name you set in your WhatsApp settings).</li>
                          <li>Message Content (Text, images, or files sent to our business).</li>
                          <li>Metadata (Timestamps and message status: sent, delivered, read).</li>
                      </ul>
                  </li>
              </ul>
          </section>

          <section id="data-usage">
              <h2>3. How We Use Your Data</h2>
              <p>Meta requires that we use data only for specific business purposes:</p>
              <ul>
                  <li><strong>Customer Support:</strong> Responding to your inquiries and providing assistance.</li>
                  <li><strong>Transactional Updates:</strong> Sending order confirmations, shipping updates, or OTPs.</li>
                  <li><strong>Marketing:</strong> Sending newsletters or harvest rate updates <em>only</em> if you have explicitly opted in.</li>
              </ul>
          </section>

          <section id="third-party-sharing">
              <h2>4. Third-Party Sharing (The &quot;Meta Clause&quot;)</h2>
              <p>We do not sell your personal data. We use Meta Platforms, Inc. (WhatsApp) as a service provider to facilitate our communications. Your messages are subject to WhatsApp&apos;s End-to-End Encryption, but once received by our API, they are processed according to this policy. We also share data with logistics partners (e.g., VRL, Safexpress) for delivery purposes and legal authorities if required by Indian Law.</p>
          </section>

          <section id="consent-opt-out">
              <h2>5. Consent & Opt-Out</h2>
              <p><strong>Opt-In:</strong> You provide consent by messaging us first on WhatsApp or by checking the consent box on our website contact forms.</p>
              <p><strong>Opt-Out:</strong> You can stop receiving messages at any time. Simply reply <strong>&quot;STOP&quot;</strong> or <strong>&quot;UNSUBSCRIBE&quot;</strong> to our WhatsApp message, and we will remove you from our automated lists.</p>
          </section>

          <section id="data-deletion">
              <h2>6. Data Deletion (User Rights)</h2>
              <p>In compliance with Meta&apos;s requirements, we provide a clear path for data removal. You can request a full wipe of your chat history and phone number from our database at any time.</p>
              <p>To request data deletion, please email <strong>manishteatraders@gmail.com</strong> with the subject &quot;Data Deletion Request&quot;. We will process your request within 48 hours.</p>
          </section>

          <section id="contact-info">
              <h2>7. Contact Information</h2>
              <p>If you have questions about this policy, contact us:</p>
              <address className="not-italic">
                  <strong>Manish Tea Traders</strong><br />
                  Phone: +91 70019 58588<br />
                  Email: manishteatraders@gmail.com<br />
                  Location: Siliguri, West Bengal, India
              </address>
          </section>
      </div>
    </div>
  );
}
