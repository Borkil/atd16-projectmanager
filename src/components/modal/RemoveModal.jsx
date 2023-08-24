import { PrimaryButton, WarningButton } from "../global/Buttons.jsx";

export default function RemoveModal({ onClose, onRemove }) {

  return (
    <div className="fixed inset-0 bg-slate-800 bg-opacity-40 flex justify-center items-center">
      <div className="bg-slate-100 rounded py-4 h-auto w-1/2 flex flex-col gap-4">
        <h2 className="text-xl font-semibold px-4">Supprimer définitivement la tâche?</h2>
        <p className="border-y-2 p-4 text-sm">
          Ceci supprimera définitevement la tâche. Elle ne sera plus accessible
          par quicomque, vous y compris. Cette action est irréversible.
        </p>
        <div className="flex justify-end gap-4 px-4">
          <PrimaryButton onClick={onClose}>Annuler</PrimaryButton>
          <WarningButton onClick={onRemove}>Supprimer</WarningButton>
        </div>
      </div>
    </div>
  );
}
