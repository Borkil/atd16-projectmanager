
import CenterSection from "@/components/centerSection/CenterSection.jsx";

export default async function ProjectPage({params}){
  const project = await getData(`http://atd16-api.test/api/projects/${params.id}`)
  const projects = await getData('http://atd16-api.test/api/projects')

  return(
    <CenterSection titleSection={project.name} data={project.tasks} sectionModel={'task'} projects={projects['hydra:member']} />
  )
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
