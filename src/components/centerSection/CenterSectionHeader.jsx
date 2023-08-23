import Title01 from "../global/titles.jsx";
import PrimaryButton from "../global/PrimaryButton.jsx";
import PlusIcons from "../icons/PlusIcons.jsx";

export default function CenterSectionHeader({ onClick }) {
  return (
    <div className="py-4 px-4 border-b flex flex-col items-start gap-2">
      <Title01>Mes tâches</Title01>
      <PrimaryButton onClick={onClick}>
        <PlusIcons />
        Ajouter une tache
      </PrimaryButton>
    </div>
  );
}
