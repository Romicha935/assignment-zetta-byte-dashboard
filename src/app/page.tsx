"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="p-6 mt-20">
      <h1 className="text-3xl font-bold mb-4">Welcome, My Dashboard Page!</h1>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="bg-blue-200 p-4 rounded">Total Posts: 100</div>
        <div className="bg-green-200 p-4 rounded">Total Users: 50</div>
        <div className="bg-red-200 p-4 rounded">Revenue: $500</div>
      </motion.div>
    </div>
  );
}
