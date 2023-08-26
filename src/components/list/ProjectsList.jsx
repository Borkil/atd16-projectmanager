
export default function ProjectsList({projects, onSelect}){
  return(
    <ul>
      {projects.map((project) => (
        <li key={project.id} onClick={() => onSelect(project)}>{project.name}</li>
      ))}
    </ul>
  )
}
