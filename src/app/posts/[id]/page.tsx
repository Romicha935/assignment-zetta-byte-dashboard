// "use client";
// import useFetch from "@/hooks/useFetch";

// interface Post { id: number; title: string; body: string }

// interface Props { params: { id: string } }

// export default function PostDetail({ params }: Props) {
//   const { data, loading, error } = useFetch<Post>(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}`
//   );

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p className="text-red-500">Failed to load post</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">{data?.title}</h1>
//       <p className="mt-4">{data?.body}</p>
//     </div>
//   );
// }
