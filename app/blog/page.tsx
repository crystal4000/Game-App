"use client";

import Header from "@/components/Header";
import PageTop from "@/components/PageTop";
import BlogList from "@/components/BlogList";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <>
      <Header />
      <PageTop
        title="Blog"
        breadcrumb={[
          { name: "Home", link: "/" },
          { name: "Blog", link: null },
        ]}
        bgImage="/img/slider-bg-3.jpg"
      />
      <BlogList />
      <NewsletterSection />
      <Footer />
    </>
  );
}
