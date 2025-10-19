"use client";

import Image from "next/image";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">
      
      {/* FOTO */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/profile.png"
          alt="Profile"
          width={130}
          height={130}
          className="rounded-full mb-6 border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.4)]"
        />
      </motion.div>

      {/* HERO */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-2 text-center"
      >
        Hi, I'm <span className="text-pink-400">Septia</span> 👋
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-gray-300 text-center max-w-md mb-12"
      >
        Web Developer & Law Student who builds clean, modern web applications.
      </motion.p>

      {/* ABOUT */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
          Passionate about technology, UI/UX, and education. Currently exploring
          Next.js and developing a Learning Management System (LMS) platform.
        </p>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6 text-4xl">
          <SiHtml5 className="hover:scale-110 transition text-orange-500" />
          <SiCss3 className="hover:scale-110 transition text-blue-500" />
          <SiJavascript className="hover:scale-110 transition text-yellow-400" />
          <SiReact className="hover:scale-110 transition text-cyan-400" />
          <SiNextdotjs className="hover:scale-110 transition text-white" />
          <SiTailwindcss className="hover:scale-110 transition text-sky-400" />
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold mb-3">Contact</h2>
        <p className="text-gray-400 mb-4">
          Let’s build something amazing together!
        </p>
        <a
          href="mailto:example@email.com"
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-medium hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition"
        >
          Email Me
        </a>
      </motion.section>
    </main>
  );
}
