"use client";

import { motion } from "framer-motion";
import { FiGithub, FiMail } from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-[#0f0f0f] text-white border-t border-white/10 py-14 px-6 relative z-10"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-extrabold mb-2 tracking-wide">
            🏠 RentSpace
          </h2>
          <p className="text-sm text-gray-400">
            Curated rentals for modern living. Discover comfort and style in
            every space.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <Link
            href="/"
            className="text-sm text-gray-300 hover:text-[#D72631] transition"
          >
            Home
          </Link>
          <Link
            href="/how-it-works"
            className="text-sm text-gray-300 hover:text-[#D72631] transition"
          >
            How It Works
          </Link>
          <Link
            href="/listings"
            className="text-sm text-gray-300 hover:text-[#D72631] transition"
          >
            Explore Rentals
          </Link>
        </div>

        {/* Contact + Socials */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2">Get In Touch</h3>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px #D72631" }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open(
                "https://github.com/sakibhasan-24/rent-space-client",
                "_blank"
              )
            }
            className="flex items-center gap-2 bg-[#D72631] hover:bg-[#B51C29] text-white px-5 py-2 rounded-full font-medium shadow-md transition"
          >
            <FiMail className="text-xl" /> Contact Us
          </motion.button>

          <Link
            href="https://github.com/sakibhasan-24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
          >
            <FiGithub className="text-lg" />
            View GitHub Repo
          </Link>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RentSpace. All rights reserved. |{" "}
        <Link href="/terms" className="hover:text-[#D72631]">
          Terms
        </Link>{" "}
        ·{" "}
        <Link href="/privacy" className="hover:text-[#D72631]">
          Privacy
        </Link>
      </div>
    </motion.footer>
  );
}
