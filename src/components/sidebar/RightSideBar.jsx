import AddTaskForm from "../tasks/AddTaskForm.jsx"
import UpdateTaskForm from "../tasks/UpdateTaskForm.jsx"


// isOpen => permet d'afficher ou cacher la sideBar. True == afficher
// onClose => function qui doit etre mis sur un event onClick pour fermer la sidebar
// isEmpty => défini si la sidebar affiche un formulaire vide ou les details d'une tâche
// task => se sont les données d'une tache

export default function RightSidebar ({isOpen, onClose, isEmpty, task}){``
  //par default la sidebar affichera un formulaire vide

  return(
    <div className={`${!isOpen ? 'hidden' : 'block'} drop-shadow-md bg-neutral-100 mr-2 my-2 w-1/2 rounded p-4`}>
      <button>Marquer comme terminées</button>
        {isEmpty ? <AddTaskForm/> : <UpdateTaskForm key={task.id} task={task}/>}
      <button onClick={onClose}>fermer la sidebar</button>
    </div>
  )
}