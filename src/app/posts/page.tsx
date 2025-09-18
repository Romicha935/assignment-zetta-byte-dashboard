"use client";

import PostCard from "@/components/card";
import { useFetch } from "@/hooks/useFetch";


interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostsPage() {
  const { data: posts, loading, error } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p className="text-center mt-10">Loading posts...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">❌ {error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts?.slice(0, 12).map((post, i) => (
          <PostCard key={post.id} post={post} index={i} />
        ))}
      </div>
    </div>
  );
}
