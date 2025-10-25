"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";

export default function TodoPage() {
  const [tasks, setTasks] = useState<{ text: string; done: boolean }[]>([]);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState<number | null>(null);

  const addTask = () => {
    if (!input.trim()) return;
    const copy = [...tasks];
    edit !== null
      ? (copy[edit].text = input)
      : copy.push({ text: input, done: false });
    setTasks(copy);
    setInput("");
    setEdit(null);
  };

  const toggle = (i: number) => {
    const copy = [...tasks];
    copy[i].done = !copy[i].done;
    setTasks(copy);
  };

  const remove = (i: number) => setTasks(tasks.filter((_, x) => x !== i));

  const editTask = (i: number) => {
    setInput(tasks[i].text);
    setEdit(i);
  };

  const clearAll = () => setTasks([]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-900 text-white flex flex-col items-center px-6 py-20">
      <Navbar />
      <motion.h1
        className="text-4xl font-bold text-purple-400 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        To-Do List ✨
      </motion.h1>

      <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10">
        {/* Input */}
        <div className="flex gap-2 mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tulis tugas..."
            className="flex-1 px-3 py-2 rounded bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <button
            onClick={addTask}
            className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition"
          >
            {edit !== null ? "💾 Simpan" : "➕ Tambah"}
          </button>
        </div>

        {/* Daftar Tugas */}
        {tasks.length === 0 ? (
          <p className="text-gray-400 text-center">Belum ada tugas 📭</p>
        ) : (
          <>
            <ul className="space-y-2 mb-4">
              <AnimatePresence>
                {tasks.map((t, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-between items-center bg-gray-800 px-3 py-2 rounded-md shadow-sm hover:bg-gray-700 transition"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={t.done}
                        onChange={() => toggle(i)}
                        className="accent-purple-500 cursor-pointer"
                      />
                      <span
                        className={`transition-all ${
                          t.done
                            ? "line-through text-gray-400 italic"
                            : "text-white"
                        }`}
                      >
                        {t.text}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => editTask(i)}
                        className="text-yellow-400 hover:text-yellow-300 transition"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => remove(i)}
                        className="text-red-400 hover:text-red-300 transition"
                      >
                        ❌
                      </button>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>

            <button
              onClick={clearAll}
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 py-2 rounded-md font-medium hover:opacity-90 transition"
            >
              🗑 Hapus Semua
            </button>
          </>
        )}
      </div>
    </main>
  );
}
