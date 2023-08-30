import Link from "next/link.js";
import SignOutButton from "../global/SignOutButton.jsx";

export default async function NavSidebar(){
  const projects = await getData("http://atd16-api.test/api/projects")
  
  return(
    <nav className=" w-1/6 text-sm flex flex-col pt-10">
      <SignOutButton>Se déconnecter</SignOutButton>
      <ul className="flex flex-col gap-4">
        <li><Link href={'/'}>Mes tâches</Link></li>
        <li><Link href={'/projets'}>Les projets</Link></li>
        {projects['hydra:member'].map((project) => (
          <li key={project.id}><Link href={`/projets/${project.id}`} >{project.name}</Link></li>
        ))}
      </ul>
    </nav>
  )
}

//fonction qui appel les données sur l'api
async function getData(url) {
  const res = await fetch(url, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new error("Failed to fetch data");
  }
  return res.json();
}