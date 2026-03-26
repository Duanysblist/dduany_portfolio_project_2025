import Link from "next/link";

export const metadata = {
  title: "Projects | Daniel Duany",
  description: "A showcase of software engineering projects spanning full-stack, ML, and cloud-native development.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">Projects</h1>
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-md mb-8">
        A curated selection of projects showcasing full-stack development, machine
        learning, and cloud-native architecture. Coming soon.
      </p>
      <Link
        href="/"
        className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
