import CenterSection from "@/components/centerSection/CenterSection.jsx"

async function getData(){
  const res = await fetch('http://atd16-api.test/api/tasks', {cache: 'no-store'})
  if(!res.ok){
    throw new error('Failed to fetch data')
  }
  return res.json()
}


export default async function Home() {
  const data = await getData()
  
  return (
    <main className="flex flex-col h-screen">
      <header className="bg-slate-200">je suis le header</header>

      <div className="flex ">

        <nav className="bg-red-200">je suis la sidebar a gauche</nav>


        <CenterSection data={data}/>

        
      </div>
    </main>
  );
}
