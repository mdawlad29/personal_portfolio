import dynamic from "next/dynamic";
const About = dynamic(() => import("@/components/About/About"), { ssr: false });
const Resume = dynamic(() => import("@/components/Resume/Resume"), {
  ssr: false,
});
const Projects = dynamic(() => import("@/components/Projects/Projects"), {
  ssr: false,
});
const Skills = dynamic(() => import("@/components/Skills/Skills"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div className="space-y-10">
        <About />
        <Skills />
        <Projects />
        <Resume />
      </div>
    </>
  );
}
