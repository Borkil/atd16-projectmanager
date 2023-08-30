'use client';
import { useSession } from "next-auth/react"
export default function TasksList({ tasks, onSelect }) {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    console.log(session, status)
  }


  return (
    <ul className="flex flex-col h-full p-4 overflow-auto">
      {tasks.map((task) => (
        <li
          className=" text-sm w-2/3 p-1 flex gap-4  cursor-pointer hover:bg-neutral-200"
          key={task.id}
        >
          <input
            type="checkbox"
            className="accent-sky-500 hover:border-sky-400 "
          />
          <span
            className="truncate gap-4 flex justify-between w-full "
            onClick={() => onSelect(task)}
          >
            <p className="truncate">{task.name}</p>
            <span>A faire</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
