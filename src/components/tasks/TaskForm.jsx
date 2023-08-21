"use client";

import { Router, useRouter } from "next/navigation";

export default function TaskForm() {
  const router = useRouter()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      description: formData.get("description"),
      status: "en cours",
    };

    console.log(data);
    const JSONdata = JSON.stringify(data);
    console.log(JSONdata);

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
      router.refresh()
    } else {
      console.log("attention pas creer en bdd");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-sm">
      <label htmlFor="name">Donnez un nom à la tâche</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="description">Description</label>
      <input type="text" id="description" name="description" />
      <button type="submit">Valider</button>
    </form>
  );
}
