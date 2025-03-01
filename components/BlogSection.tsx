"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { BlogPost, TrendingPost, Category } from "@/types";
import TrendingWidget from "./TrendingWidget";
import SidebarWidget from "./SidebarWidget";

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The best online game is out now!",
      category: "Games",
      date: "11.11.18",
      image: "/img/blog/1.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius-mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consecte-tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.....",
      slug: "best-online-game",
    },
    {
      id: 2,
      title: "The best online game is out now!",
      category: "Games",
      date: "11.11.18",
      image: "/img/blog/2.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius-mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consecte-tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.....",
      slug: "best-online-game-2",
    },
    {
      id: 3,
      title: "The best online game is out now!",
      category: "Games",
      date: "11.11.18",
      image: "/img/blog/3.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius-mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consecte-tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.....",
      slug: "best-online-game-3",
    },
  ];

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

  const categories: Category[] = [
    { id: 1, name: "Games", slug: "games" },
    { id: 2, name: "Gaming Tips & Tricks", slug: "gaming-tips-tricks" },
    { id: 3, name: "Online Games", slug: "online-games" },
    { id: 4, name: "Team Games", slug: "team-games" },
    { id: 5, name: "Community", slug: "community" },
    { id: 6, name: "Uncategorized", slug: "uncategorized" },
  ];

  const blogFilters = ["Racing", "Shooters", "Strategy", "Online"];

  return (
    <section
      className="spad"
      style={{
        background: "linear-gradient(135deg, #f5f9ff 0%, #e1f0ff 100%)",
        padding: "100px 0",
      }}
    >
      <Container>
        <Row className="g-0">
          <Col xl={9} lg={8} md={7}>
            <div className="section-title mb-4">
              <h2
                style={{
                  color: "#0a2254",
                  fontWeight: 700,
                  position: "relative",
                  paddingBottom: "15px",
                }}
              >
                Latest News
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "60px",
                    height: "3px",
                    backgroundColor: "#00a6eb",
                  }}
                ></span>
              </h2>
            </div>

            <ul className="list-unstyled d-flex flex-wrap mb-5">
              {blogFilters.map((filter, index) => (
                <li key={index} className="me-2 mb-2">
                  <Link
                    href="#"
                    className="d-block px-4 py-3 fw-bold text-white"
                    style={{
                      backgroundColor: "#00a6eb",
                      fontSize: "16px",
                      borderRadius: "5px",
                      transition: "all 0.3s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#0a2254";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#00a6eb";
                    }}
                  >
                    {filter}
                  </Link>
                </li>
              ))}
            </ul>

            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="mb-5"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 5px 20px rgba(0, 166, 235, 0.1)",
                  transition: "all 0.3s ease",
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
                <Row className="g-0">
                  <Col lg={4} xs={12}>
                    <div style={{ height: "100%" }}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={300}
                        className="img-fluid h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Col>
                  <Col lg={8} xs={12} className="d-flex flex-column p-4">
                    <div
                      className="top-meta mb-2"
                      style={{ fontSize: "14px", color: "#6c757d" }}
                    >
                      {post.date} / in{" "}
                      <Link
                        href="#"
                        style={{
                          color: "#00a6eb",
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
                    <h3
                      className="mb-3"
                      style={{
                        color: "#0a2254",
                        fontWeight: 700,
                      }}
                    >
                      {post.title}
                    </h3>
                    <p style={{ color: "#495057" }}>{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        fontSize: "15px",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        color: "#00a6eb",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        marginTop: "auto",
                        transition: "all 0.3s",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = "#0a2254";
                        e.currentTarget.style.transform = "translateX(5px)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = "#00a6eb";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      Read More{" "}
                      <Image
                        src="/img/icons/double-arrow.png"
                        alt="#"
                        width={20}
                        height={10}
                      />
                    </Link>
                  </Col>
                </Row>
              </div>
            ))}
          </Col>

          <Col xl={3} lg={4} md={5} className="sidebar ps-md-4">
            <div>
              <TrendingWidget posts={trendingPosts} />
              <SidebarWidget title="Latest Comments" items={categories} />

              <div className="mb-5">
                <Link href="#" className="d-block">
                  <Image
                    src="/img/add.jpg"
                    alt="Advertisement"
                    width={300}
                    height={250}
                    className="img-fluid rounded shadow"
                  />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
