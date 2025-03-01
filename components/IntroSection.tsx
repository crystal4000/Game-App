"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { IntroItem } from "@/types";

const IntroSection = () => {
  const introItems: IntroItem[] = [
    {
      id: 1,
      title: "The best online game is out now!",
      category: "Games",
      date: "11.11.18",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida....",
    },
    {
      id: 2,
      title: "Top 5 best games in november",
      category: "Playstation",
      date: "11.11.18",
      excerpt:
        "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum labore suspendisse ultrices gravida....",
    },
    {
      id: 3,
      title: "Get this game at a promo price",
      category: "Reviews",
      date: "11.11.18",
      excerpt:
        "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida ncididunt ut labore....",
    },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(to right, #ffffff 0%, #f5f9ff 100%)",
        padding: "115px 0",
        borderTop: "1px solid rgba(0, 166, 235, 0.1)",
      }}
    >
      <Container>
        <Row>
          {introItems.map((item) => (
            <Col md={4} key={item.id}>
              <div
                className="text-box mb-4 mb-md-0"
                style={{
                  padding: "30px",
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  boxShadow: "0 10px 25px rgba(0, 166, 235, 0.1)",
                  transition: "all 0.3s ease",
                  height: "100%",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 30px rgba(0, 166, 235, 0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0, 166, 235, 0.1)";
                }}
              >
                <div
                  className="top-meta mb-3"
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#6c757d",
                  }}
                >
                  {item.date} / in{" "}
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
                    {item.category}
                  </Link>
                </div>
                <h3
                  className="mb-4"
                  style={{
                    maxWidth: "370px",
                    color: "#0a2254",
                    fontSize: "24px",
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="mb-4"
                  style={{
                    color: "#495057",
                    lineHeight: 1.7,
                  }}
                >
                  {item.excerpt}
                </p>
                <Link
                  href="#"
                  style={{
                    fontSize: "15px",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: "#00a6eb",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
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
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default IntroSection;
