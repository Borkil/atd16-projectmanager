export default function TasksList({ tasks, onSelect }) {
  return (
    <div>
      <ul className="bg-orange-200">
        {tasks.map((task) => (
          <li className="flex" onClick={() => onSelect(task)} key={task.id}>
            <input type="radio" /> 
            <span className="text-sm">{task.name}</span>
            <span>A faire</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
