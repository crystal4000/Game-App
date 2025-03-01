"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }

    if (!formData.agreeTerms) {
      setError("You must agree to the Terms and Conditions");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Here you would normally handle registration with your backend
      // This is a placeholder for demo purposes
      console.log("Registering with:", formData);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success message
      setSuccessMessage(
        "Registration successful! You can now login to your account."
      );

      // Reset form
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
      });
    } catch (err) {
      setError("Registration failed. Please try again later.");
      console.error("Registration error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section
        className="py-5"
        style={{
          padding: "104px 0",
          background: "linear-gradient(135deg, #f5f9ff 0%, #e1f0ff 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <div
                className="p-4 p-md-5"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(0, 166, 235, 0.1)",
                  boxShadow: "0 10px 30px rgba(0, 166, 235, 0.15)",
                  borderRadius: "12px",
                }}
              >
                <div className="text-center mb-4">
                  <h2
                    style={{
                      color: "#0a2254",
                      fontWeight: 700,
                    }}
                  >
                    Create Your Account
                  </h2>
                  <div
                    style={{
                      height: "3px",
                      width: "60px",
                      backgroundColor: "#00a6eb",
                      margin: "15px auto",
                    }}
                  />
                </div>
                {error && (
                  <Alert variant="danger" className="mb-4">
                    {error}
                  </Alert>
                )}

                {successMessage && (
                  <Alert variant="success" className="mb-4">
                    {successMessage}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label className="text-white">Username</Form.Label>
                        <Form.Control
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          required
                          className="custom-input"
                          placeholder="Choose a username"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label className="text-white">
                          Email Address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="custom-input"
                          placeholder="Enter your email"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label className="text-white">Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                          className="custom-input"
                          placeholder="Create a password"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label className="text-white">
                          Confirm Password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                          className="custom-input"
                          placeholder="Confirm your password"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Check
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      label={
                        <span style={{ color: "#0a2254" }}>
                          I agree to the{" "}
                          <Link
                            href="/terms"
                            style={{ color: "#00a6eb", transition: "all 0.3s" }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.color = "#ffffff";
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.color = "#00a6eb";
                            }}
                          >
                            Terms and Conditions
                          </Link>{" "}
                          and{" "}
                          <Link
                            href="/privacy"
                            style={{ color: "#00a6eb", transition: "all 0.3s" }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.color = "#0a2254";
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.color = "#00a6eb";
                            }}
                          >
                            Privacy Policy
                          </Link>
                        </span>
                      }
                      required
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="w-100 site-btn border-0 mb-4"
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      fontStyle: "italic",
                      padding: "15px 30px",
                      position: "relative",
                      backgroundColor: "#00a6eb",
                      color: "#000",
                      textTransform: "uppercase",
                      transition: "all 0.3s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#0a2254";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#00a6eb";
                    }}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="d-flex align-items-center justify-content-center">
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Creating Account...
                      </span>
                    ) : (
                      <>
                        Register{" "}
                        <Image
                          src="/img/icons/double-arrow.png"
                          alt="#"
                          width={20}
                          height={10}
                        />
                      </>
                    )}
                  </Button>

                  <div className="text-center" style={{ color: "#0a2254" }}>
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      style={{
                        color: "#00a6eb",
                        textDecoration: "none",
                        fontWeight: 700,
                        transition: "all 0.3s",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = "#0a2254";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = "#00a6eb";
                      }}
                    >
                      Login Here
                    </Link>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
        {/* Custom CSS to remove focus styles */}
        <style jsx>{`
          :global(.custom-input) {
           background-color: f5f9ff !important;
            border: "1px solid #e1f0ff";
            border-radius: 6px;
            padding: 12px 15px !important;
            font-size: 16px !important;
            font-style: italic !important;
          }
          :global(.custom-input:focus) {
            box-shadow: none !important;
            outline: none !important;
            border-color: #9b91a6 !important;

          :global(.custom-input:active) {
            box-shadow: none !important;
            outline: none !important;
            border-color: #9b91a6 !important;
          }
        `}</style>
      </section>
    </>
  );
}
