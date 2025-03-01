"use client";

import Header from "@/components/Header";
import PageTop from "@/components/PageTop";
import GamesList from "@/components/GamesList";
import FeaturedSection from "@/components/FeaturedSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function GamesPage() {
  return (
    <>
      <Header />
      <PageTop
        title="Games"
        breadcrumb={[
          { name: "Home", link: "/" },
          { name: "Games", link: null },
        ]}
        bgImage="/img/slider-bg-1.jpg"
      />
      <GamesList />
      <FeaturedSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
