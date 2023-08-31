import { useRouter } from "next/navigation.js";
import LabelInput from "@/components/global/LabelInput.jsx";
import InputText from "@/components/global/InputText.jsx";
import { SubmitButton } from "@/components/global/Buttons.jsx";

export default function AddUserForm({ onClose }) {
  const router = useRouter();

  //cette fonction permet de creer une tache en bdd
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      email: formData.get("email"),
      lastname: formData.get("lastname"),
      firstname: formData.get("firstname"),
      plainPassword: formData.get("plainpassword"),
    };

    const JSONdata = JSON.stringify(data);

    const options = {
      method: "POST",
      body: JSONdata,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    console.log(JSONdata);
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/users`, options);
    onClose();
    if (response.ok) {
      console.log("ok creer en bdd");
      router.refresh();
    } else {
      console.log("attention pas creer en bdd");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex gap-4 items-center ">
        <LabelInput htmlFor="firstname">Prénom</LabelInput>
        <InputText name={"firstname"} type={"text"} id={"firstname"} />
      </div>
      <div className="flex gap-4 items-center ">
        <LabelInput htmlFor="lastname">Nom</LabelInput>
        <InputText name={"lastname"} type={"text"} id="lastname" />
      </div>
      <div className="flex gap-4 items-center ">
        <LabelInput htmlFor="email">Email</LabelInput>
        <InputText name={"email"} type={"email"} id="email" />
      </div>
      <div className="flex gap-4 items-center ">
        <LabelInput htmlFor="plainpassword">password</LabelInput>
        <InputText
          name={"plainpassword"}
          type={"password"}
          id="plainpassword"
        />
      </div>
      <SubmitButton>Valider</SubmitButton>
    </form>
  );
}
