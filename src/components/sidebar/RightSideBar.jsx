import AddTaskForm from "../tasks/AddTaskForm.jsx"
import UpdateTaskForm from "../tasks/UpdateTaskForm.jsx"
import {PrimaryButton, CloseButton } from "../global/Buttons.jsx"
import { CrossIcon } from "../icons/Icons.jsx"


// isOpen => permet d'afficher ou cacher la sideBar. True == afficher
// onClose => function qui doit etre mis sur un event onClick pour fermer la sidebar
// isEmpty => défini si la sidebar affiche un formulaire vide ou les details d'une tâche
// task => se sont les données d'une tache

export default function RightSidebar ({isOpen, onClose, isEmpty, task}){``
  //par default la sidebar affichera un formulaire vide

  return(
    <div 
    className={`
    ${!isOpen ? 'hidden' : 'block'}
    drop-shadow-md
    bg-white
    m-2
    w-1/2
    p-4
    rounded
    flex
    flex-col
    gap-4
    `}>

      <div className="flex justify-between">
        <PrimaryButton>Marquer comme terminée</PrimaryButton>
        <CloseButton onClick={onClose}>
          <CrossIcon />
        </CloseButton>
      </div>

      {isEmpty ? <AddTaskForm/> : <UpdateTaskForm key={task.id} task={task}/>}
    </div>
  )
}