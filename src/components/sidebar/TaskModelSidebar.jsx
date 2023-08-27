import AddTaskForm from "../form/tasks/AddTaskForm.jsx";
import UpdateTaskForm from "../form/tasks/UpdateTaskForm.jsx";
import { PrimaryButton, CloseButton, TrashButton } from "../global/Buttons.jsx";
import { createPortal } from "react-dom";
import RemoveModal from "../modal/RemoveModal.jsx";
import { useState } from "react";
import { useRouter } from "next/navigation";


// onClose => function qui doit etre mis sur un event onClick pour fermer la sidebar
// isEmpty => défini si la sidebar affiche un formulaire vide ou les details d'une tâche
// task => se sont les données d'une tache

export default function TaskModelSidebar({ isEmpty, onClose, task, projects }) {
  const [showModal, setShowModal] = useState(false);
  const uniqueId = Math.random();
  const router = useRouter();

  const handleRemove = async () => {
    const options = {
      method: "DELETE",
    };
    const response = await fetch(
      `http://atd16-api.test/api/tasks/${task.id}`,
      options
    );
    
    onClose();
    setShowModal(false)
    if (response.ok) {
      console.log("ok supprimer en bdd");
      router.refresh();
    } else {
      console.log("attention pas supprimer en bdd");
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <PrimaryButton>Marquer comme terminée</PrimaryButton>
        <div className="flex gap-2">
          {!isEmpty ? (
            <TrashButton data={task} onClick={() => setShowModal(true)} />
          ) : null}
          <CloseButton onClick={onClose} />
        </div>
      </div>

      {isEmpty ? (
        <AddTaskForm onClose={onClose} key={uniqueId} projects={projects}/>
      ) : (
        <UpdateTaskForm key={task.id} task={task} onClose={onClose} projects={projects} />
      )}

      {/* Affiche la modale */}
      {showModal &&
        createPortal(
          <RemoveModal
            onClose={() => setShowModal(false)}
            onRemove={handleRemove}
          />,
          document.body
        )}
    </>
  );
}


