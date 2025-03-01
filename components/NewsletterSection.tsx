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
            fontSize: "42px",
            fontWeight: 700,
            textTransform: "uppercase",
            position: "relative",
            display: "inline-block",
            paddingBottom: "15px",
          }}
        >
          Subscribe to our newsletter
          <span
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "3px",
              backgroundColor: "#00a6eb",
            }}
          ></span>
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
            className="mb-3 mb-md-0 bg-transparent text-white custom-input"
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

        {/* Custom CSS to remove focus styles */}
        <style jsx>{`
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
      </Container>
    </section>
  );
};

export default NewsletterSection;
