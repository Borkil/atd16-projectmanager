import CenterSection from "@/components/centerSection/CenterSection.jsx"
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js";
import { redirect } from "next/navigation.js";

export default async function Projets(){
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }

  const data = await getData(
    "http://atd16-api.test/api/projects",
    session.user.token
  );

  const projects = data["hydra:member"];
  return(
    <>
      <CenterSection titleSection={'Les projets'} data={projects} sectionModel={'projects'}/>
    </>
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
