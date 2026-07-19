import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Legal() {
  return (
    <main className="subpage legal-page">
      <Header />
      <section className="subhero">
        <div className="subhero-image" />
        <div className="shell">
          <p className="eyebrow">Tintopia Bristol</p>
          <h1>LEGAL &amp; PRIVACY</h1>
          <p>How we use your information and the terms that apply to this website.</p>
        </div>
      </section>
      <section className="legal-content shell">
        <p className="legal-updated">Last updated: 19 July 2026</p>

        <section>
          <h2>Privacy notice</h2>
          <p>Tintopia Bristol is the controller of the personal information described in this notice. You can contact us at tintopiabristol@gmail.com, on 07392 010907, or at Unit 4, Green Tree Farm, Roman Road, Emersons Green, Bristol BS16 7NT.</p>
        </section>

        <section>
          <h2>Information we collect</h2>
          <p>When you submit an enquiry or booking request, we collect the information you enter: your name, email address, vehicle make and model, preferred appointment date, and the contents of your message. Our form also uses a hidden anti-spam field; please do not enter information in it.</p>
          <p>If you contact us by phone, email, WhatsApp, or social media, we may retain the information you choose to provide in that conversation so that we can respond and manage your enquiry or booking.</p>
        </section>

        <section>
          <h2>How and why we use it</h2>
          <p>We use your information to reply to your request, provide a quote, arrange or manage an appointment, answer follow-up questions, and keep appropriate business records. The usual lawful basis is taking steps at your request before entering into a contract, or performing a contract with you. We may also use limited information where necessary for our legitimate interests in running, securing, and improving our business, provided your rights do not override those interests.</p>
          <p>We do not sell your personal information. We do not use the information submitted through this website for automated decision-making or profiling.</p>
        </section>

        <section>
          <h2>Sharing and international transfers</h2>
          <p>Booking and enquiry submissions are processed through FormSubmit, our form-delivery provider, so that your message can be delivered to us by email. FormSubmit may process information on our behalf and may use servers outside the UK. Please review FormSubmit’s own privacy information for details of its processing and safeguards. We may also share information where required by law or with professional advisers where necessary to protect or enforce our legal rights.</p>
        </section>

        <section>
          <h2>Retention and security</h2>
          <p>We keep enquiry and booking information only for as long as needed to handle the request, maintain records, or meet legal obligations. Normally, we aim to delete or anonymise enquiry information within 24 months of our last meaningful contact, unless a longer period is needed for a booking, dispute, warranty, accounting, or legal requirement.</p>
          <p>We use reasonable organisational and technical measures to protect information. However, no internet transmission or storage method is completely secure; please avoid sending sensitive personal information through the enquiry form.</p>
        </section>

        <section>
          <h2>Cookies and third-party links</h2>
          <p>This website does not use non-essential analytics, advertising, or tracking cookies. It does not offer customer accounts or take payments online. Links to social media, WhatsApp, FormSubmit, or other third-party websites are governed by those providers’ own privacy notices and cookie practices once you leave this site.</p>
        </section>

        <section>
          <h2>Your rights</h2>
          <p>Subject to applicable law, you may ask for access to, correction of, or deletion of your personal information; request that we restrict or stop certain processing; object to processing based on legitimate interests; or ask for a portable copy where applicable. To exercise a right, contact us using the details above. You also have the right to complain to the UK Information Commissioner’s Office at <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noreferrer">ico.org.uk</a>.</p>
        </section>

        <section>
          <h2>Website terms</h2>
          <p>The content on this site is for general information about Tintopia Bristol’s services. Film availability, shade suitability, prices, installation times, and results can vary by vehicle and are confirmed directly with you. A website enquiry or quote is not a confirmed booking or binding contract until we confirm it.</p>
          <p>You must not misuse this website, attempt to interfere with its operation, or use its content without permission. We may update these terms, services, or this notice from time to time. The version published on this page is the current version.</p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
