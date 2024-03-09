import Link from "next/link";


export default function PastProjects() {
  let projects = [
    { name: "EFTGuessr", url: "https://eftguessr.com/" },
    { name: "CDGFitness", url: "https://cdg-fitness.vercel.app/" }
  ];
  return (
    <div className="flex flex-col text-2xl">
      {projects.map((project, index) => (
        <Link key={index} href={project.url} target="_blank" className="text-base md:text-lg lg:text-2xl nav-link" data-hover={project.name}>{project.name}</Link>
      ))}
    </div>
  );
}