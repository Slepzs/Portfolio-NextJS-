"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const BallGridAnimation = () => {
  const ballGridRef = useRef(null);

  useEffect(() => {
    const ballGrid = ballGridRef.current;
    const rows = 5; // Number of rows in the grid
    const columns = 5; // Number of columns in the grid

    // Generate the ball grid
    for (let i = 0; i < rows * columns; i++) {
      const ball = document.createElement("div");
      ball.classList.add("ball");
      if (ballGrid) {
        ballGrid.appendChild(ball);
      }
    }

    // GSAP stagger animation
    gsap.from(".ball", {
      duration: 1,
      opacity: 0,
      scale: 0,
      stagger: {
        each: 0.1, // Time delay between each element animation
        from: "edges", // Start the animation from the top left corner
        grid: [rows, columns], // Define the grid size
        axis: "x", // Animate in both x and y directions
        ease: "power2.out", // Animation easing function
      },
    });
  }, []);

  return <div ref={ballGridRef} id="ballGrid"></div>;
};

export default BallGridAnimation;
