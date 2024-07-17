import React, { useEffect } from "react";
import "./LogoSlider.css"; // Import the custom CSS for keyframes and pseudo-elements
import { useState } from "react";

const LogoSlider = () => {
  const [img, setImg] = useState([
    { src: "src/assets/images/amazon.png", alt: "Amazon" },
    { src: "src/assets/images/flipkart.png", alt: "flipkart" },
    { src: "src/assets/images/google.png", alt: "google" },
    { src: "src/assets/images/ibm.png", alt: "ibm" },
    { src: "src/assets/images/mahindra.png", alt: "mahindra" },
    { src: "src/assets/images/microsoft.png", alt: "microsoft" },
    { src: "src/assets/images/cognizant.png", alt: "cognizant" },
    { src: "src/assets/images/samsung.png", alt: "samsung" },
    { src: "src/assets/images/capgemini.png", alt: "capgemini" },
    { src: "src/assets/images/hcl.png", alt: "hcl" },
    { src: "src/assets/images/tech-mahindra.png", alt: "tech-mahindra" },
  ]);

  return (
    <div className="logos overflow-hidden py-15 bg-transparent relative  ">
      <div className="logos-slide flex animate-slide">
        {img.concat(img).map((item, index) => (
          <img
            key={index}
            src={item.src}
            className="h-12 mx-10 blended-image"
            alt={item.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
