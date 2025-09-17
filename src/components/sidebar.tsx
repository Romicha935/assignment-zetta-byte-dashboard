// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function Sidebar() {
//   const [open, setOpen] = useState(true);

//   return (
//     <motion.aside
//       animate={{ width: open ? 220 : 60 }}
//       transition={{ type: "spring", stiffness: 200, damping: 20 }}
//       className="h-screen bg-gradient-to-b from-indigo-600 to-purple-600 text-white flex flex-col"
//     >
//       <div className="flex items-center justify-between p-3">
//         <span className="font-bold">{open ? "Zettabyte" : "ZB"}</span>
//         <button onClick={() => setOpen(!open)} className="text-sm">
//           {open ? "◀" : "▶"}
//         </button>
//       </div>

//       <nav className="flex flex-col gap-2 p-2">
//         <Link href="/" className="hover:bg-white/10 px-3 py-2 rounded">Dashboard</Link>
//         <Link href="/posts" className="hover:bg-white/10 px-3 py-2 rounded">Posts</Link>
//         <Link href="/users" className="hover:bg-white/10 px-3 py-2 rounded">Users</Link>
//       </nav>
//     </motion.aside>
//   );
// }

"use client "
import { spring } from 'framer-motion'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

const Sidebar = () => {
    const [open ,setOpen] = useState(true)
  return (
    <motion.aside 
    animate={{width: open ? 220 : 60 }} 
    transition={{type:spring, stiffness: 220 , damping: 20}}
    className="h-screen  bg-gradient-to-b from-green-500 to-purple-500"
    >
        <div className='flex items-center justify-between p-3'>
             <span className="font-bold">{open ? "Zettabyte" : "ZB"}</span>
            <button onClick={()=> setOpen(!open)} className='text-sm'>{open ? "◀" : "▶"  }</button>
        </div>

        <nav className='flex flex-col gap-2 p-2'>
            <Link href="/" className='hover:bg-white text-center px-3 py-3 rounded' >Dashboard</Link>
            <Link href="/posts" className='hover:bg-white text-center px-3 py-3 rounded' >Posts</Link>
            <Link href="/users" className='hover:bg-white text-center px-3 py-3 rounded' >Users</Link>
        </nav>

    </motion.aside>
  )
}

export default Sidebar