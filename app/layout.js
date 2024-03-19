import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "  Talha | Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        <Header/>
        {children}</body>
    </html>
  );
}
