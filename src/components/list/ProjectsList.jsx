export default function ProjectsList({ projects, onSelect }) {
  return (
    <ul>
      {projects.map((project) => (
        <li onClick={() => onSelect(project)} key={project.id}>
          {project.name}
        </li>
      ))}
    </ul>
  );
}
