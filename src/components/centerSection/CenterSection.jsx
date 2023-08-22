"use client";

import Title01 from "@/components/global/titles.jsx";
import RightSidebar from "../sidebar/RightSideBar.jsx";
import { useState } from "react";
import TasksList from "../tasks/TasksList.jsx";

export default function CenterSection({ data }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [taskDetails, setTaskDetails] = useState(' ');

  const tasks = data["hydra:member"];

  const handleShowUpdateTaskForm = (task) => {
    setTaskDetails(task)
    setIsSidebarOpen(true)
    setIsEmpty(false)
  }

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

 
  const handleShowAddForm = () => {
    setIsEmpty(true)
    setTaskDetails('')
    if(!isSidebarOpen){
      handleSidebarToggle()
    }
  }


  return (
    <section className="flex w-full">
      <div className="w-full">
        <div className="bg-slate-200">
          <Title01>Mes tâches</Title01>
          <button onClick={handleShowAddForm}>Ajouter une tache</button>
        </div>
        <TasksList tasks={tasks} onSelect={(task) => handleShowUpdateTaskForm(task)} />
      </div>
      <RightSidebar isOpen={isSidebarOpen} isEmpty={isEmpty} onClose={handleSidebarToggle} task={taskDetails}/>
    </section>
  );
}
