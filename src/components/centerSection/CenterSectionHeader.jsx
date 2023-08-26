import Title01 from "../global/titles.jsx";
import {PrimaryButton} from "../global/Buttons.jsx";
import PlusIcons from "../icons/Icons.jsx";

export default function CenterSectionHeader({title, onClick }) {
  return (
    <div className="py-4 px-4 border-b flex flex-col items-start gap-2">
      <Title01>{title}</Title01>
      <PrimaryButton onClick={onClick}>
        <PlusIcons />
        Ajouter
      </PrimaryButton>
    </div>
  );
}
