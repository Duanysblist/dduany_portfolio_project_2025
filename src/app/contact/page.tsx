import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact | Daniel Duany",
  description: "Get in touch — I'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <div className="min-h-[70vh] py-20 px-4">
      <Contact />
    </div>
  );
}
