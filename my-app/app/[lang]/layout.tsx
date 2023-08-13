import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/src/components/LanguageSelector";
import Sidebar from "@/src/components/Sidebar";
import LocaleSwitcher from "@/src/components/language-switcher-example";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <div className="flex-none w-full h-[65px] items-center" id="header">
          <Header />
        </div>
        <div className="flex flex-row" id="container">
          <div
            className="flex flex-none ml:w-[281px] w-1/5 h-full"
            id="sidebar"
          >
            <Sidebar />
            <LocaleSwitcher/>
          </div>
          <div className="flex flex-none w-4/5 h-full" id="content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
