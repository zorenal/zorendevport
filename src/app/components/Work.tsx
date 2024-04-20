import Link from "next/link";

export default function Work() {
    let work = [ 
      { name: "SeeQR", url: "http://www.seeqrapp.com/" },
      {name : "Canvia", url: "https://my.canvia.art/"}
    ]
    return (
      <div className="flex flex-col text-2xl mb-8">
        {work.map((work, index) => (
          <Link key={index} href={work.url} target="_blank" className="text-base md:text-lg lg:text-2xl mb-2 nav-link" data-hover={work.name}>{work.name}</Link>
        ))}
      </div>
    );
  }
