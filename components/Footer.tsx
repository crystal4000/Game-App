import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";

const Footer = () => {
  const menuItems = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Games", link: "/games" },
    { id: 3, title: "Reviews", link: "/review" },
    { id: 4, title: "News", link: "/blog" },
    { id: 5, title: "Contact", link: "/contact" },
  ];

  return (
    <footer
      style={{
        textAlign: "center",
        background: "linear-gradient(to right, #072042 0%, #05152e 100%)",
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
          />
        </div>

        <div className="position-absolute end-0 bottom-0 d-none d-md-block">
          <Image
            src="/img/footer-right-pic.png"
            alt=""
            width={130}
            height={130}
            className="img-fluid"
          />
        </div>

        <Link
          href="/"
          className="d-flex justify-content-center align-items-center mb-4"
        >
          <Image
            src="/img/logo2.png"
            alt="OTS Logo"
            width={50}
            height={100}
            className="img-fluid"
          />
          <span className="ms-2 fs-4 fw-bolder text-white">OTS GAMES</span>
        </Link>

        <ul className="list-unstyled d-flex justify-content-center flex-wrap mb-4">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link}
                className="d-block text-white mx-3 text-decoration-none"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="d-flex justify-content-center mb-4">
          {["pinterest", "facebook", "twitter", "dribbble", "behance"].map(
            (social) => (
              <Link
                key={social}
                href="#"
                className="d-inline-flex align-items-center justify-content-center rounded-circle text-white mx-2"
                style={{
                  width: "32px",
                  height: "32px",
                  fontSize: "12px",
                  backgroundColor: "rgba(0, 166, 235, 0.2)",
                }}
              >
                <i className={`fa fa-${social}`}></i>
              </Link>
            )
          )}
        </div>

        <div
          style={{
            fontSize: "12px",
            fontWeight: 500,
            color: "#fff",
            opacity: 0.5,
          }}
        >
          <Link href="https://colorlib.com" style={{ color: "#fff" }}>
            Colorlib
          </Link>{" "}
          2018 @ All rights reserved
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
