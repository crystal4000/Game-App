import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import BlogSidebar from "@/components/BlogSidebar";
import { BlogPost } from "@/types";

const BlogList = () => {
  const [activePage, setActivePage] = useState(1);

  // Blog filters
  const filters = ["Racing", "Shooters", "Strategy", "Online"];

  // Mock blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The best VR games on the market",
      category: "Games",
      date: "11.11.18",
      image: "/img/blog-big/1.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.....",
      slug: "best-vr-games",
    },
    {
      id: 2,
      title: "The best online game is out now!",
      category: "Games",
      date: "11.11.18",
      image: "/img/blog-big/2.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.....",
      slug: "best-online-game",
    },
    {
      id: 3,
      title: "The best online game is out now!",
      category: "Games",
      date: "11.11.18",
      image: "/img/blog-big/3.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.....",
      slug: "best-online-game-2",
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        padding: "104px 0",
        background: "linear-gradient(45deg, #0a2254 0%, #00a6eb 100%)",
      }}
    >
      <Container>
        <Row>
          <Col xl={9} lg={8} md={7}>
            <ul className="list-unstyled d-flex flex-wrap mb-5">
              {filters.map((filter, index) => (
                <li key={index} className="me-2 mb-2">
                  <Link
                    href="#"
                    className="d-block px-4 py-3 fw-bold text-white"
                    style={{
                      backgroundColor: "#0a4780",
                      fontSize: "16px",
                      transition: "all 0.3s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#00a6eb";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#0a4780";
                    }}
                  >
                    {filter}
                  </Link>
                </li>
              ))}
            </ul>

            {blogPosts.map((post) => (
              <div key={post.id} className="mb-5">
                <div className="mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={500}
                    className="img-fluid w-100"
                  />
                </div>
                <div className="text-white">
                  <div
                    className="mb-3"
                    style={{ fontSize: "18px", color: "#a9b5c5" }}
                  >
                    {post.date} / in{" "}
                    <Link href="#" style={{ color: "#00a6eb" }}>
                      {post.category}
                    </Link>
                  </div>

                  <h3 className="mb-3">{post.title}</h3>
                  <p
                    className="mb-4"
                    style={{
                      fontSize: "16px",
                      color: "#a9b5c5",
                      lineHeight: 1.8,
                    }}
                  >
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="read-more text-white"
                    style={{
                      fontSize: "15px",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      fontStyle: "italic",
                      transition: "all 0.3s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = "#00a6eb";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = "#ffffff";
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
                </div>
              </div>
            ))}

            <div className="d-flex justify-content-center mt-5">
              {[1, 2, 3].map((page) => (
                <Link
                  key={page}
                  href={`/blog?page=${page}`}
                  className={`d-flex align-items-center justify-content-center rounded-circle text-white mx-1 ${
                    activePage === page ? "active" : ""
                  }`}
                  style={{
                    width: activePage === page ? "44px" : "38px",
                    height: activePage === page ? "44px" : "44px",
                    borderRadius: "50%",
                    fontSize: "16px",
                    fontWeight: 500,
                    border:
                      activePage === page
                        ? "2px solid #00a6eb"
                        : "2px solid transparent",
                    color: activePage === page ? "#00a6eb" : "#fff",
                    transition: "all 0.3s",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage(page);
                  }}
                  onMouseOver={(e) => {
                    if (activePage !== page) {
                      e.currentTarget.style.border = "2px solid #00a6eb";
                      e.currentTarget.style.color = "#00a6eb";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activePage !== page) {
                      e.currentTarget.style.border = "2px solid transparent";
                      e.currentTarget.style.color = "#fff";
                    }
                  }}
                >
                  {page < 10 ? `0${page}.` : `${page}.`}
                </Link>
              ))}
            </div>
          </Col>

          <Col xl={3} lg={4} md={5} className="sidebar">
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogList;
