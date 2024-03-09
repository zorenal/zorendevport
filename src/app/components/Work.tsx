import Link from "next/link";

export default function Work() {
    let work = [ 
      { name: "SeeQR", url: "http://www.seeqrapp.com/" },
    ]
    return (
      <div className="flex flex-col text-2xl">
        {work.map((work, index) => (
          <Link key={index} href={work.url} className="text-base md:text-lg lg:text-2xl nav-link" data-hover={work.name}>{work.name}</Link>
        ))}
      </div>
    );
  }
