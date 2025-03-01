"use client";

import { useState } from "react";
import { Container, Modal } from "react-bootstrap";

const VideoSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <section
        className="d-flex align-items-end position-relative"
        style={{
          height: "757px",
          backgroundImage: "url(/img/promo-bg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div
          className="position-absolute start-50 top-50 translate-middle d-flex align-items-center justify-content-center cursor-pointer"
          style={{
            width: "122px",
            height: "122px",
            borderRadius: "50%",
            backgroundColor: "rgba(0, 166, 235, 0.16)",
            cursor: "pointer",
          }}
          onClick={handleShow}
        >
          <div className="play-button"></div>
        </div>

        <Container className="mb-5">
          <div className="position-relative ps-4" style={{ padding: "27px 0" }}>
            <h2
              className="text-white text-uppercase mb-1"
              style={{
                fontSize: "48px",
                fontWeight: 700,
                fontStyle: "italic",
              }}
            >
              Promo video of the game
            </h2>
            <p
              className="text-white m-0"
              style={{ fontSize: "18px", color: "#a3a1b3", opacity: 0.7 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div
              className="position-absolute h-100 start-0 top-0"
              style={{
                width: "9px",
                borderLeft: "3px solid #00d0ff",
                backgroundColor: "#fff",
                boxShadow: "0 0 9px 3px rgba(0, 208, 255, 0.5)",
                transform: "translateX(-22px)",
              }}
            ></div>
          </div>
        </Container>
      </section>

      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Game Promo Video</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/uFsGy5x_fyQ"
              title="Game Promo Video"
              allowFullScreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoSection;
