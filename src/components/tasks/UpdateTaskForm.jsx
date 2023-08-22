"use client";

import { Router, useRouter } from "next/navigation";
import { useState } from "react";
import InputText from "../global/InputText.jsx";

// task => se sont les données d'une tache
export default function AddTaskForm({task}) {
  const [name, setName] = useState(task.name)
   
  const router = useRouter()
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

    const response = await fetch(`http://atd16-api.test/api/tasks/${task.id}`, options);
    if (response.ok) {
      console.log("ok mis à jour en bdd");
      router.refresh()
    } else {
      console.log("attention pas modifié en bdd");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-sm">
      <InputText name='name' defaultValue={name} onChange={e=>setName(e.target.value)}/>
      <label htmlFor="description">Description</label>
      <textarea id="description" name="description" defaultValue={task.description}/>
      <button type="submit">Modifier la tâche</button>
    </form>
  );
}
