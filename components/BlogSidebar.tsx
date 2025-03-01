import Image from "next/image";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";
import SidebarWidget from "./SidebarWidget";
import { TrendingPost } from "@/types";

const BlogSidebar = () => {
  // Categories data
  const categories = [
    { name: "Games", slug: "games" },
    { name: "Gaming Tips & Tricks", slug: "gaming-tips-tricks" },
    { name: "Online Games", slug: "online-games" },
    { name: "Team Games", slug: "team-games" },
    { name: "Community", slug: "community" },
    { name: "Uncategorized", slug: "uncategorized" },
  ];

  // Trending posts data
  const trendingPosts: TrendingPost[] = [
    {
      id: 1,
      title: "The best online game is out now!",
      category: "Games",
      date: "11.11.18",
      image: "/img/blog-widget/1.jpg",
    },
    {
      id: 2,
      title: "The best online game is out now!",
      category: "Games",
      date: "11.11.18",
      image: "/img/blog-widget/2.jpg",
    },
    {
      id: 3,
      title: "The best online game is out now!",
      category: "Games",
      date: "11.11.18",
      image: "/img/blog-widget/3.jpg",
    },
    {
      id: 4,
      title: "The best online game is out now!",
      category: "Games",
      date: "11.11.18",
      image: "/img/blog-widget/4.jpg",
    },
  ];

  // Comments data
  const comments = [
    {
      id: 1,
      name: "Maria Smith",
      article: "The best online game out there",
      avatar: "/img/blog-widget/1.jpg",
    },
    {
      id: 2,
      name: "Maria Smith",
      article: "The best online game out there",
      avatar: "/img/blog-widget/2.jpg",
    },
    {
      id: 3,
      name: "Maria Smith",
      article: "The best online game out there",
      avatar: "/img/blog-widget/3.jpg",
    },
    {
      id: 4,
      name: "Maria Smith",
      article: "The best online game out there",
      avatar: "/img/blog-widget/4.jpg",
    },
  ];

  return (
    <div id="stickySidebar">
      <div className="widget-item mb-4">
        <Form className="position-relative mb-4">
          <Form.Control
            type="text"
            placeholder="Search..."
            style={{
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "2px solid #3b5d80",
              borderRadius: 0,
              color: "#fff",
              paddingRight: "70px",
              height: "40px",
            }}
          />
          <Button
            variant="link"
            className="position-absolute end-0 top-0 text-uppercase"
            style={{
              color: "#00a6eb",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "14px",
              height: "40px",
              border: "none",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "#00a6eb";
            }}
          >
            search
          </Button>
        </Form>
      </div>

      <div className="widget-item mb-4">
        <h4
          className="widget-title text-white ps-3 mb-4"
          style={{ fontWeight: 700, fontStyle: "italic" }}
        >
          Trending
        </h4>
        <div className="trending-widget">
          {trendingPosts.map((post) => (
            <div key={post.id} className="d-flex mb-4">
              <div className="me-3">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={80}
                  height={80}
                  className="img-fluid"
                />
              </div>
              <div>
                <div
                  style={{ color: "#a9b5c5", fontSize: "12px" }}
                  className="mb-1"
                >
                  {post.date} / in{" "}
                  <Link href="#" style={{ color: "#00a6eb" }}>
                    {post.category}
                  </Link>
                </div>
                <h5
                  style={{ fontSize: "18px", color: "#fff", lineHeight: 1.5 }}
                >
                  {post.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SidebarWidget title="Categories" items={categories} />

      <div className="widget-item mb-4">
        <h4
          className="widget-title text-white ps-3 mb-4"
          style={{ fontWeight: 700, fontStyle: "italic" }}
        >
          Latest Comments
        </h4>
        <div className="px-2">
          {comments.map((comment) => (
            <div key={comment.id} className="d-flex mb-4">
              <div className="me-3">
                <Image
                  src={comment.avatar}
                  alt={comment.name}
                  width={64}
                  height={64}
                  className="rounded-circle"
                />
              </div>
              <div className="pt-2">
                <div
                  style={{ fontSize: "16px", color: "#fff", fontWeight: 500 }}
                >
                  <Link href="#" style={{ color: "#00a6eb" }}>
                    {comment.name}
                  </Link>
                  <span style={{ color: "#a9b5c5" }}> On </span>
                  {comment.article}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="widget-item mb-4">
        <Link href="#" className="d-block">
          <Image
            src="/img/add.jpg"
            alt="Advertisement"
            width={300}
            height={250}
            className="img-fluid"
          />
        </Link>
      </div>
    </div>
  );
};

export default BlogSidebar;
