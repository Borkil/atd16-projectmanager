import CenterSection from "@/components/centerSection/CenterSection.jsx";

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex h-screen  bg-slate-200 p-2 text-gray-700">
      <nav>je suis la sidebar a gauche</nav>
      <CenterSection data={data}/>
    </main>
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
