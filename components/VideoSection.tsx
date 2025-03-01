"use client";

import { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";

const VideoSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const sectionRef = useRef(null);
  const videoSrc = isVideoPlaying
    ? `https://www.youtube.com/embed/cuswh9q1r4E?autoplay=1`
    : "";

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  useEffect(() => {
    // Only set up the observer if the video is playing
    if (!isVideoPlaying) return;

    const options = {
      root: null, // viewport is the root
      rootMargin: "0px",
      threshold: 0.3, // 30% of the element visible
    };

    // Store the current value of the ref in a variable
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // If section is not at least 30% visible, stop the video
        if (!entry.isIntersecting && isVideoPlaying) {
          setIsVideoPlaying(false);
        }
      });
    }, options);

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    // Clean up the observer when component unmounts or video stops playing
    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [isVideoPlaying]);

  return (
    <section
      ref={sectionRef}
      className="position-relative"
      style={{
        minHeight: "757px",
        backgroundImage: isVideoPlaying ? "none" : "url(/img/promo-bg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundColor: "#0a1e50", // Dark blue background similar to the image
      }}
    >
      {!isVideoPlaying ? (
        <>
          <div
            className="position-absolute start-50 top-50 translate-middle d-flex align-items-center justify-content-center"
            style={{
              width: "122px",
              height: "122px",
              borderRadius: "50%",
              backgroundColor: "rgba(0, 166, 235, 0.16)",
              cursor: "pointer",
              zIndex: 2,
            }}
            onClick={handlePlayVideo}
          >
            <div className="play-button"></div>
          </div>

          <Container className="position-absolute bottom-0 mb-5">
            <div
              className="position-relative ps-4"
              style={{ padding: "27px 0" }}
            >
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
        </>
      ) : (
        <div className="w-100 h-100 position-absolute top-0 start-0">
          <iframe
            src={videoSrc}
            title="Game Promo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
