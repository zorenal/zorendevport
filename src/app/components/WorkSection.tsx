import Project from "./Project";

export default function WorkSection() {
   
  return (
    <section
      id="work"
      className="min-h-dvh flex flex-col items-center"
    >
      <p className="text-5xl  m-4 sm:m-6 lg:m-10">Experience</p>
        <Project />
    </section>
  );
}
