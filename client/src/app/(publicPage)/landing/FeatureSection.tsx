"use client";

import { motion } from "framer-motion";
import { FiZap, FiLock, FiMapPin, FiHome } from "react-icons/fi";

const features = [
  {
    title: "Instant Listings",
    description: "Get real-time room availability updates across locations.",
    icon: <FiZap size={28} />,
  },
  {
    title: "Verified Hosts",
    description: "Stay with confidence — every host is verified and reviewed.",
    icon: <FiLock size={28} />,
  },
  {
    title: "Smart Search",
    description:
      "Find the perfect space using intelligent, location-based filters.",
    icon: <FiMapPin size={28} />,
  },
  {
    title: "Flexible Stays",
    description: "Book short or long-term stays with flexible lease options.",
    icon: <FiHome size={28} />,
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-[#0F0F0F] text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
        >
          Why Choose <span className="text-[#D9480F]">RentSpace?</span>
        </motion.h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg mb-16">
          Engineered to give you speed, trust, and control — just like a
          top-tier experience should.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white/5 border animate-border backdrop-blur-sm p-6 
              rounded-2xl hover:shadow-xl hover:border-[#D9480F] transition-all duration-300 "
            >
              <div className="mb-4 text-[#D9480F]">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
