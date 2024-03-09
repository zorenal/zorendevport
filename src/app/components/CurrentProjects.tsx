import Link from "next/link";


export default function CurrentProjects() {
  let projects = [
    { name: "QuestBoard", url: "https://quest-board-swtu.onrender.com/" },
    { name: "Job Nest", url: "" },
  ];
  return (
    <div className="flex flex-col text-2xl">
      {projects.map((project, index) => (
        <Link key={index} href={project.url} className="text-base md:text-lg lg:text-2xl mb-4 nav-link" data-hover={project.name}>{project.name}</Link>
      ))}
    </div>
  );
}