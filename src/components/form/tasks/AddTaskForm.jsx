import { useRouter } from "next/navigation";
import InputName from "@/components/global/InputName.jsx";
import TextArea from "../../global/TextArea.jsx";
import { SubmitButton } from "../../global/Buttons.jsx";
import SelectElement from "@/components/global/SelectElement.jsx";
import LabelInput from "@/components/global/LabelInput.jsx";

// isEmpty => défini si la sidebar affiche un formulaire vide ou les details d'une tâche
// task => se sont les données d'une tache
//currentProject => le projet courrant dans une page projet,
//                  permet de mettre une valeur par defaut a l'element select

export default function AddTaskForm({
  onClose,
  projects,
  currentProject,
  currentUser,
  users,
}) {
  const router = useRouter();

  const defaultSelectProject = currentProject && currentProject["@id"];

  const defaultSelectUser = `/api/users/${currentUser.id}`


  //cette fonction permet de creer une tache en bdd
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      description: formData.get("description"),
      status: "encours",
      project: formData.get("project") === "" ? null : formData.get("project"),
      owner: formData.get("owner")
    };
    const JSONdata = JSON.stringify(data);
    console.log(JSONdata)
    const options = {
      method: "POST",
      body: JSONdata,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/tasks`, options);
    onClose();
    if (response.ok) {
      console.log("ok creer en bdd");
      router.refresh();
    } else {
      console.log("attention pas creer en bdd");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 text-sm">
      <InputName name={"name"} placeHolder={"Donnez un nom à la tâche"} />

      <TextArea
        label={"Description"}
        name={"description"}
        placHolder={"En quoi consiste la tâche ?"}
      />

      <LabelInput htmlFor="project">Choisir un projet</LabelInput>
      <SelectElement
        name="project"
        defaultSelect={defaultSelectProject}
        elements={projects}
      >
        --choisir un projet--
      </SelectElement>

      <LabelInput htmlFor="owner">Choisir un propriétaire</LabelInput>
      <SelectElement
        name="owner"
        defaultSelect={defaultSelectUser}
        elements={users}
      >
        --choisir un un propriétaire--
      </SelectElement>

      <div className="justify-self-end">
        <SubmitButton>Créer la tâche</SubmitButton>
      </div>
    </form>
  );
}
