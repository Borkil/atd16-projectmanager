import Link from "next/link.js";
import SignOutButton from "../global/SignOutButton.jsx";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js";
import UserInitial from "../global/UserInitial.jsx";
import NavItem from "./NavItem.jsx";
import { StarIcon, CubeIcon, ProjectIcon, TeamIcon } from "../icons/Icons.jsx";

export default async function NavSidebar() {
  const session = await getServerSession(authOptions);

  const user = await getData(
    `${process.env.NEXT_PUBLIC_URL_API}/me`,
    session.user.token
  );

  return (
    <nav className="text-sm flex flex-col py-6 mx-4 w-1/5">
      <div className="flex items-center gap-4">
        <UserInitial user={user} />
        <div>
          <h2 className="font-regular">{`${user.firstname} ${user.lastname}`}</h2>
          <SignOutButton>Se déconnecter</SignOutButton>
        </div>
      </div>
      <ul className="flex flex-col gap-10 mt-10">
        <div className="flex flex-col gap-4 border-b pb-4 border-neutral-400">
          <Link href={"/"}>
            <NavItem>
              <StarIcon />
              Mes tâches
            </NavItem>
          </Link>
          <Link href={"/projets"}>
            <NavItem>
              <ProjectIcon />
              Les Projets
            </NavItem>
          </Link>
          <Link href={"/utilisateursadmin"}>
            <NavItem>
              <TeamIcon />
              Utilisateurs
            </NavItem>
          </Link>
        </div>
        <div className="flex flex-col gap-9">
          {user.projects.map((project) => (
            <Link key={project.id} href={`/projets/${project.id}`}>
              <NavItem >
                <CubeIcon />
                {project.name}
              </NavItem>
            </Link>
          ))}
        </div>
      </ul>
    </nav>
  );
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
