import AddProjectForm from "../form/projects/AddProjectForm.jsx";
import {CloseButton } from "../global/Buttons.jsx";
import UpdateProjectForm from "../form/projects/UpdateProjectForm.jsx";

// onClose => function qui doit etre mis sur un event onClick pour fermer la sidebar
// isEmpty => défini si la sidebar affiche un formulaire vide ou les details d'un projet
// project => se sont les données d'un projet

export default function ProjectModelSidebar({ isEmpty, onClose, project, users }) {
  const uniqueId = Math.random();
  return (
    <>
      <div className="flex justify-end">
        <CloseButton onClick={onClose} />
      </div>

      {isEmpty ? (
        <AddProjectForm onClose={onClose} key={uniqueId} users={users} />
      ) : (
        <UpdateProjectForm
          key={project.id}
          project={project}
          onClose={onClose}
          users={users}
        />
      )}
    </>
  );
}
