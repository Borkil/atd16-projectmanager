"use client";

import { useRouter } from "next/navigation";
import InputText from "../global/InputText.jsx";
import TextArea from "../global/TextArea.jsx";
import { SubmitButton } from "../global/Buttons.jsx";

// isEmpty => défini si la sidebar affiche un formulaire vide ou les details d'une tâche
// task => se sont les données d'une tache

export default function AddTaskForm() {
  const router = useRouter();
  //cette fonction permet de creer une tache en bdd
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      description: formData.get("description"),
      status: "en cours",
    };
    const JSONdata = JSON.stringify(data);

    const options = {
      method: "POST",
      body: JSONdata,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    };

    const response = await fetch("http://atd16-api.test/api/tasks", options);
    if (response.ok) {
      console.log("ok creer en bdd");
      router.refresh();
    } else {
      console.log("attention pas creer en bdd");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 text-sm">
      <InputText name={"name"} placeHolder={"Donnez un nom à la tâche"} />
      <TextArea
        label={'Description'}
        name={"description"}
        placHolder={"En quoi consiste la tâche ?"}
      />
        <div className="justify-self-end">
          <SubmitButton>Créer la tâche</SubmitButton>
        </div>
    </form>
  );
}
