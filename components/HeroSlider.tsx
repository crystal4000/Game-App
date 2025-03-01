"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Carousel, Container } from "react-bootstrap";
import { HeroSlide } from "@/types";

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const slides: HeroSlide[] = [
    {
      id: 1,
      title: "Game on!",
      description:
        "Fusce erat dui, venenatis et erat in, vulputate dignissim lacus. Donec vitae tempus dolor, sit amet elementum lorem. Ut cursus tempor turpis.",
      image: "/img/slider-bg-1.jpg",
      btnText: "Read More",
      btnLink: "#",
    },
    {
      id: 2,
      title: "Game on!",
      description:
        "Fusce erat dui, venenatis et erat in, vulputate dignissim lacus. Donec vitae tempus dolor, sit amet elementum lorem. Ut cursus tempor turpis.",
      image: "/img/slider-bg-2.jpg",
      btnText: "Read More",
      btnLink: "#",
    },
    {
      id: 3,
      title: "Game on!",
      description:
        "Fusce erat dui, venenatis et erat in, vulputate dignissim lacus. Donec vitae tempus dolor, sit amet elementum lorem. Ut cursus tempor turpis.",
      image: "/img/slider-bg-3.jpg",
      btnText: "Read More",
      btnLink: "#",
    },
    {
      id: 4,
      title: "Game on!",
      description:
        "Fusce erat dui, venenatis et erat in, vulputate dignissim lacus. Donec vitae tempus dolor, sit amet elementum lorem. Ut cursus tempor turpis.",
      image: "/img/slider-bg-4.jpg",
      btnText: "Read More",
      btnLink: "#",
    },
    {
      id: 5,
      title: "Game on!",
      description:
        "Fusce erat dui, venenatis et erat in, vulputate dignissim lacus. Donec vitae tempus dolor, sit amet elementum lorem. Ut cursus tempor turpis.",
      image: "/img/slider-bg-5.jpg",
      btnText: "Read More",
      btnLink: "#",
    },
  ];

  return (
    <section className="hero-section overflow-hidden">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={true}
        indicators={false}
        interval={5000}
        wrap={true}
        pause="hover"
        fade
        prevIcon={<span className="d-none"></span>}
        nextIcon={
          <button className="d-none d-md-block carousel-custom-control next position-absolute top-50 end-5 translate-middle-y z-1 border-0 p-0 bg-transparent">
            <div className="play-button"></div>
          </button>
        }
      >
        {slides.map((slide) => (
          <Carousel.Item
            key={slide.id}
            className="position-relative overflow-hidden hero-slide"
            style={{ borderBottom: "2px solid #00a6eb" }}
          >
            <div
              className="position-absolute w-100 h-100 top-0 start-0 bg-set"
              style={{
                backgroundImage: `url(${slide.image})`,
                height: "100%",
              }}
            />
            <div
              className="position-absolute w-100 h-100 top-0 start-0"
              style={{
                backgroundColor: "rgba(10, 34, 84, 0.7)",
                zIndex: 1,
              }}
            />
            <Carousel.Caption
              className="h-100 d-flex align-items-center justify-content-center text-center"
              style={{ zIndex: 2 }}
            >
              <Container>
                <h1
                  className="fw-bolder mb-3 text-white hero-title"
                  style={{ textShadow: "0 0 30px rgba(0, 166, 235, 0.4)" }}
                >
                  {slide.title}
                </h1>
                <p className="mx-auto mb-5 hero-description">
                  {slide.description}
                </p>
                <Link
                  href={slide.btnLink}
                  className="site-btn "
                  style={{
                    backgroundColor: "#00a6eb",
                    color: "#0a2254",
                    border: "none",
                    padding: "16px 30px",
                    display: "inline-flex",
                    alignItems: "center",
                    fontWeight: 700,
                    fontSize: "14px",
                    textTransform: "uppercase",
                    position: "relative",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#0a2254";
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 20px rgba(0, 166, 235, 0.3)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#00a6eb";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {slide.btnText}{" "}
                  <Image
                    src="/img/icons/double-arrow.png"
                    alt="#"
                    width={20}
                    height={10}
                    className="ms-2 img-fluid"
                  />
                </Link>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Responsive styles */}
      <style jsx global>{`
        .hero-slide {
          height: 100vh;
          max-height: 921px;
        }

        .hero-title {
          font-size: 140px;
          line-height: 1.1;
        }

        .hero-description {
          max-width: 1000px;
          color: #fff;
          font-size: 24px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Extra large devices (large desktops, less than 1400px) */
        @media (max-width: 1399.98px) {
          .hero-title {
            font-size: 120px;
          }

          .hero-description {
            font-size: 22px;
            max-width: 900px;
          }
        }

        /* Large devices (desktops, less than 1200px) */
        @media (max-width: 1199.98px) {
          .hero-title {
            font-size: 100px;
          }

          .hero-description {
            font-size: 20px;
            max-width: 800px;
          }
        }

        /* Medium devices (tablets, less than 992px) */
        @media (max-width: 991.98px) {
          .hero-title {
            font-size: 80px;
          }

          .hero-description {
            font-size: 18px;
            max-width: 700px;
          }
        }

        /* Small devices (landscape phones, less than 768px) */
        @media (max-width: 767.98px) {
          .hero-slide {
            height: 80vh;
          }

          .hero-title {
            font-size: 60px;
          }

          .hero-description {
            font-size: 16px;
            max-width: 100%;
          }
        }

        /* Extra small devices (portrait phones, less than 576px) */
        @media (max-width: 575.98px) {
          .hero-title {
            font-size: 42px;
          }

          .hero-description {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
