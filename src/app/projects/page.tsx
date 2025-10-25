"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20">
      <Navbar />

      {/* Animasi judul */}
      <motion.h1
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h1>

      {/* Kartu proyek */}
      <motion.div
        className="bg-white/10 p-8 rounded-2xl shadow-lg text-center max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        whileHover={{ scale: 1.03 }}
      >
        <motion.h2
          className="text-2xl font-semibold mb-4"
          whileHover={{ color: "#a855f7" }}
          transition={{ duration: 0.2 }}
        >
          To-Do List App 📝
        </motion.h2>

        <p className="text-gray-300 mb-6">
          A simple SPA built using Next.js and TypeScript to manage your daily tasks.
        </p>

        <Link
          href="/projects/todo"
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition"
        >
          Open Project
        </Link>
      </motion.div>
    </main>
  );
}
