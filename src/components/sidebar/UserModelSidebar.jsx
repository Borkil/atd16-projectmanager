import AddUserForm from "../form/users/AddUserForm.jsx";
import { CloseButton } from "../global/Buttons.jsx";

export default function UserModelSidebar({ isEmpty, onClose, user }) {
  const uniqueId = Math.random();
  return (
    <>
      <div className="flex justify-end">
        <CloseButton onClick={onClose} />
      </div>

      {isEmpty ? (
        <AddUserForm onClose={onClose} key={uniqueId} />
      ) : (
        <UpdateProjectForm
          key={project.id}
          project={project}
          onClose={onClose}
        />
      )}
    </>
  );
}