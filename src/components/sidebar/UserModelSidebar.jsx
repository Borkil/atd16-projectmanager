'use client';

import AddUserForm from "../form/users/AddUserForm.jsx";
import UpdateUserForm from "../form/users/UpdateUserForm.jsx";
import { CloseButton, TrashButton } from "../global/Buttons.jsx";
import RemoveModal from "../modal/RemoveModal.jsx";
import { createPortal } from "react-dom";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function UserModelSidebar({ isEmpty, onClose, user }) {
  const [showModal, setShowModal] = useState(false);
  const uniqueId = Math.random();

  const handleRemove = async () => {
    const options = {
      method: "DELETE",
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/users/${user.id}`,
      options
    );

    onClose();
    setShowModal(false);
    if (response.ok) {
      console.log("ok supprimer en bdd");
      router.refresh();
    } else {
      console.log("attention pas supprimer en bdd");
    }
  };


  return (
    <>
      {/* header de la sidebar */}
      <div className="flex justify-end">
        <div className="flex gap-2">
          {!isEmpty ? (
            <TrashButton data={user} onClick={() => setShowModal(true)} />
          ) : null}
          <CloseButton onClick={onClose} />
        </div>
      </div>

      {/* controle l'affichage entre un formulaire d'ajout et un formulaire de mise à jour */}
      {isEmpty ? (
        <AddUserForm onClose={onClose} key={uniqueId} />
      ) : (
        <UpdateUserForm key={user.id} user={user} onClose={onClose} />
      )}

      {/* Affiche la modale de confirmation de suppression*/}
      {showModal &&
        createPortal(
          <RemoveModal
            onClose={() => setShowModal(false)}
            onRemove={handleRemove}
            title={`Supprimer définitivement l'utilisateur ${user.firstname} ${user.lastname}`}
            body={"Vous allez supprimer définitivement un utilisateur. L'ensemble des tâches de l'utilisateur seront supprimées et ne seront plus accessibles par quicomque, vous y compris. Cette action est irréversible."}
          />,
          document.body
        )}
    </>
  );
}
