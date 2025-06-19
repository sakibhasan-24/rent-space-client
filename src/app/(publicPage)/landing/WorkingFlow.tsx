"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiMessageCircle, FiKey } from "react-icons/fi";
import Image from "next/image";

type Step = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    title: "Find Your Place",
    description:
      "Browse thousands of curated listings in your favorite neighborhoods.",
    icon: <FiMapPin size={32} className="text-[#D72631]" />,
  },
  {
    title: "Connect Instantly",
    description:
      "Chat with verified hosts, schedule visits, and get your questions answered.",
    icon: <FiMessageCircle size={32} className="text-[#D72631]" />,
  },
  {
    title: "Move In Smoothly",
    description:
      "Book securely and move into your next space with full confidence.",
    icon: <FiKey size={32} className="text-[#D72631]" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Background image */}
      <Image
        src="/howToWork.jpg" // Ensure this is a clear, bright, high-res image
        alt="Background"
        fill
        className="object-cover object-center brightness-[1.1] contrast-90"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-16"
        >
          How It <span className="text-[#D72631]">Works</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group bg-white/5 border border-white/20 rounded-3xl p-8 text-left text-white backdrop-blur-md shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-[-1deg] transition-all duration-500"
            >
              {/* Glowing border accent (top-left & bottom-right) */}
              <div className="absolute top-0 left-0 w-4 h-4 bg-[#D72631] rounded-full blur-md group-hover:scale-150 transition" />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#D72631] rounded-full blur-md group-hover:scale-150 transition" />

              {/* Step number badge */}
              <div className="mb-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#D72631] text-white flex items-center justify-center font-bold text-sm">
                  {`0${index + 1}`}
                </div>
                <div className="text-white">{step.icon}</div>
              </div>

              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
