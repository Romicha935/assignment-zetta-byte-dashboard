// // app/page.tsx
// "use client";
// import Card from "../../components/card";
// import { motion } from "framer-motion";

// export default function HomePage() {
//   return (
//     <div>
//       <div className="mb-6">
//         <motion.h1
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-3xl font-bold"
//         >
//           Welcome, Romicha 👋
//         </motion.h1>
//         <p className="text-slate-600">Mini dashboard demo for Zettabyte — UI & Animations focus.</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <Card title="Visitors">
//           <motion.div
//             initial={{ width: "10%" }}
//             animate={{ width: ["10%", "60%", "30%"] }}
//             transition={{ repeat: Infinity, duration: 3 }}
//             className="h-3 bg-indigo-500 rounded"
//           />
//           <div className="mt-2 text-sm">Animated sparkline placeholder</div>
//         </Card>

//         <Card title="Performance">
//           <div>Placeholder stats</div>
//         </Card>

//         <Card title="Tasks">
//           <div>3 pending</div>
//         </Card>
//       </div>
//     </div>
//   );
// }
