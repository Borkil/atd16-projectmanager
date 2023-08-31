import { useRouter } from "next/navigation.js"
import changeStatus from "@/utils/changeStatus.js"


export default function TaskListItemDone({ task, onSelect }) {
  const router = useRouter()

  const majStatusTask = (task)=>{
    changeStatus(task, 'encours')
    router.refresh()
  }


  return (
    <li className=" text-sm w-2/3 p-1 flex gap-4  cursor-pointer hover:bg-neutral-200 bg-sky-100">
      <input onChange={() => majStatusTask(task)} type="checkbox" className="accent-sky-500 hover:border-sky-400 " defaultChecked={true} />
      <span
        className="truncate gap-4 flex justify-between w-full "
        onClick={onSelect}
      >
        <p className="truncate">{task.name}</p>
        <span>Terminée</span>
      </span>
    </li>
  );
}


