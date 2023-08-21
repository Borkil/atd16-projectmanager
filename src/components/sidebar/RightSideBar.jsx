import TaskForm from "../tasks/TaskForm.jsx"

export default function RightSidebar ({isOpen, onClose}){
  return(
    <div className={!isOpen ? 'hidden' : 'block'}>
      <button>Marquer comme terminées</button>
      <TaskForm/>
      <button onClick={onClose}>fermer la sidebar</button>
    </div>
  )
}