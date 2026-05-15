import Navbar from "@/components/Navbar";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog — ARMA",
  description:
    "Stories, strategies, and creative perspectives from the ARMA team.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogList />
      </main>
      <Footer />
    </>
  );
}
