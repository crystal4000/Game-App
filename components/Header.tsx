"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Nav, Navbar } from "react-bootstrap";
import { MenuItem } from "@/types";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const menuItems: MenuItem[] = [
    { id: 1, title: "Home", link: "/" },
    {
      id: 2,
      title: "Games",
      link: "/games",
    },
    { id: 3, title: "Reviews", link: "/review" },
    { id: 4, title: "News", link: "/blog" },
    { id: 5, title: "Contact", link: "/contact" },
  ];

  // Custom styles for nav links
  const navLinkStyle = {
    transition: "color 0.3s, transform 0.2s",
  };

  const navLinkHoverStyle = {
    color: "#00a6eb",
    transform: "translateY(-2px)",
  };

  const navLinkActiveStyle = {
    color: "#00a6eb",
    fontWeight: "bold",
    borderBottom: "2px solid #00a6eb",
  };

  return (
    <header
      className="position-absolute w-100 top-0 start-0"
      style={{ zIndex: 99 }}
    >
      {/* Top follow us bar - only visible on desktop */}
      <div className="d-none d-lg-block" style={{ backgroundColor: "#0a2254" }}>
        <Container
          fluid
          className="px-4 py-2 d-flex justify-content-end align-items-center"
        >
          <span className="text-white me-2">Follow us:</span>
          {["pinterest", "facebook", "twitter", "dribbble", "behance"].map(
            (social) => (
              <Link
                key={social}
                href="#"
                className="d-inline-flex align-items-center justify-content-center rounded-circle text-white ms-2"
                style={{
                  width: "30px",
                  height: "30px",
                  fontSize: "12px",
                  backgroundColor: "rgba(0, 166, 235, 0.3)",
                  transition: "transform 0.3s, background-color 0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(0, 166, 235, 0.7)";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(0, 166, 235, 0.3)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <i className={`fa fa-${social}`}></i>
              </Link>
            )
          )}
        </Container>
      </div>

      {/* Main header */}
      <div
        style={{
          backgroundColor: "#081624",
          boxShadow: "0 0 9px 3px rgba(0, 208, 255, 0.24)",
        }}
        className="mx-md-5 mx-0 mt-md-3 mt-0"
      >
        <Container fluid className="px-4 py-3">
          <Navbar expand="lg" className="p-0">
            <Link
              href="/"
              className="site-logo navbar-brand me-auto d-flex align-items-center"
            >
              <Image
                src="/img/logo2.png"
                alt="OTS Games & Gadgets Logo"
                width={50}
                height={100}
                className="img-fluid"
              />
              <span className="ms-2 fs-4 fw-bolder text-white">OTS GAMES</span>
            </Link>

            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded(!expanded)}
              className="border-0"
              style={{ color: "#fff" }}
            >
              <span
                className="navbar-toggler-icon"
                style={{ filter: "brightness(0) invert(1)" }}
              ></span>
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto text-md-center text-center mt-2">
                {menuItems.map((item) => (
                  <Nav.Link
                    key={item.id}
                    as={Link}
                    href={item.link}
                    className="text-white px-3 py-2 position-relative"
                    style={navLinkStyle}
                    onMouseOver={(e) => {
                      Object.assign(e.currentTarget.style, navLinkHoverStyle);
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                    onMouseDown={(e) => {
                      Object.assign(e.currentTarget.style, navLinkActiveStyle);
                    }}
                    onMouseUp={(e) => {
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.fontWeight = "normal";
                      e.currentTarget.style.borderBottom = "none";
                    }}
                  >
                    {item.title}
                  </Nav.Link>
                ))}
              </Nav>

              {/* User panel for mobile view */}
              <div className="d-lg-none mt-3 mb-2">
                <Link
                  href="/login"
                  className="text-white text-decoration-none d-block py-2 text-center rounded-pill"
                  style={{
                    background:
                      "linear-gradient(45deg, #0a2254 0%, #00a6eb 100%)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 8px rgba(0, 166, 235, 0.5)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <i className="fa fa-user me-2"></i> Login / Register
                </Link>
              </div>

              {/* User panel for desktop view */}
              <div className="user-panel d-none d-lg-block text-white ms-auto">
                <Link
                  href="/login"
                  className="login-btn text-white text-decoration-none rounded-pill px-3 py-2"
                  style={{
                    background:
                      "linear-gradient(45deg, #0a2254 0%, #00a6eb 100%)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 8px rgba(0, 166, 235, 0.5)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <i className="fa fa-user me-2"></i> Login / Register
                </Link>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    </header>
  );
};

export default Header;
