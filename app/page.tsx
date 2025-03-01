"use client";

import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import IntroSection from "@/components/IntroSection";
import BlogSection from "@/components/BlogSection";
import VideoSection from "@/components/VideoSection";
import FeaturedSection from "@/components/FeaturedSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <IntroSection />
      <BlogSection />
      <VideoSection />
      <FeaturedSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
