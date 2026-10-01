import { Approach } from "@/components/sections/approach";
import { Contact } from "@/components/sections/contact";
import { LogLine } from "@/components/sections/log-line";
import { Sidebar } from "@/components/sections/sidebar";
import { Stack } from "@/components/sections/stack";
import { Work } from "@/components/sections/work";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lakshya Kumar",
  url: "https://lakshya-kumar-portfolio.vercel.app",
  description:
    "Computer Science student at SRM Institute of Science and Technology building Python, backend, AI/ML, and data-driven projects.",
  jobTitle: "Computer Science Student and Developer",
  affiliation: {
    "@type": "EducationalOrganization",
    name: "SRM Institute of Science and Technology",
  },
  sameAs: [
    "https://github.com/stackvector",
    "https://www.linkedin.com/in/lakshya-kumar-40a9a3415/",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <ScrollProgress />
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-[320px_1fr]">
        <Sidebar />
        <main className="px-6 pb-20 pt-11 sm:px-14 sm:pb-24 sm:pt-16">
          <LogLine />
          <Stack />
          <Work />
          <Approach />
          <Contact />
        </main>
      </div>
    </>
  );
}
