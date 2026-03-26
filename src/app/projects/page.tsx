import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my software engineering projects spanning full-stack development, machine learning, game development, and cloud-native architecture.",
  openGraph: {
    title: "Projects | Daniel Duany",
    description:
      "Explore my software engineering projects spanning full-stack development, machine learning, game development, and cloud-native architecture.",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
