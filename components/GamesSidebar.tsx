import SidebarWidget from "@/components/SidebarWidget";

const GamesSidebar = () => {
  // Categories data
  const categories = [
    { name: "Games", slug: "games" },
    { name: "Gaming Tips & Tricks", slug: "gaming-tips-tricks" },
    { name: "Online Games", slug: "online-games" },
    { name: "Team Games", slug: "team-games" },
    { name: "Community", slug: "community" },
    { name: "Uncategorized", slug: "uncategorized" },
  ];

  // Platform data
  const platforms = [
    { name: "Xbox", slug: "xbox" },
    { name: "Xbox 360", slug: "xbox-360" },
    { name: "Play Station", slug: "play-station" },
    { name: "Play Station VR", slug: "play-station-vr" },
    { name: "Nintendo Wii", slug: "nintendo-wii" },
    { name: "Nintendo Wii U", slug: "nintendo-wii-u" },
  ];

  // Genre data
  const genres = [
    { name: "Online", slug: "online" },
    { name: "Adventure", slug: "adventure" },
    { name: "S.F.", slug: "sf" },
    { name: "Strategy", slug: "strategy" },
    { name: "Racing", slug: "racing" },
    { name: "Shooter", slug: "shooter" },
  ];

  return (
    <div id="stickySidebar">
      <SidebarWidget title="Categories" items={categories} />
      <SidebarWidget title="Platform" items={platforms} />
      <SidebarWidget title="Genre" items={genres} />
    </div>
  );
};

export default GamesSidebar;
