import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaPinterest,
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";

const Footer = () => {
  const menuItems = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Games", link: "/games" },
    { id: 3, title: "Reviews", link: "/review" },
    { id: 4, title: "News", link: "/blog" },
    { id: 5, title: "Contact", link: "/contact" },
  ];

  const socialIcons = [
    { name: "pinterest", icon: <FaPinterest /> },
    { name: "facebook", icon: <FaFacebookF /> },
    { name: "twitter", icon: <FaTwitter /> },
    { name: "dribbble", icon: <FaDribbble /> },
    { name: "behance", icon: <FaBehance /> },
  ];

  return (
    <footer
      style={{
        textAlign: "center",
        background: "linear-gradient(to right, #072042 0%, #05152e 100%)",
        boxShadow: "0 -10px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container className="position-relative py-5">
        <div className="position-absolute start-0 bottom-0 d-none d-md-block">
          <Image
            src="/img/footer-left-pic.png"
            alt=""
            width={250}
            height={250}
            className="img-fluid"
            style={{ opacity: 0.6 }}
          />
        </div>

        <div className="position-absolute end-0 bottom-0 d-none d-md-block">
          <Image
            src="/img/footer-right-pic.png"
            alt=""
            width={130}
            height={130}
            className="img-fluid"
            style={{ opacity: 0.6 }}
          />
        </div>

        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Link
              href="/"
              className="d-flex justify-content-center align-items-center mb-4"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  padding: "15px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src="/img/logo2.png"
                  alt="OTS Logo"
                  width={50}
                  height={100}
                  className="img-fluid"
                />
              </div>
              <span
                className="ms-3 fs-4 fw-bolder text-white"
                style={{
                  textShadow: "0 2px 10px rgba(0, 166, 235, 0.3)",
                }}
              >
                OTS GAMES
              </span>
            </Link>

            <ul className="list-unstyled d-flex justify-content-center flex-wrap mb-4">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className="d-block text-white mx-3 text-decoration-none"
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      padding: "8px 12px",
                      transition: "all 0.3s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = "#00a6eb";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="d-flex justify-content-center mb-4">
              {socialIcons.map((social) => (
                <Link
                  key={social.name}
                  href="#"
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mx-2"
                  style={{
                    width: "40px",
                    height: "40px",
                    fontSize: "18px",
                    backgroundColor: "rgba(0, 166, 235, 0.2)",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#00a6eb";
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.boxShadow =
                      "0 0 15px rgba(0, 166, 235, 0.5)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(0, 166, 235, 0.2)";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            <div
              className="mt-4 pt-4"
              style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                <Link
                  href="https://colorlib.com"
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#00a6eb";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
                  }}
                >
                  Colorlib
                </Link>{" "}
                2018 @ All rights reserved
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
