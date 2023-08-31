"use client";

import { useState } from "react";
import TasksList from "../list/TasksList.jsx";
import CenterSectionHeader from "./CenterSectionHeader.jsx";
import TaskModelSidebar from "../sidebar/TaskModelSidebar.jsx";
import ProjectModelSidebar from "../sidebar/ProjectModelSidebar.jsx";
import ProjectsList from "../list/ProjectsList.jsx";
import UsersList from "../list/UsersList.jsx";
import UserModelSidebar from "../sidebar/UserModelSidebar.jsx";

export default function CenterSection({
  data,
  sectionModel,
  titleSection,
  user,
  currentProject,
  users,
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [dataDetails, setDataDetails] = useState(" ");
  const [model, setModel] = useState(sectionModel);

  // fonction qui ouvre et ferme la sidebar
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleShowUpdateForm = (data) => {
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
        {model === "task" ? (
          <>
            <TasksList
              tasks={data.tasks}
              onSelect={(task) => handleShowUpdateForm(task)}
            />
            {/* <RightSidebar isOpen={isSidebarOpen}>
              <TaskModelSidebar
                isEmpty={isEmpty}
                onClose={handleSidebarToggle}
                task={dataDetails}
                projects={user.projects}
                users={users}
                currentProject={currentProject}
                currentUser={user}
              />
            </RightSidebar> */}
          </>
        ) : model === "projects" ? (
          <>
            <ProjectsList
              projects={data}
              onSelect={(project) => handleShowUpdateForm(project)}
            />
            {/* <RightSidebar isOpen={isSidebarOpen}>
              <ProjectModelSidebar
                isEmpty={isEmpty}
                onClose={handleSidebarToggle}
                project={dataDetails}
              />
            </RightSidebar> */}
          </>
        ) : (
          <>
            <UsersList
              users={data}
              onSelect={(user) => handleShowUpdateForm(user)}
            />
            {/* <RightSidebar isOpen={isSidebarOpen}>
              <UserModelSidebar
                isEmpty={isEmpty}
                onClose={handleSidebarToggle}
                user={dataDetails}
              />
            </RightSidebar> */}
          </>
        )}
      </div>
    </>
  );
}
