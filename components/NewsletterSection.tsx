"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { Container, Form, Button } from "react-bootstrap";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    console.log("Subscribing email:", email);
    // Reset form
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <section
      style={{
        padding: "108px 0 95px",
        background: "linear-gradient(to right, #072042 0%, #05152e 100%)",
      }}
    >
      <Container className="text-center">
        <h2
          className="text-white mb-5"
          style={{
            fontSize: "48px",
            fontWeight: 700,
            fontStyle: "italic",
            textTransform: "uppercase",
          }}
        >
          Subscribe to our newsletter
        </h2>

        <Form
          onSubmit={handleSubmit}
          className="d-flex flex-column flex-md-row justify-content-center align-items-center"
        >
          <Form.Control
            type="email"
            placeholder="ENTER YOUR E-MAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              fontSize: "14px",
              fontWeight: 700,
              fontStyle: "italic",
              color: "#fff",
              border: "none",
              borderBottom: "2px solid #9b91a6",
              background: "none",
              height: "63px",
              marginRight: "26px",
              width: "100%",
              maxWidth: "787px",
            }}
            className="mb-3 mb-md-0 bg-transparent"
          />

          <Button type="submit" className="site-btn">
            Subscribe{" "}
            <Image
              src="/img/icons/double-arrow.png"
              alt="#"
              width={20}
              height={10}
            />
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default NewsletterSection;
