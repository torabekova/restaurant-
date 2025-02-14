import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeSilider.css";
import villa1 from "./img/villa1.jpg";
import villa3 from "./img/villa3.jpg";
import yangivilla2 from "./img/yangivilla2.jpg";
import yangivilla3 from "./img/villayangi3.webp";

const SliderSection = () => {
  const navigate = useNavigate();

  interface Slide {
    id: number;
    content: string;
    bgImage: string;
  }

  const slides: Slide[] = [
    { id: 1, content: "hotel 1", bgImage: villa1 },
    { id: 2, content: "hotel 2", bgImage: yangivilla2 },
    { id: 3, content: "hotel 3", bgImage: yangivilla3 },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      id="about"
      className="slider-section"
      style={{
        backgroundColor: "#F0FBFF",
        maxWidth: "2000px",
        width: "100%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div className="slider">
        <div
          className="slide"
          style={{
            backgroundImage: `url(${slides[currentSlide].bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px", // Set the height of the slide
            color: "white", // Text color to ensure visibility
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Optional text shadow for better visibility
          }}
        >
          {slides[currentSlide].content}
        </div>
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="content">
        <h3>Nega bizni tanlaysiz?</h3>
        <h1 style={{ color: "#000" }}>
          Tabiatning ulug‘vorligi sizni kutmoqda
        </h1>
        <p style={{ color: "#000" }}>
          Nafasni qaytaruvchi go‘zallik, osoyishtalik va beg‘ubor manzaralar
          mo‘jizalarini his eting, har bir lahza sizni tabiatning ulug‘vorligi
          bilan bog‘laydi.
        </p>
        <button className="read-more" onClick={() => navigate("/details")}>
          Ko'proq ko'rish
        </button>
      </div>
    </div>
  );
};

export default SliderSection;
