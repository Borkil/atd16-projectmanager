"use client";

import { useRouter } from "next/navigation";
import InputText from "../../global/InputText.jsx";
import TextArea from "../../global/TextArea.jsx";
import { SubmitButton } from "../../global/Buttons.jsx";
import InputDate from "../../global/InputDate.jsx";

// isEmpty => défini si la sidebar affiche un formulaire vide ou les details d'un projet
// project => se sont les données d'une tache

export default function AddProjectForm({ onClose }) {
  const router = useRouter();
  //cette fonction permet de creer un projet en bdd
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      description: formData.get("description"),
      status: "en cours",
      deadline : formData.get('deadline') ? formData.get('deadline') : null
    };
    const JSONdata = JSON.stringify(data);

    const options = {
      method: "POST",
      body: JSONdata,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    };

    const response = await fetch("http://atd16-api.test/api/projects", options);
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
      <InputText name={"name"} placeHolder={"Donnez un nom au projet"} />
      <TextArea
        label={"Description"}
        name={"description"}
        placHolder={"En quoi consiste le projet ?"}
      />
      <InputDate name={'deadline'} label={'Deadline'} />
      <div className="justify-self-end">
        <SubmitButton>Créer le projet</SubmitButton>
      </div>
    </form>
  );
}
