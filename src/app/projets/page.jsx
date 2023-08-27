import CenterSection from "@/components/centerSection/CenterSection.jsx"

export default async function Projets(){
  const data = await getData();
  const projects = data["hydra:member"];
  return(
    <>
      <CenterSection titleSection={'Les projets'} data={projects} sectionModel={'projects'}/>
    </>
  )
}


//fonction qui appel les données sur l'api
async function getData() {
  const res = await fetch("http://atd16-api.test/api/projects", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new error("Failed to fetch data");
  }
  return res.json();
}