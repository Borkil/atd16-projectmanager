import { useState } from "react";
import TasksList from "./TasksList.jsx";
import FilterItem from "./FilterItem.jsx";

export default function TaskListSection({ tasks, onSelect }) {
  const [filter, setFilter] = useState("all");

  const filterList = [];

  tasks.forEach((task) => {
    if (filter === "all") {
      filterList.push(task);
    } else if (filter === task.status) {
      filterList.push(task);
  }})
  
  return (
    <div className="h-full">
      <div className="w-2/3 flex justify-between gap-10">
        <FilterItem onSelect={()=>setFilter('all')} >Toutes</FilterItem>
        <FilterItem onSelect={()=>setFilter('encours')} >A faire</FilterItem>
        <FilterItem onSelect={()=>setFilter('done')} >Terminée</FilterItem>
      </div>

      <TasksList tasks={filterList} onSelect={onSelect} />
    </div>
  );
}
