import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import BlogPost from "@/components/BlogPost";
import Footer from "@/components/Footer";
import { getPosts, getPost } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post ? `${post.title} — ARMA` : "Blog — ARMA",
    description: post?.intro,
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main>
        <BlogPost post={post} />
      </main>
      <Footer />
    </>
  );
}
