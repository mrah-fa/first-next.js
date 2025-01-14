import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "dashboard /Vica App",
  description: "Generated by create next app",
};

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="h-screen flex justify-between flex-col">
        <NavBar />
        <div className="child">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
