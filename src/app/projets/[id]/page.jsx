
import CenterSection from "@/components/centerSection/CenterSection.jsx";

export default async function ProjectPage({params}){
  const project = await getData(params.id)
  console.log(project)

  return(
    <CenterSection titleSection={project.name} data={project.tasks} sectionModel={'task'} />
  )
}

//fonction qui appel les données sur l'api
async function getData(id) {
  const res = await fetch(`http://atd16-api.test/api/projects/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new error("Failed to fetch data");
  }
  return res.json();
}