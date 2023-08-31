"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import InputName from "@/components/global/InputName.jsx";
import TextArea from "../../global/TextArea.jsx";
import { SubmitButton } from "../../global/Buttons.jsx";
import InputDate from "../../global/InputDate.jsx";

// project => se sont les données d'un project
export default function UpdateProjectForm({ project, onClose }) {
  const [name, setName] = useState(project.name);
  const router = useRouter();
  
  //cette fonction permet de mettre à jour un projet en bdd
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name"),
      description: formData.get("description"),
      deadline : formData.get('deadline') ? formData.get('deadline') : null
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
      `${process.env.NEXT_PUBLIC_URL_API}/projects/${project.id}`,
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
        <InputName
          name="name"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
          placeHolder={'Donnez un nom au projet'}
        />
        <TextArea 
          name={'description'}
          placHolder={"En quoi consiste le projet ?"}
          label={'Description'}
          defaultValue={project.description}
        />
        <InputDate name={'deadline'} label={'Deadline'} defaultValue={project.deadline} />
        <div className="justify-self-end" >
          <SubmitButton>Mettre à jour le projet</SubmitButton>
        </div>
      </form>
    </div>
  );
}
