"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import InputText from "../../global/InputText.jsx";
import TextArea from "../../global/TextArea.jsx";
import { SubmitButton } from "../../global/Buttons.jsx";
import SelectElement from "@/components/global/SelectElement.jsx";

// task => se sont les données d'une tache
// projects => liste des projets pour l'elements select du formulaire
export default function UpdateTaskForm({ task, projects }) {
  const [name, setName] = useState(task.name);
  const router = useRouter();

  //cette fonction permet de mettre a jour une tache en bdd
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      description: formData.get("description"),
      status: "en cours",
      projects : formData.get('project') === '' ? null : formData.get('project') 
    };

    const JSONdata = JSON.stringify(data);

    const options = {
      method: "PUT",
      body: JSONdata,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    };

    const response = await fetch(
      `http://atd16-api.test/api/tasks/${task.id}`,
      options
    );
    if (response.ok) {
      console.log("ok mis à jour en bdd");
      router.refresh();
    } else {
      console.log("attention pas modifié en bdd");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid gap-4 text-sm">
        <InputText
          name="name"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
          placeHolder={'Donnez un nom à la tache'}
        />
        <TextArea 
        name={'description'}
        placHolder={"En quoi consiste la tâche ?"}
        label={'Description'}
        defaultValue={task.description}
        />
        <SelectElement defaultSelect={task.projects} elements={projects}/>
        <div className="justify-self-end" >
          <SubmitButton>Modifier la tâche</SubmitButton>
        </div>
      </form>
    </div>
  );
}
