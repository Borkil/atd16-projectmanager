import { useRouter } from "next/navigation.js"
import changeStatus from "@/utils/changeStatus.js"
import TagStatus from "../global/TagStatus.jsx"


export default function TaskListItemDone({ task, onSelect }) {
  const router = useRouter()

  const majStatusTask = (task)=>{
    changeStatus(task, 'encours')
    router.refresh()
  }


  return (
    <li className=" text-sm w-2/3 p-1 flex items-center gap-4 cursor-pointer hover:bg-neutral-200 hover:rounded ">
      <input onChange={() => majStatusTask(task)} type="checkbox" className="accent-sky-500 w-4 h-4 shadow-md shadow-sky-300 " defaultChecked={true} />
      <span className="truncate gap-4 flex justify-between w-full" onClick={onSelect}>
        <p className="truncate ">{task.name}</p>
        <TagStatus status={task.status} />
      </span>
    </li>
  );
}


