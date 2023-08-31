import Link from "next/link.js";
import SignOutButton from "../global/SignOutButton.jsx";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js";
import UserInitial from "../global/UserInitial.jsx";

export default async function NavSidebar(){
  const session = await getServerSession(authOptions);

  const user = await getData(
    `${process.env.NEXT_PUBLIC_URL_API}/me`,
    session.user.token
  );
  

  return(
    <nav className="text-sm flex flex-col px-1 w-1/5">
      <div className="flex items-center gap-2">
        <UserInitial user={user}/>
        <h2 className="text-md font-semibold">{`${user.firstname} ${user.lastname}`}</h2>
      </div>
      <SignOutButton>Se déconnecter</SignOutButton>
      <ul className="flex flex-col gap-4">
        <li><Link href={'/'}>Mes tâches</Link></li>
        <li><Link href={'/projets'}>Les projets</Link></li>
        {user.projects.map((project) => (
          <li key={project.id}><Link href={`/projets/${project.id}`} >{project.name}</Link></li>
        ))}
      </ul>
    </nav>
  )
}

//fonction qui appel les données sur l'api
async function getData(url, token) {
  const res = await fetch(url, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });
  if (!res.ok) {
    throw new error("Failed to fetch data");
  }
  return res.json();
}
