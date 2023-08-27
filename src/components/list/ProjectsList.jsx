import Link from "next/link.js"
export default function ProjectsList({projects, onSelect}){
  return(
    <ul>
      {projects.map((project) => (
        <li key={project.id}><Link href={`/projets/${project.id}`}>{project.name}</Link></li>
      ))}
    </ul>
  )
}
