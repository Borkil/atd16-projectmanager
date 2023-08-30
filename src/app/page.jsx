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
    "http://atd16-api.test/api/me",
    session.user.token
  );

  const projectsData = await getData(
    "http://atd16-api.test/api/projects",
    session.user.token
  );

  return (
    <>
      <CenterSection
        titleSection={"Mes tâches"}
        data={user["tasks"]}
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
