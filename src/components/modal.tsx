// "use client";
// import { motion } from "framer-motion";

// interface User { name: string; email: string; company: { name: string } }
// interface Props { user: User; onClose: () => void }

// export default function Modal({ user, onClose }: Props) {
//   return (
//     <motion.div 
//       className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
//       initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//       onClick={onClose}
//     >
//       <motion.div
//         className="bg-white p-6 rounded"
//         initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <h2 className="font-bold text-xl">{user.name}</h2>
//         <p>Email: {user.email}</p>
//         <p>Company: {user.company.name}</p>
//         <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={onClose}>Close</button>
//       </motion.div>
//     </motion.div>
//   );
// }
