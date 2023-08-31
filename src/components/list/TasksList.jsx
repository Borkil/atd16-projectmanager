import TaskListItem from "./TaskListItem.jsx";
import TaskListItemDone from "./TaskListItemDone.jsx";

export default function TasksList({ tasks, onSelect }) {

  return (
    <ul className="flex flex-col h-full p-4 gap-3 overflow-auto border-t-2 ">
      {tasks.map((task) => (
        task.status === 'encours' ? (
          <TaskListItem key={task.id} task={task} onSelect={()=> onSelect(task)} />
        ) : (
          <TaskListItemDone key={task.id} task={task} onSelect={()=> onSelect(task)}/>
        )
      ))}
    </ul>
  );
}
