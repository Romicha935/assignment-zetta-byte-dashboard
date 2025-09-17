
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "Zettabyte Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-100">
        <div className=" min-h-screen flex flex-col">
          <Navbar/>
          {/* Sidebar */}
          {/* <Sidebar /> */}
          {/* Main content */}
          <main className="flex-1 p-6">{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
