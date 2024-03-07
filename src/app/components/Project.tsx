import Link from "next/link";

export default function Project() {
  let projects = [
    { name: "SeeQR", url: "http://www.seeqrapp.com/" },
    { name: "QuestBoard", url: "https://quest-board-swtu.onrender.com/" },
    { name: "EFTGuessr", url: "https://eftguessr.com/" },
    { name: "CDGFitness", url: "https://cdg-fitness.vercel.app/" }
  ];
  return (
    <div className="flex flex-col text-2xl">
      {projects.map((project, index) => (
        <Link key={index} href={project.url} className="m-4 nav-link" data-hover={project.name}>{project.name}</Link>
      ))}
    </div>
  );
}