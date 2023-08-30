import CenterSection from "@/components/centerSection/CenterSection.jsx";

export default async function ProjectPage({ params }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
  const project = await getData(
    `http://atd16-api.test/api/projects/${params.id}`,
    session.user.token
  );
  
  const projects = await getData("http://atd16-api.test/api/projects");

  return (
    <CenterSection
      titleSection={project.name}
      data={project.tasks}
      sectionModel={"task"}
      projects={projects["hydra:member"]}
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
