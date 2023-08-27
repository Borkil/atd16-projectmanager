"use client";

import { useState } from "react";
import TasksList from "../list/TasksList.jsx";
import CenterSectionHeader from "./CenterSectionHeader.jsx";
import TaskModelSidebar from "../sidebar/TaskModelSidebar.jsx";
import RightSidebar from "../sidebar/RightSidebar.jsx";
import ProjectModelSidebar from "../sidebar/ProjectModelSidebar.jsx";
import ProjectsList from "../list/ProjectsList.jsx";

export default function CenterSection({ data, sectionModel, titleSection }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [dataDetails, setDataDetails] = useState(" ");
  const [model, setModel] = useState(sectionModel);

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
        <CenterSectionHeader title={titleSection} onClick={handleShowAddForm} />
        {model === 'task' ? (
          <>
            <TasksList
              tasks={data}
              onSelect={(task) => handleShowUpdateTaskForm(task)}
            />
            <RightSidebar isOpen={isSidebarOpen}>
              <TaskModelSidebar isEmpty={isEmpty} onClose={handleSidebarToggle} task={dataDetails}/>
            </RightSidebar>
          </>
        ) : (
          <>
            <ProjectsList onSelect={(project) => handleShowUpdateTaskForm(project)} projects={data}/>
            <RightSidebar isOpen={isSidebarOpen}>
              <ProjectModelSidebar isEmpty={isEmpty} onClose={handleSidebarToggle} project={dataDetails}/>
            </RightSidebar>
          </>
        )}
      </div>
    </>
  );
}
