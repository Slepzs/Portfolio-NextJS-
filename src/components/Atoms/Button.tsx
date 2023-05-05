"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function ButtonLink() {
  const myElementRef = useRef(null);

  useEffect(() => {
    const myElement = myElementRef.current;

    gsap.fromTo(
      myElement,
      {
        duration: 5,
        backgroundColor: "rgb(59 130 246)",
        color: "rgb(255 255 255)",
        ease: "power1.inOut",
        delay: 30,
      },
      {
        duration: 5,
        backgroundColor: "rgb(255 255 255)",
        color: "rgb(59 130 246)",
        ease: "power1.inOut",
        repeat: 1,
        yoyo: true,
        delay: 30,
      }
    );
  }, []);

  return (
    <div
      ref={myElementRef}
      className={`border-2 border-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded `}
    >
      <Link href="/">Contact</Link>
    </div>
  );
}
