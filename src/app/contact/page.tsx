import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Daniel Duany. Send a message or connect on LinkedIn.",
  openGraph: {
    title: "Contact | Daniel Duany",
    description: "Get in touch with Daniel Duany. Send a message or connect on LinkedIn.",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-[70vh] py-20 px-4">
      <Contact />
    </div>
  );
}
