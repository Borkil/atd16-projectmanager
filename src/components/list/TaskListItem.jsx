import { useRouter } from "next/navigation.js"
import changeStatus from "@/utils/changeStatus.js"

export default function TaskListItem({ task, onSelect }) {
  const router = useRouter()

  const majStatusTask = (task)=>{
    changeStatus(task, 'done')
    router.refresh()
  }

  return (
    <li className=" text-sm w-2/3 p-1 flex gap-4  cursor-pointer hover:bg-neutral-200">
      <input onChange={() => majStatusTask(task)} type="checkbox" className="accent-sky-500 hover:border-sky-400 " />
      <span
        className="truncate gap-4 flex justify-between w-full "
        onClick={onSelect}
      >
        <p className="truncate">{task.name}</p>
        <span>A faire</span>
      </span>
    </li>
  );
}

