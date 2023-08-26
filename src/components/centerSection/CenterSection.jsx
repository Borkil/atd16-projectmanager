"use client";

import { useState } from "react";
import TasksList from "../list/TasksList.jsx";
import CenterSectionHeader from "./CenterSectionHeader.jsx";
import TaskModelSidebar from "../sidebar/TaskModelSidebar.jsx";
import RightSidebar from "../sidebar/RightSidebar.jsx";
import ProjectModelSidebar from "../sidebar/ProjectModelSidebar.jsx";
import ProjectsList from "../list/ProjectsList.jsx";

export default function CenterSection({ data, sectionModel }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [dataDetails, setDataDetails] = useState(" ");
  const [model, setModel] = useState(sectionModel);

  const dataArr = data["hydra:member"];

  // fonction qui ouvre et ferme la sidebar
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleShowUpdateTaskForm = (data) => {
    setDataDetails(data);
    setIsSidebarOpen(true);
    setIsEmpty(false);
  };

  const handleShowAddForm = () => {
    setIsEmpty(true);
    setDataDetails("");
    if (!isSidebarOpen) {
      handleSidebarToggle();
    }
  };

  return (
    <>
      <div className="w-full h-full flex flex-col">
        {model === 'task' ? (
          <>
            <CenterSectionHeader title={'Mes Taches'} onClick={handleShowAddForm} />
            <TasksList
              tasks={dataArr}
              onSelect={(task) => handleShowUpdateTaskForm(task)}
            />
            <RightSidebar isOpen={isSidebarOpen}>
              <TaskModelSidebar isEmpty={isEmpty} onClose={handleSidebarToggle} task={dataDetails}/>
            </RightSidebar>
          </>
        ) : (
          <>
            <CenterSectionHeader title={'Les projets'} onClick={handleShowAddForm} />
            <ProjectsList onSelect={(project) => handleShowUpdateTaskForm(project)} projects={dataArr}/>
            <RightSidebar isOpen={isSidebarOpen}>
              <ProjectModelSidebar isEmpty={isEmpty} onClose={handleSidebarToggle} project={dataDetails}/>
            </RightSidebar>
          </>
        )}
      </div>
    </>
  );
}
