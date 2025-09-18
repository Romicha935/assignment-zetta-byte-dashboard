"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFileAlt, FaHome, FaUser } from "react-icons/fa";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
//import { Home, FileText, Users } from "lucide-react"; // icon lib

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const menu = [
    { name: "Dashboard", href: "/", icon: <FaHome size={18} /> },
    { name: "Posts", href: "/posts", icon: <FaFileAlt size={18} /> },
    { name: "Users", href: "/users", icon: <FaUser size={18} /> },
  ];

  return (
    <motion.aside
      animate={{ width: open ? 220 : 60 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="h-screen   flex flex-col shadow-xl fixed"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 mt-10">
        <span className="font-bold ">{open ? "Zettabyte" : "ZB"}</span>
        <button onClick={() => setOpen(!open)} className="text-sm">
          {open ? <BiChevronLeft size={20} /> : <BiChevronRight size={20}/>}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-2 p-2">
        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 hover:bg-blue-200 px-3 py-2 rounded transition"
          >
            {item.icon}
            {open && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
