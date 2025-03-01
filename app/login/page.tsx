"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Here you would normally handle the login with your backend
      // This is a placeholder for demo purposes
      console.log("Logging in with:", formData);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to home page after successful login
      // window.location.href = '/'

      // For demo purposes, show an error
      setError(
        "This is a demo. Login functionality would be implemented with your actual authentication system."
      );
    } catch (err) {
      setError("Login failed. Please check your credentials and try again.");
      console.error("Login error:", err);
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
            <Col md={8} lg={6}>
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
                    Login to Your Account
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

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label style={{ color: "#0a2254", fontWeight: 600 }}>
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

                  <Form.Group className="mb-4">
                    <Form.Label style={{ color: "#0a2254", fontWeight: 600 }}>
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="custom-input"
                      placeholder="Enter your password"
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <Form.Check
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      label={
                        <span style={{ color: "#0a2254" }}>Remember me</span>
                      }
                    />

                    <Link
                      href="/forgot-password"
                      style={{
                        color: "#00a6eb",
                        textDecoration: "none",
                        fontWeight: 600,
                        transition: "all 0.3s",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = "#0a2254";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = "#00a6eb";
                      }}
                    >
                      Forgot Password?
                    </Link>
                  </div>

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
                        Logging in...
                      </span>
                    ) : (
                      <>
                        Login{" "}
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
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/register"
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
                      Register Now
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
