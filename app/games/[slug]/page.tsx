"use client";

import Header from "@/components/Header";
import PageTop from "@/components/PageTop";
import GameSingle from "@/components/GameSingle";
import GameAuthorSection from "@/components/GameAuthorSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import React from "react";

export default function GameSingleContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = React.use(params);
  // In a real app, you would fetch the game data based on the slug
  // For now, we'll use static data

  const gameData = {
    id: 1,
    title: "Final Appocalipse 2.1",
    slug: resolvedParams.slug,
    date: "11.11.18",
    category: "Games",
    image: "/img/games/big.jpg",
    ratings: {
      price: 3.5,
      graphics: 4.5,
      levels: 3.5,
      gameplay: 4.5,
      difficulty: 4.5,
      overall: 4.5,
    },
    content: {
      gameplay:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum posuere porttitor justo id pellentesque. Proin id lacus feugiat, posuere erat sit amet, commodo ipsum. Donec pellentesque vestibulum metus.",
      conclusion:
        "Nulla ut maximus mauris. Sed malesuada at sapien sed euismod. Vestibulum pharetra in sem id laoreet. Cras metus ex, placerat nec justo quis, luctus posuere ex. Vivamus volutpat nibh ac sollicitudin imperdiet. Donec scelerisque lorem sodales odio ultricies, nec rhoncus ex lobortis. Vivamus tincidunt sit amet sem id varius. Donec ele-mentum aliquet tortor. Curabitur justo mi, efficitur sed eros aliquet, dictum molestie eros. Nullam scelerisque convallis gravida. Morbi id lorem accumsan, scelerisque enim laoreet, sollicitudin neque. Vivamus volutpat nibh ac sollicitudin imperdiet. Donec scelerisque lorem sodales odio ultricies, nec rhoncus ex lobortis. Vivamus tincidunt sit amet sem id varius. Donec ele-mentum aliquet tortor. Curabitur justo mi, efficitur sed eros aliqueDonec vitae tellus sodales, congue augue at, biben-dum justo. Pellentesque non dolor et magna volutpat pharetra eget vel ligula. Maecenas facilisis vestibulum mattis. Sed sagittis gravida urna. Cras nec mi risus.",
    },
    testimonial: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo re magna aliqua. Quis ipsum suspend isse ultrices.",
      author: "James Smith",
      role: "Gamer",
    },
    author: {
      name: "Michael Williams",
      image: "/img/author.jpg",
      bio: "Vivamus volutpat nibh ac sollicitudin imperdiet. Donec scelerisque lorem sodales odio ultricies, nec rhoncus ex lobortis. Vivamus tincid-unt sit amet sem id varius. Donec elementum aliquet tortor. Curabitur justo mi, efficitur sed eros alique.",
    },
  };

  return (
    <>
      <Header />
      <PageTop
        title="Games"
        breadcrumb={[
          { name: "Home", link: "/" },
          { name: "Games", link: null },
        ]}
        bgImage="/img/page-top-bg-1.png"
      />
      <GameSingle game={gameData} />
      <GameAuthorSection author={gameData.author} />
      <NewsletterSection />
      <Footer />
    </>
  );
}
