import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "about/Vica App",
  description: "Generated by create next app",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex justify-between flex-col">
        <p className="text-center">About Page</p>
        <div className="child flex justify-center items-center">{children}</div>
      </div>
    </div>
  );
}
