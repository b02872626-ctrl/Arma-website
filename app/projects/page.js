import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Projects — ARMA",
  description: "Selected projects and collaborations by ARMA.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Projects />
      </main>
      <Footer />
    </>
  );
}
