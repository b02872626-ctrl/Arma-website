import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ProjectDetail from "@/components/ProjectDetail";
import Footer from "@/components/Footer";
import {
  getProjects,
  getProject,
  getNextProject,
  getPreviousProject,
} from "@/lib/projects";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const project = await getProject(params.slug);
  return {
    title: project ? `${project.name} — ARMA` : "Project — ARMA",
    description: project?.description,
  };
}

export default async function ProjectPage({ params }) {
  const project = await getProject(params.slug);
  if (!project) notFound();
  const [nextProject, previousProject] = await Promise.all([
    getNextProject(params.slug),
    getPreviousProject(params.slug),
  ]);

  return (
    <>
      <Navbar />
      <main>
        <ProjectDetail
          project={project}
          previousProject={previousProject}
          nextProject={nextProject}
        />
      </main>
      <Footer />
    </>
  );
}
