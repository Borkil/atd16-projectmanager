"use client";
import RightSidebar from "../sidebar/RightSideBar.jsx";
import { useState } from "react";
import TasksList from "../tasks/TasksList.jsx";
import CenterSectionHeader from "./CenterSectionHeader.jsx";

export default function CenterSection({ data }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [taskDetails, setTaskDetails] = useState(" ");

  const tasks = data["hydra:member"];

  const handleShowUpdateTaskForm = (task) => {
    setTaskDetails(task);
    setIsSidebarOpen(true);
    setIsEmpty(false);
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleShowAddForm = () => {
    setIsEmpty(true);
    setTaskDetails("");
    if (!isSidebarOpen) {
      handleSidebarToggle();
    }
  };

  return (
    <section className="flex h-full w-full bg-neutral-50 rounded drop-shadow">
      <div className="w-full h-full flex flex-col">
        <CenterSectionHeader onClick={handleShowAddForm} />
        <TasksList
          tasks={tasks}
          onSelect={(task) => handleShowUpdateTaskForm(task)}
        />
      </div>

      <RightSidebar
        isOpen={isSidebarOpen}
        isEmpty={isEmpty}
        onClose={handleSidebarToggle}
        task={taskDetails}
      />
    </section>
  );
}
