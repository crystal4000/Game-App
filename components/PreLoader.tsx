"use client";

import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className="position-fixed w-100 h-100 top-0 left-0"
      style={{
        backgroundColor: "#000",
        zIndex: 999999,
        display: loading ? "block" : "none",
      }}
    >
      <div className="position-absolute top-50 start-50 translate-middle">
        <div
          className="spinner-border text-info"
          role="status"
          style={{ color: "#00a6eb" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
