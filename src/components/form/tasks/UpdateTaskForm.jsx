"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import InputName from "@/components/global/InputName.jsx";
import TextArea from "../../global/TextArea.jsx";
import { SubmitButton } from "../../global/Buttons.jsx";
import SelectElement from "@/components/global/SelectElement.jsx";
import LabelInput from "@/components/global/LabelInput.jsx";

// task => se sont les données d'une tache
// projects => liste des projets pour l'elements select du formulaire
export default function UpdateTaskForm({ task, projects, currentProject, users , currentUser }) {
  const [name, setName] = useState(task.name);
  const router = useRouter();
  const defaultSelectProject = currentProject
    ? task.project
    : task.project && task.project["@id"];

  const defaultSelectUser = task.owner ? task.owner : `/api/users/${currentUser.id}`
  //cette fonction permet de mettre a jour une tache en bdd
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      description: formData.get("description"),
      status: task.status,
      project: formData.get("project") === "" ? null : formData.get("project"),
      owner: formData.get("owner")
    };

    const JSONdata = JSON.stringify(data);
    console.log(JSONdata)
    const options = {
      method: "PUT",
      body: JSONdata,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    };

    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_URL_API}/tasks/${task.id}`,
    //   options
    // );
    // if (response.ok) {
    //   console.log("ok mis à jour en bdd");
    //   router.refresh();
    // } else {
    //   console.log("attention pas modifié en bdd");
    // }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid gap-4 text-sm">
        <InputName
          name="name"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
          placeHolder={"Donnez un nom à la tache"}
        />
        <TextArea
          name={"description"}
          placHolder={"En quoi consiste la tâche ?"}
          label={"Description"}
          defaultValue={task.description}
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
          <SubmitButton>Modifier la tâche</SubmitButton>
        </div>
      </form>
    </div>
  );
}
