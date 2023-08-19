import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <header className='bg-slate-200'>je suis le header</header>
      <div className='bg-slate-600 flex justify-between h-full '>
        <nav className='bg-red-200'>je suis la sidebar a gauche</nav>
        <section className='bg-green-200 basis-full'>je suis la section centrale</section>
        <div className='bg-orange-200 '>je suis la sidebar a droite</div>
      </div>
      
    </main>
  )
}
