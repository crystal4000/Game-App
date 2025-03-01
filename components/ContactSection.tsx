"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

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
        background: "linear-gradient(135deg, #f5f9ff 0%, #e1f0ff 100%)",
      }}
    >
      <Container>
        <div
          className="mb-5 w-100 rounded overflow-hidden"
          style={{
            boxShadow: "0 5px 20px rgba(0, 166, 235, 0.1)",
          }}
        >
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

        <Row className="g-4">
          <Col lg={7} className="order-2 order-lg-1">
            <div
              className="bg-white p-4 p-md-5 rounded"
              style={{
                boxShadow: "0 5px 20px rgba(0, 166, 235, 0.1)",
              }}
            >
              <h3
                className="mb-4"
                style={{
                  color: "#0a2254",
                  fontWeight: 700,
                  borderLeft: "3px solid #00a6eb",
                  paddingLeft: "15px",
                }}
              >
                Send us a message
              </h3>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Control
                    type="text"
                    placeholder="Your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="modern-input"
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
                    className="modern-input"
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
                    className="modern-input"
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
                    className="modern-input"
                    style={{ minHeight: "156px" }}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="border-0"
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    padding: "16px 30px",
                    backgroundColor: "#00a6eb",
                    color: "#fff",
                    textTransform: "uppercase",
                    minWidth: "186px",
                    borderRadius: "6px",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#0a2254";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0, 166, 235, 0.3)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#00a6eb";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
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
            </div>
          </Col>

          <Col lg={5} className="order-1 order-lg-2 mb-lg-0">
            <div
              className="bg-white p-4 p-md-5 rounded h-100 d-flex flex-column"
              style={{
                boxShadow: "0 5px 20px rgba(0, 166, 235, 0.1)",
              }}
            >
              <h3
                className="mb-4"
                style={{
                  color: "#0a2254",
                  fontWeight: 700,
                  borderLeft: "3px solid #00a6eb",
                  paddingLeft: "15px",
                }}
              >
                Howdy! Say hello
              </h3>

              <p
                className="mb-5"
                style={{ fontSize: "16px", color: "#495057", lineHeight: 1.7 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.....
              </p>

              <div className="mt-auto">
                <div
                  className="d-flex mb-4 align-items-center p-3 rounded"
                  style={{
                    backgroundColor: "#f5f9ff",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#e1f0ff";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#f5f9ff";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="me-4 d-flex align-items-center justify-content-center"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#00a6eb",
                      borderRadius: "50%",
                      color: "#ffffff",
                      fontSize: "18px",
                    }}
                  >
                    <FaMapMarkerAlt />
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#0a2254",
                    }}
                  >
                    Main Str, no 23, New York
                  </div>
                </div>

                <div
                  className="d-flex mb-4 align-items-center p-3 rounded"
                  style={{
                    backgroundColor: "#f5f9ff",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#e1f0ff";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#f5f9ff";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="me-4 d-flex align-items-center justify-content-center"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#00a6eb",
                      borderRadius: "50%",
                      color: "#ffffff",
                      fontSize: "18px",
                    }}
                  >
                    <FaPhoneAlt />
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#0a2254",
                    }}
                  >
                    +546 990221 123
                  </div>
                </div>

                <div
                  className="d-flex align-items-center p-3 rounded"
                  style={{
                    backgroundColor: "#f5f9ff",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#e1f0ff";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#f5f9ff";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="me-4 d-flex align-items-center justify-content-center"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#00a6eb",
                      borderRadius: "50%",
                      color: "#ffffff",
                      fontSize: "18px",
                    }}
                  >
                    <FaEnvelope />
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#0a2254",
                    }}
                  >
                    hosting@contact.com
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Custom CSS for form inputs */}
      <style jsx>{`
        :global(.modern-input) {
          background-color: #f5f9ff !important;
          border: 1px solid #e1f0ff !important;
          border-radius: 6px !important;
          color: #0a2254 !important;
          padding: 12px 15px !important;
          font-size: 15px !important;
          transition: all 0.3s ease !important;
        }

        :global(.modern-input::placeholder) {
          color: #a9b5c5 !important;
        }

        :global(.modern-input:focus) {
          box-shadow: 0 0 0 3px rgba(0, 166, 235, 0.15) !important;
          border-color: #00a6eb !important;
          outline: none !important;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
