"use client"
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar";



// export const metadata = {
//   title: "Zettabyte Dashboard",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-100">
        <div className=" min-h-screen flex">
         {/* Sidebar */}
          <Sidebar/>
        <div className="  flex-1 flex flex-col">
          <Navbar/>
         
          {/* Main content */}
          <main className="flex-1 p-6">{children}</main>
          <Footer/>
        </div>
        </div>
        
      </body>
    </html>
  );
}
