"use client";

import { motion, Variants } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { AnimatedLayout, staggerContainer, fadeInUp } from "../components/AnimatedLayout";

// Define animation variants locally (in case not imported from AnimatedLayout)
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15, staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function About() {
  return (
    <AnimatedLayout>
      <div className="min-h-screen bg-gradient-to-b from-[#240055] to-[#D00096] text-white py-20">
        <motion.div
          className="max-w-6xl mx-auto px-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* ✅ Removed stray “>” and fixed variants usage */}
          <motion.h1
            className="text-6xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            About InstagramReelDL
          </motion.h1>

          <motion.div
            className="grid md:grid-cols-2 gap-12"
            variants={containerVariants}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                We aim to provide a seamless and efficient way to download Instagram reels,
                making content accessibility easier while respecting content creators' rights
                and Instagram's terms of service.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-bold mb-4">How It Works</h2>
              <p className="text-lg leading-relaxed">
                Our platform utilizes advanced APIs and processing techniques to extract
                high-quality video content from Instagram reels, ensuring you get the best
                possible download experience.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold mb-8">Connect With Us</h2>
            <div className="flex justify-center space-x-8">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-4xl hover:text-pink-400"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-4xl hover:text-pink-400"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-4xl hover:text-pink-400"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedLayout>
  );
}
