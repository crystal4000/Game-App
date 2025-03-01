"use client";

import Header from "@/components/Header";
import PageTop from "@/components/PageTop";
import ReviewList from "@/components/ReviewList";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function ReviewPage() {
  return (
    <>
      <Header />
      <PageTop
        title="Reviews"
        breadcrumb={[
          { name: "Home", link: "/" },
          { name: "Reviews", link: null },
        ]}
        bgImage="/img/slider-bg-1.jpg"
      />
      <ReviewList />
      <NewsletterSection />
      <Footer />
    </>
  );
}
