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
        background: "linear-gradient(45deg, #0a2254 0%, #00a6eb 100%)",
      }}
    >
      <Container>
        <Row className="g-0">
          <Col xl={9} lg={8} md={7}>
            <div className="section-title text-white mb-4">
              <h2>Latest News</h2>
            </div>

            <ul className="list-unstyled d-flex flex-wrap mb-5">
              {blogFilters.map((filter, index) => (
                <li key={index} className="me-2 mb-2">
                  <Link
                    href="#"
                    className="d-block px-4 py-3 fw-bold text-white"
                    style={{
                      backgroundColor: "#007bc7",
                      fontSize: "16px",
                      transition: "all 0.3s",
                    }}
                  >
                    {filter}
                  </Link>
                </li>
              ))}
            </ul>

            {blogPosts.map((post) => (
              <Row key={post.id} className="mb-5 g-0">
                <Col lg={4} xs={12} className="me-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={100}
                    className="img-fluid"
                  />
                </Col>
                <Col
                  lg={7}
                  xs={12}
                  className="text-box text-white d-flex flex-column"
                >
                  <div className="top-meta mb-4" style={{ fontSize: "18px" }}>
                    {post.date} / in{" "}
                    <Link href="#" style={{ color: "#00a6eb" }}>
                      {post.category}
                    </Link>
                  </div>
                  <h3 className="mb-5">{post.title}</h3>
                  <p style={{ color: "#fff" }}>{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="read-more text-white mt-auto"
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
                    className="img-fluid"
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
