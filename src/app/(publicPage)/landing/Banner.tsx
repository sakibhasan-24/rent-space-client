"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

export default function Banner() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <Image
        src="/landing-splash.jpg"
        alt="Dining room"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 max-w-4xl mx-auto"
      >
        <h1 className="text-white text-6xl font-extrabold leading-tight max-w-[700px] drop-shadow-lg">
          Find the{" "}
          <span className="bg-gradient-to-r from-[#D9480F] via-[#F97316] to-[#DC2626] bg-clip-text text-transparent font-extrabold">
            Perfect Room
          </span>
        </h1>

        <p className="mt-6 text-white/90 text-xl max-w-[550px] font-medium drop-shadow-md">
          Live where comfort meets style — curated spaces just for you.
        </p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 w-full max-w-xl flex rounded-full bg-white/20 backdrop-blur-md border border-transparent hover:border-[#D9480F] shadow-lg transition-colors duration-300"
        >
          <FiSearch
            className="absolute left-5 top-1/2 -translate-y-1/2 text-white opacity-80 pointer-events-none"
            size={22}
          />
          <input
            type="text"
            placeholder="Search city, neighborhood, or address"
            className="flex-grow rounded-l-full bg-transparent px-14 py-4 text-white placeholder-white/80 focus:outline-none focus:ring-0 text-lg"
            aria-label="Search for rooms or apartments"
          />
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(217,72,15,0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full cursor-pointer bg-gradient-to-r from-[#D9480F] via-[#F97316] to-[#DC2626] px-8 py-4 text-white font-semibold shadow-md transition"
            aria-label="Search"
          >
            Search
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
