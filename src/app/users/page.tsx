// "use client";
// import Modal from "@/components/modal";
// import useFetch from "@/hooks/useFetch";
// import { motion } from "framer-motion";
// import { useState } from "react";
// ;

// interface User { id: number; name: string; email: string; company: { name: string } }

// export default function UsersPage() {
//   const { data, loading, error } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");
//   const [selected, setSelected] = useState<User | null>(null);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p className="text-red-500">Failed to load users</p>;

//   return (
//     <div className="p-6">
//       <table className="w-full table-auto border-collapse">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Name</th>
//             <th className="border p-2">Email</th>
//             <th className="border p-2">Company</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data?.map(user => (
//             <tr key={user.id} className="cursor-pointer hover:bg-gray-100"
//               onClick={() => setSelected(user)}>
//               <td className="border p-2">{user.name}</td>
//               <td className="border p-2">{user.email}</td>
//               <td className="border p-2">{user.company.name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {selected && <Modal user={selected} onClose={() => setSelected(null)} />}
//     </div>
//   );
// }
