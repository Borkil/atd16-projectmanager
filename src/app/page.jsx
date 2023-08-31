import CenterSection from "@/components/centerSection/CenterSection.jsx";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation.js";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
  const user = await getData(
    `${process.env.NEXT_PUBLIC_URL_API}/me`,
    session.user.token
  );

  const users = await getData(
    `${process.env.NEXT_PUBLIC_URL_API}/users`,
    session.user.token
  );


  const projectsData = await getData(
    `${process.env.NEXT_PUBLIC_URL_API}/projects`,
    session.user.token
  );

  return (
    <>
      <CenterSection
        titleSection={"Mes tâches"}
        data={user}
        user={user}
        users={users["hydra:member"]}
        sectionModel={"task"}
        projects={projectsData["hydra:member"]}
      />
    </>
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
