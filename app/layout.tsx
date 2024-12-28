import type { Metadata } from "@/types/globals";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Abdelrahman Magdy | Frontend Developer & Freelancer",
//   description: "I'm Abdelrahman Magdy, a Frontend developer specializing in modern web technologies like Next.js and React. Let's build your next project together!",
// };

export const metadata: Metadata = {
  title: "Abdelrahman Magdy | Frontend Developer & Freelancer",
  description:
    "Welcome to my personal website! I'm Abdelrahman Magdy, a Frontend Developer specializing in modern web technologies like Next.js and React. Explore my skills, projects, and solutions to see how I can help bring your ideas to life.",
  keywords:
    "Abdelrahman Magdy, portfolio, frontend developer, Next.js, React, JavaScript, web development, freelancer, UI/UX design, responsive design, modern web technologies, website optimization, digital solutions, problem-solving, programming, HTML, CSS, Tailwind CSS, TypeScript, Git, GitHub, web performance, software development, agile, user-centered design, Abdelrahman Dev, project management",
  author: "Abdelrahman Magdy",
  language: "en",
  canonical: "https://abdelrahman-dev-alpha.vercel.app",
  robots: "index, follow",
  openGraph: {
    title: "Abdelrahman Magdy | Frontend Developer",
    description:
      "Welcome to my personal website! I'm Abdelrahman Magdy, a Frontend Developer specializing in modern web technologies like Next.js and React. Explore my skills, projects, and solutions to see how I can help bring your ideas to life.",
    url: "https://abdelrahman-dev-alpha.vercel.app",
    images: [
      {
        url: "/abdelrahman.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Banner",
      },
    ],
    siteName: "Abdelrahman Magdy Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Magdy | Frontend Developer",
    description:
      "Welcome to my personal website! I'm Abdelrahman Magdy, a Frontend Developer specializing in modern web technologies like Next.js and React. Explore my skills, projects, and solutions to see how I can help bring your ideas to life.",
      images: [
        {
          url: "/abdelrahman.jpg",
          width: 1200,
          height: 630,
          alt: "Portfolio Banner",
        },
      ],  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://abdelrahman-dev-alpha.vercel.app",
    name: "Abdelrahman Magdy Portfolio",
    description:
      "Welcome to my personal website! I'm Abdelrahman Magdy, a Frontend Developer specializing in modern web technologies like Next.js and React. Explore my skills, projects, and solutions to see how I can help bring your ideas to life.",
    author: {
      "@type": "Person",
      name: "Abdelrahman Magdy",
    },
  },
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
