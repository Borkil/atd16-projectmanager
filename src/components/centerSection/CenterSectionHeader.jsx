import Title01 from "../global/Title.jsx";
import {AddButton} from "../global/Buttons.jsx";
import PlusIcons from "../icons/Icons.jsx";

export default function CenterSectionHeader({title, onClick }) {
  return (
    <div className="py-4 px-4 flex gap-4 items-center">
      <Title01>{title}</Title01>
      <AddButton onClick={onClick}><PlusIcons/></AddButton>
    </div>
  );
}
