"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import InputText from "../global/InputText.jsx";
import TextArea from "../global/TextArea.jsx";
import { SubmitButton } from "../global/Buttons.jsx";

// task => se sont les données d'une tache
export default function AddTaskForm({ task, onClose }) {
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
        />
        <TextArea 
        name={'description'}
        placHolder={"En quoi consiste la tâche ?"}
        label={'Description'}
        defaultValue={task.description}
        />

        <div className="justify-self-end" >
          <SubmitButton>Modifier la tâche</SubmitButton>
        </div>
      </form>
    </div>
  );
}
