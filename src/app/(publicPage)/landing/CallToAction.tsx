"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";

export default function CallToAction() {
  const controls = useAnimation();

  // Floating animation loop on container
  useEffect(() => {
    controls.start({
      y: [0, -15, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    });
  }, [controls]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with slow zoom */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/CTA.jpg"
          alt="Elegant living space"
          fill
          priority
          className="object-cover object-center brightness-50"
        />
      </motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[30rem] h-[30rem] rounded-full bg-[#D72631]/20 blur-3xl z-0"
      />

      <motion.div
        animate={controls}
        className="relative z-10 text-center text-white"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Your <span className="text-[#D72631]">Next Home</span> Awaits
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-10 text-lg md:text-xl"
        >
          Browse exclusive rentals crafted for comfort, style, and ease — all in
          one place.
        </motion.p>
        <motion.button
          whileHover={{
            scale: 1.05,
            // boxShadow: "0 0 30px 6px #D72631",
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95 }}
          //   animate={{
          //     boxShadow: [
          //       "0 0 10px 2px #D72631",
          //       "0 0 25px 6px #D72631",
          //       "0 0 10px 2px #D72631",
          //     ],
          //   }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="bg-[#d74c26dd] cursor-pointer border animate-border px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#B51C29] transition"
        >
          Start Exploring
        </motion.button>
      </motion.div>
    </section>
  );
}
