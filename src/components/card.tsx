"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostCard({ post, index }: { post: Post; index: number }) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow p-4 hover:shadow-md transition"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-600 line-clamp-2">{post.body}</p>
      <Link
        href={`/posts/${post.id}`}
        className="mt-3 inline-block text-indigo-600 hover:underline"
      >
        Read more →
      </Link>
    </motion.div>
  );
}
