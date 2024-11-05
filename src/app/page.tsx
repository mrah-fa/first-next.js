import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <div className="h-screen flex justify-between flex-col">
        <NavBar />
        <p className="text-center">Home Pages</p>
        <Footer />
      </div>
    </>
  );
}
