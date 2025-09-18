"use client";

import Sidebar from "@/components/sidebar";
import "./globals.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const sidebarWidth = 220; 

  return (
    <html lang="en">
      <body className="bg-slate-100">
        <Sidebar />

        
        <main
          className="p-6 overflow-auto"
          style={{ marginLeft: sidebarWidth }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
