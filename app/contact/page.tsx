"use client";

import Header from "@/components/Header";
import PageTop from "@/components/PageTop";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <PageTop
        title="Contact"
        breadcrumb={[
          { name: "Home", link: "/" },
          { name: "Contact", link: null },
        ]}
        bgImage="/img/page-top-bg/4.jpg"
      />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
