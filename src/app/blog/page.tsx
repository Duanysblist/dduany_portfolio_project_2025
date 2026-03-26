import Link from "next/link";

export const metadata = {
  title: "Blog | Daniel Duany",
  description: "Thoughts on software engineering, cloud technologies, and career development.",
};

export default function BlogPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">Blog</h1>
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-md mb-8">
        Articles on software engineering, cloud technologies, and lessons learned
        along the way. Check back soon.
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
