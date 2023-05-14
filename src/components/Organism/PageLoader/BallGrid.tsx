"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const BallGridAnimation = () => {
  const ballGridRef = useRef(null);
  const divs = Array.from({ length: 100 }, (_, index) => index + 1);

  useEffect(() => {
    const ballGrid = ballGridRef.current;
    const rows = 100; // Number of rows in the grid
    const columns = 100; // Number of columns in the grid

    // Generate the ball grid

    // GSAP stagger animation
    gsap.from(".ball", {
      duration: 1,
      opacity: 1,
      scale: 1,
      stagger: {
        each: 0.1, // Time delay between each element animation
        from: "edges", // Start the animation from the top left corner
        grid: [rows, columns], // Define the grid size
        axis: "y", // Animate in both x and y directions
        // ease: "power2.out", // Animation easing function
      },
    });
  }, []);

  return (
    <div className="absolute left-0 top-0">
      <div
        ref={ballGridRef}
        className="grid grid-cols-[repeat(10,10vw)] grid-rows-[repeat(10,10vh)] w-screen
      h-screen"
        id="ballGrid"
      >
        {divs.map((number) => (
          <div className="ball w-full h-full bg-white block" key={number}></div>
        ))}
      </div>
    </div>
  );
};

export default BallGridAnimation;
