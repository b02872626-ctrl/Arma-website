import Navbar from "@/components/Navbar";
import AboutPage from "@/components/AboutPage";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About — ARMA",
  description:
    "ARMA is a creative studio building brands that earn long-term trust.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}
