import CenterSection from "@/components/centerSection/CenterSection.jsx";

export default async function Home() {
  const tasksData = await getData("http://atd16-api.test/api/tasks");
  const projectsData = await getData("http://atd16-api.test/api/projects");

  return (
    <>
      <CenterSection titleSection={'Mes tâches'}  data={tasksData['hydra:member']} sectionModel={'task'} projects={projectsData['hydra:member']}/>
    </>
  );
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
