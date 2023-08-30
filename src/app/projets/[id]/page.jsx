import CenterSection from "@/components/centerSection/CenterSection.jsx";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js";
import { redirect } from "next/navigation.js";

export default async function ProjectPage({ params }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
  const project = await getData(
    `http://atd16-api.test/api/projects/${params.id}`,
    session.user.token
  );

  const user = await getData(
    "http://atd16-api.test/api/me",
    session.user.token
  );
  
  const users = await getData(
    "http://atd16-api.test/api/users",
    session.user.token
  );


  return (
    <CenterSection
      titleSection={project.name}
      data={project}
      sectionModel={"task"}
      user={user}
      users={users["hydra:member"]}
      currentProject={project}
    />
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
