"use client";

import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function NotFound() {
  return (
    <>
      <div
        style={{
          padding: "150px 0 120px",
          backgroundImage: "url('/img/slider-bg-5.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          height: "100vh",
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(8, 22, 36, 0.85)",
            zIndex: 1,
          }}
        />

        <Container className="position-relative" style={{ zIndex: 2 }}>
          <Row className="justify-content-center text-center">
            <Col md={8} lg={6}>
              <h1
                className="display-1 text-white mb-4"
                style={{
                  fontSize: "120px",
                  fontWeight: 700,
                  textShadow: "0 0 20px rgba(0, 166, 235, 0.6)",
                }}
              >
                404
              </h1>

              <div className="position-relative my-5">
                <Image
                  src="/img/icons/double-arrow.png"
                  alt="Separator"
                  width={50}
                  height={25}
                  className="mx-auto"
                />
              </div>

              <h2 className="text-white mb-4">Page Not Found</h2>

              <p
                className="mb-5"
                style={{
                  fontSize: "18px",
                  color: "#fff",
                  lineHeight: 1.8,
                }}
              >
                Oops! The page you are looking for might have been removed, had
                its name changed, or is temporarily unavailable.
              </p>

              <Button
                href="/"
                className="site-btn border-0 mb-4"
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  fontStyle: "italic",
                  padding: "20px 30px",
                  position: "relative",
                  backgroundColor: "#fff",
                  color: "#081624",
                  textTransform: "uppercase",
                  minWidth: "200px",
                  transition: "all 0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#00a6eb";
                  e.currentTarget.style.color = "#081624";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.color = "#081624";
                }}
              >
                Back to Home{" "}
                <Image
                  src="/img/icons/double-arrow.png"
                  alt="#"
                  width={20}
                  height={10}
                />
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
