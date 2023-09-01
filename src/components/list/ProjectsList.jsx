export default function ProjectsList({ projects, onSelect }) {
  return (
    <div className="p-10 border-t-2 mt-10">
      <table className="table-fixed divide-y text-left w-full text-sm">
      <thead>
        <tr className="text-neutral-500">
          <th className="py-4">Nom du projet</th>
          <th>Status</th>
          <th>Deadline</th>
          <th>Date de création</th>
          <th>Contributeurs</th>
        </tr>
      </thead>
      <tbody className="divide-y ">
      {projects.map((project) => (
        <tr onClick={() => onSelect(project)} key={project.id} className="hover:bg-neutral-200 cursor-pointer ">
          <td className="truncate pr-2" >{project.name}</td>
          <td className=" flex gap-2 items-center " ><div className="bg-green-500 h-3 w-3 rounded-full"></div><div className="py-4">{project.status}</div></td>
          <td>{project.deadline && formatDateToDDMMYYYY(project.deadline)}</td>
          <td>{formatDateToDDMMYYYY(project.createdAt)}</td>
          <td >{`${project.contributor.length}`}</td>
        </tr>
      ))}
      </tbody>
    </table>
    </div>
  );
}

function formatDateToDDMMYYYY(date) {
  const newDate = new Date(date)
  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const day = String(newDate.getDate()).padStart(2, "0");

  return `${day}-${month}-${year}`;
}