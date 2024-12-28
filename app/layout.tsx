import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdelrahman Magdy | Frontend Developer & Freelancer",
  description: "I'm Abdelrahman Magdy, a Frontend developer specializing in modern web technologies like Next.js and React. Let's build your next project together!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
