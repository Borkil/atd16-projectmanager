import AddUserForm from "../form/users/AddUserForm.jsx";
import UpdateUserForm from "../form/users/UpdateUserForm.jsx";
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
        <UpdateUserForm
          key={user.id}
          user={user}
          onClose={onClose}
        />
      )}
    </>
  );
}