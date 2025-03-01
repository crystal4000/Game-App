import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

interface Review {
  id: number;
  title: string;
  category: string;
  date: string;
  rating: number;
  image: string;
  excerpt: string;
  slug: string;
}

const ReviewList = () => {
  const [activePage, setActivePage] = useState(1);

  // Alphabet filter
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Mock reviews data
  const reviews: Review[] = [
    {
      id: 1,
      title: "Final Appocalipse",
      category: "Games",
      date: "11.11.18",
      rating: 4.5,
      image: "/img/review/1.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Vivamus volutpat nibh ac sollicitudin imperdiet. Donec scelerisque lorem sodales odio ultricies, nec rhoncus ex lobortis. Vivamus tincidunt sit amet sem id varius. Donec elementum aliquet tortor. Curabitur justo mi, efficitur sed eros aliquealiqua.....",
      slug: "final-appocalipse",
    },
    {
      id: 2,
      title: "Hounted Mansion 3",
      category: "Games",
      date: "11.11.18",
      rating: 4.5,
      image: "/img/review/2.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Vivamus volutpat nibh ac sollicitudin imperdiet. Donec scelerisque lorem sodales odio ultricies, nec rhoncus ex lobortis. Vivamus tincidunt sit amet sem id varius. Donec elementum aliquet tortor. Curabitur justo mi, efficitur sed eros aliquealiqua.....",
      slug: "hounted-mansion-3",
    },
    {
      id: 3,
      title: "Shooting Stuff",
      category: "Games",
      date: "11.11.18",
      rating: 3.5,
      image: "/img/review/3.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Vivamus volutpat nibh ac sollicitudin imperdiet. Donec scelerisque lorem sodales odio ultricies, nec rhoncus ex lobortis. Vivamus tincidunt sit amet sem id varius. Donec elementum aliquet tortor. Curabitur justo mi, efficitur sed eros aliquealiqua.....",
      slug: "shooting-stuff",
    },
    {
      id: 4,
      title: "Zombie War Nation 1",
      category: "Games",
      date: "11.11.18",
      rating: 4.5,
      image: "/img/review/4.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Vivamus volutpat nibh ac sollicitudin imperdiet. Donec scelerisque lorem sodales odio ultricies, nec rhoncus ex lobortis. Vivamus tincidunt sit amet sem id varius. Donec elementum aliquet tortor. Curabitur justo mi, efficitur sed eros aliquealiqua.....",
      slug: "zombie-war-nation-1",
    },
    {
      id: 5,
      title: "Jams'e Island 3",
      category: "Games",
      date: "11.11.18",
      rating: 2.5,
      image: "/img/review/5.jpg",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Vivamus volutpat nibh ac sollicitudin imperdiet. Donec scelerisque lorem sodales odio ultricies, nec rhoncus ex lobortis. Vivamus tincidunt sit amet sem id varius. Donec elementum aliquet tortor. Curabitur justo mi, efficitur sed eros aliquealiqua.....",
      slug: "jamse-island-3",
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        padding: "104px 0",
        background: "linear-gradient(135deg, #f5f9ff 0%, #e1f0ff 100%)",
      }}
    >
      <Container>
        <ul className="list-unstyled d-flex flex-wrap justify-content-center mb-5">
          {alphabet.map((letter) => (
            <li key={letter} className="m-1">
              <Link
                href={`/review?filter=${letter}`}
                className="d-flex align-items-center justify-content-center rounded-circle text-white"
                style={{
                  width: "40px",
                  height: "34px",
                  backgroundColor: "#00a6eb",
                  borderRadius: "17px",
                  transition: "all 0.3s",
                  fontSize: "15px",
                  fontWeight: 700,
                  boxShadow: "0 2px 8px rgba(0, 166, 235, 0.3)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#0a2254";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0, 166, 235, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#00a6eb";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(0, 166, 235, 0.3)";
                }}
              >
                {letter}
              </Link>
            </li>
          ))}
        </ul>

        {reviews.map((review) => (
          <div
            key={review.id}
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
              <Col lg={4}>
                <div style={{ height: "100%" }}>
                  <Image
                    src={review.image}
                    alt={review.title}
                    width={500}
                    height={300}
                    className="img-fluid h-100 w-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Col>
              <Col lg={8}>
                <div className="position-relative p-4">
                  <div
                    className="position-absolute top-0 end-0 text-end p-4"
                    style={{ zIndex: 1 }}
                  >
                    <div
                      style={{
                        backgroundColor: "#f5f9ff",
                        borderRadius: "8px",
                        padding: "10px 15px",
                        boxShadow: "0 3px 10px rgba(0, 166, 235, 0.1)",
                        display: "inline-block",
                      }}
                    >
                      <div
                        style={{
                          fontWeight: 500,
                          fontSize: "14px",
                          color: "#6c757d",
                          textTransform: "uppercase",
                          marginBottom: "2px",
                        }}
                      >
                        Rating
                      </div>
                      <h5
                        style={{
                          fontSize: "26px",
                          fontWeight: 700,
                          color: "#0a2254",
                          margin: 0,
                        }}
                      >
                        <span style={{ color: "#00a6eb" }}>
                          {review.rating}
                        </span>{" "}
                        <span style={{ fontSize: "18px", fontWeight: 500 }}>
                          / 5
                        </span>
                      </h5>
                    </div>
                  </div>

                  <div
                    className="mb-3"
                    style={{ fontSize: "14px", color: "#6c757d" }}
                  >
                    {review.date} / in{" "}
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
                      {review.category}
                    </Link>
                  </div>

                  <h3
                    className="mb-3"
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#0a2254",
                    }}
                  >
                    {review.title}
                  </h3>

                  <p
                    className="mb-4"
                    style={{
                      fontSize: "16px",
                      color: "#495057",
                      lineHeight: 1.7,
                    }}
                  >
                    {review.excerpt}
                  </p>

                  <Link
                    href={`/review/${review.slug}`}
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
            </Row>
          </div>
        ))}

        <div className="d-flex justify-content-center mt-5">
          {[1, 2, 3].map((page) => (
            <Link
              key={page}
              href={`/review?page=${page}`}
              className={`d-flex align-items-center justify-content-center rounded-circle mx-1 ${
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
                color: activePage === page ? "#00a6eb" : "#0a2254",
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 8px rgba(0, 166, 235, 0.2)",
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
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0, 166, 235, 0.3)";
                }
              }}
              onMouseOut={(e) => {
                if (activePage !== page) {
                  e.currentTarget.style.border = "2px solid transparent";
                  e.currentTarget.style.color = "#0a2254";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(0, 166, 235, 0.2)";
                }
              }}
            >
              {page < 10 ? `0${page}.` : `${page}.`}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ReviewList;
