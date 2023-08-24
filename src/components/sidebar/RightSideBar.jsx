"use client";

import AddTaskForm from "../tasks/AddTaskForm.jsx";
import UpdateTaskForm from "../tasks/UpdateTaskForm.jsx";
import { PrimaryButton, CloseButton, TrashButton } from "../global/Buttons.jsx";
import { CrossIcon } from "../icons/Icons.jsx";
import { useState } from "react";
import { createPortal } from "react-dom";
import RemoveModal from "../modal/RemoveModal.jsx";
import { useRouter } from "next/navigation";

// isOpen => permet d'afficher ou cacher la sideBar. True == afficher
// onClose => function qui doit etre mis sur un event onClick pour fermer la sidebar
// isEmpty => défini si la sidebar affiche un formulaire vide ou les details d'une tâche
// task => se sont les données d'une tache

export default function RightSidebar({ isOpen, onClose, isEmpty, task }) {
  //par default la sidebar affichera un formulaire vide
  const [showModal, setShowModal] = useState(false);
  const router = useRouter()

  const handleRemove = async () => {
    const options = {
      method: "DELETE"
    };

    const response = await fetch(
      `http://atd16-api.test/api/tasks/${task.id}`,
      options
    );

    if (response.ok) {
      console.log("ok supprimer en bdd");
      router.refresh();
      setShowModal(false)
      onClose()
      
    } else {
      console.log("attention pas supprimer en bdd");
    }
  }

  return (
    <div
      className={`
    ${!isOpen ? "hidden" : "block"}
    drop-shadow-md
    bg-white
    m-2
    w-1/2
    p-4
    rounded
    flex
    flex-col
    gap-4
    `}
    >
      <div className="flex justify-between">
        <PrimaryButton>Marquer comme terminée</PrimaryButton>
        <div className="flex gap-2">
          {!isEmpty ? <TrashButton data={task} onClick={() => setShowModal(true)}/> : null}
          <CloseButton onClick={onClose}/>
        </div>
      </div>

      {isEmpty ? <AddTaskForm /> : <UpdateTaskForm key={task.id} task={task} />}

      {showModal &&
        createPortal(
          <RemoveModal
            onClose={() => setShowModal(false)}
            onRemove={handleRemove}
          />,
          document.body
        )}
    </div>
  );
}
