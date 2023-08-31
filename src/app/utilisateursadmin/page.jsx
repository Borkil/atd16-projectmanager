import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation.js";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js";
import CenterSection from "@/components/centerSection/CenterSection.jsx";


export default async function UtilisateursAdmin(){
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
  
  const users = await getData(
    `${process.env.NEXT_PUBLIC_URL_API}/users`,
    session.user.token
  );

  return(
    <>
      <CenterSection 
        data={users}
        titleSection='Gestion des utilisateurs'
        sectionModel='users'
      />
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