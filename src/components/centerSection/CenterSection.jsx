"use client";

import Title01 from "@/components/global/titles.jsx";
import TaskListItem from "@/components/tasks/TaskListItem.jsx";
import RightSidebar from "../sidebar/RightSideBar.jsx";
import { useState } from "react";

export default function CenterSection({ data }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const tasks = data["hydra:member"];

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className="flex w-full">
      <div className="w-full">
        <div className="bg-slate-200">
          <Title01>Mes tâches</Title01>
          <button onClick={handleSidebarToggle}>Ajouter une tache</button>
        </div>
        <div className="bg-slate-500">
          <ul className="bg-blue-300">
            {tasks.map((task) => (
              <TaskListItem key={task.id}>{task.name}</TaskListItem>
            ))}
          </ul>
        </div>
      </div>
      <RightSidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle}/>
    </section>
  );
}
