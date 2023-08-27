import CenterSection from "@/components/centerSection/CenterSection.jsx";

export default async function Home() {
  const data = await getData();
  const tasks = data["hydra:member"];
  return (
    <>
      <CenterSection titleSection={'Mes tâches'}  data={tasks} sectionModel={'task'}/>
    </>
  );
}


//fonction qui appel les données sur l'api
async function getData() {
  const res = await fetch("http://atd16-api.test/api/tasks", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new error("Failed to fetch data");
  }
  return res.json();
}
