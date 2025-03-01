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
      <div
        className="widget-item mb-4"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 5px 20px rgba(0, 166, 235, 0.1)",
        }}
      >
        <Form className="position-relative mb-2">
          <Form.Control
            type="text"
            placeholder="Search..."
            style={{
              backgroundColor: "#f5f9ff",
              border: "1px solid #e1f0ff",
              borderRadius: "6px",
              color: "#0a2254",
              paddingRight: "70px",
              height: "42px",
            }}
          />
          <Button
            variant="link"
            className="position-absolute end-0 top-0 text-uppercase"
            style={{
              color: "#00a6eb",
              fontWeight: 700,
              fontSize: "14px",
              height: "42px",
              border: "none",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#0a2254";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "#00a6eb";
            }}
          >
            search
          </Button>
        </Form>
      </div>

      <div
        className="widget-item mb-4"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          padding: "25px 20px",
          boxShadow: "0 5px 20px rgba(0, 166, 235, 0.1)",
        }}
      >
        <h4
          className="widget-title mb-4"
          style={{
            color: "#0a2254",
            fontWeight: 700,
            borderLeft: "3px solid #00a6eb",
            paddingLeft: "15px",
          }}
        >
          TRENDING
        </h4>
        <div className="trending-widget">
          {trendingPosts.map((post) => (
            <div
              key={post.id}
              className="d-flex mb-4"
              style={{
                transition: "all 0.3s ease",
                padding: "10px",
                borderRadius: "8px",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#f5f9ff";
                e.currentTarget.style.transform = "translateX(5px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <div className="me-3">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={80}
                  height={80}
                  className="img-fluid rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <div
                  style={{ color: "#6c757d", fontSize: "12px" }}
                  className="mb-1"
                >
                  {post.date} / in{" "}
                  <Link
                    href="#"
                    style={{
                      color: "#00a6eb",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "all 0.3s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = "#0a2254";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = "#00a6eb";
                    }}
                  >
                    {post.category}
                  </Link>
                </div>
                <h5
                  style={{
                    fontSize: "16px",
                    color: "#0a2254",
                    lineHeight: 1.5,
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  {post.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="widget-item mb-4"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          padding: "25px 20px",
          boxShadow: "0 5px 20px rgba(0, 166, 235, 0.1)",
        }}
      >
        <h4
          className="widget-title mb-4"
          style={{
            color: "#0a2254",
            fontWeight: 700,
            borderLeft: "3px solid #00a6eb",
            paddingLeft: "15px",
          }}
        >
          CATEGORIES
        </h4>

        <ul className="list-unstyled px-2">
          {categories.map((item, index) => (
            <li
              key={index}
              style={{
                borderBottom: "1px solid #f0f0f0",
                padding: "8px 0",
              }}
            >
              <Link
                href={`/category/${item.slug}`}
                className="d-inline-block position-relative"
                style={{
                  fontSize: "15px",
                  color: "#495057",
                  fontWeight: 500,
                  transition: "all 0.3s",
                  paddingRight: "19px",
                  backgroundImage: "url(/img/icons/double-arrow.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right -120% center",
                  backgroundSize: "11px",
                  textDecoration: "none",
                  display: "block",
                  padding: "3px 0",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#00a6eb";
                  e.currentTarget.style.backgroundPosition = "right center";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "#495057";
                  e.currentTarget.style.backgroundPosition =
                    "right -120% center";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="widget-item mb-4"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          padding: "25px 20px",
          boxShadow: "0 5px 20px rgba(0, 166, 235, 0.1)",
        }}
      >
        <h4
          className="widget-title mb-4"
          style={{
            color: "#0a2254",
            fontWeight: 700,
            borderLeft: "3px solid #00a6eb",
            paddingLeft: "15px",
          }}
        >
          Latest Comments
        </h4>
        <div className="px-2">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="d-flex mb-4"
              style={{
                transition: "all 0.3s ease",
                padding: "10px",
                borderRadius: "8px",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#f5f9ff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <div className="me-3">
                <Image
                  src={comment.avatar}
                  alt={comment.name}
                  width={50}
                  height={50}
                  className="rounded-circle"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="pt-1">
                <div
                  style={{
                    fontSize: "14px",
                    color: "#495057",
                    fontWeight: 500,
                  }}
                >
                  <Link
                    href="#"
                    style={{
                      color: "#00a6eb",
                      textDecoration: "none",
                      fontWeight: 600,
                      transition: "all 0.3s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = "#0a2254";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = "#00a6eb";
                    }}
                  >
                    {comment.name}
                  </Link>
                  <span style={{ color: "#6c757d" }}> On </span>
                  {comment.article}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SidebarWidget title="Categories" items={categories} />
      <div className="widget-item mb-4">
        <Link
          href="#"
          className="d-block"
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            display: "block",
            boxShadow: "0 5px 20px rgba(0, 166, 235, 0.1)",
            transition: "all 0.3s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow =
              "0 10px 30px rgba(0, 166, 235, 0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 5px 20px rgba(0, 166, 235, 0.1)";
          }}
        >
          <Image
            src="/img/add.jpg"
            alt="Advertisement"
            width={300}
            height={250}
            className="img-fluid rounded"
          />
        </Link>
      </div>
    </div>
  );
};

export default BlogSidebar;
