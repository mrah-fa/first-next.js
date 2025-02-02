import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Auth /Vica App",
  description: "Generated by create next app",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="h-screen flex justify-between flex-col">

        <Link href="/" className="bg-slate-500 text-cyan-50 p-4 h-max w-max text-center">Back To Home</Link>
        <div className="child flex justify-center items-center">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
