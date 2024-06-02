import Link from "next/link";


export default function CurrentProjects() {
  let projects = [
    { name: "Nise no Resturan", url: "https://niserestu.vercel.app/" },
  ];
  
  return (
    <div className="flex flex-col text-2xl mb-8">
      {projects.map((project, index) => (
        <Link key={index} href={project.url} target="_blank" className="text-base md:text-lg lg:text-2xl mb-2 nav-link" data-hover={project.name}>{project.name}</Link>
      ))}
    </div>
  );
}