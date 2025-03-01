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
    <section style={{ background: "#0a2254", padding: "115px 0" }}>
      <Container>
        <Row>
          {introItems.map((item) => (
            <Col md={4} key={item.id}>
              <div className="text-box text-white mb-4 mb-md-0">
                <div
                  className="top-meta mb-3"
                  style={{ fontSize: "18px", fontWeight: 500 }}
                >
                  {item.date} / in{" "}
                  <Link href="#" style={{ color: "#00a6eb" }}>
                    {item.category}
                  </Link>
                </div>
                <h3 className="mb-4" style={{ maxWidth: "370px" }}>
                  {item.title}
                </h3>
                <p className="mb-4" style={{ color: "#68647d" }}>
                  {item.excerpt}
                </p>
                <Link href="#" className="read-more text-white">
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
