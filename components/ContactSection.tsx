"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    alert("Thank you for your message! We will get back to you shortly.");
  };

  return (
    <section
      className="py-5"
      style={{
        padding: "104px 0",
        background: "linear-gradient(45deg, #0a2254 0%, #00a6eb 100%)",
      }}
    >
      <Container>
        <div className="mb-5 w-100">
          <div className="ratio ratio-21x9" style={{ maxHeight: "600px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14376.077865872314!2d-73.879277264103!3d40.757667781624285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1546528920522"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div>

        <Row>
          <Col lg={7} className="order-2 order-lg-1">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4">
                <Form.Control
                  type="text"
                  placeholder="Your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="custom-input"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control
                  type="email"
                  placeholder="Your e-mail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="custom-input"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="custom-input"
                />
              </Form.Group>

              <Form.Group className="mb-5">
                <Form.Control
                  as="textarea"
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="custom-input"
                />
              </Form.Group>

              <Button
                type="submit"
                className="site-btn border-0"
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  fontStyle: "italic",
                  padding: "24px 30px",
                  position: "relative",
                  backgroundColor: "#fff",
                  color: "#081624",
                  textTransform: "uppercase",
                  minWidth: "186px",
                  transition: "all 0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#00a6eb";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.color = "#081624";
                }}
              >
                Send message{" "}
                <Image
                  src="/img/icons/double-arrow.png"
                  alt="#"
                  width={20}
                  height={10}
                />
              </Button>
            </Form>
          </Col>

          <Col lg={5} className="order-1 order-lg-2 mb-5 mb-lg-0">
            <div className="text-white">
              <h3 className="mb-4">Howdy! Say hello</h3>
              <p
                className="mb-5"
                style={{ fontSize: "16px", color: "#fff", lineHeight: 1.9 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.....
              </p>

              <div className="d-flex mb-4">
                <div className="me-4">
                  <Image
                    src="/img/icons/location.png"
                    alt="Location"
                    width={32}
                    height={32}
                  />
                </div>
                <div
                  className="pt-1"
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#fff",
                  }}
                >
                  Main Str, no 23, New York
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="me-4">
                  <Image
                    src="/img/icons/phone.png"
                    alt="Phone"
                    width={32}
                    height={32}
                  />
                </div>
                <div
                  className="pt-1"
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#fff",
                  }}
                >
                  +546 990221 123
                </div>
              </div>

              <div className="d-flex">
                <div className="me-4">
                  <Image
                    src="/img/icons/mail.png"
                    alt="Email"
                    width={32}
                    height={32}
                  />
                </div>
                <div
                  className="pt-1"
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#fff",
                  }}
                >
                  hosting@contact.com
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Custom CSS to remove focus styles */}
      <style jsx>{`
        :global(.custom-input) {
          background-color: transparent !important;
          border: none !important;
          border-bottom: 2px solid rgba(255, 255, 255, 0.54) !important;
          border-radius: 0 !important;
          color: #fff !important;
          padding: 10px 0 !important;
          font-size: 16px !important;
          font-style: italic !important;
        }

        :global(.custom-input::placeholder) {
          color: #fff !important;
        }

        :global(.custom-input:focus) {
          box-shadow: none !important;
          outline: none !important;
          border-color: #9b91a6 !important;
        }

        :global(.custom-input:active) {
          box-shadow: none !important;
          outline: none !important;
          border-color: #9b91a6 !important;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
