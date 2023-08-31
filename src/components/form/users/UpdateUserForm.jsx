
import { useRouter } from "next/navigation";
import { SubmitButton } from "../../global/Buttons.jsx";
import LabelInput from "@/components/global/LabelInput.jsx";
import InputText from "@/components/global/InputText.jsx";


export default function UpdateUserForm({ user }) {

  const router = useRouter();

  //cette fonction permet de mettre a jour une tache en bdd
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
      method: "PUT",
      body: JSONdata,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/users/${user.id}`,
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex gap-4 items-center ">
          <LabelInput htmlFor="firstname">Prénom</LabelInput>
          <InputText name={"firstname"} type={"text"} id={"firstname"} defaultValue={user.firstname}/>
        </div>
        <div className="flex gap-4 items-center ">
          <LabelInput htmlFor="lastname">Nom</LabelInput>
          <InputText name={"lastname"} type={"text"} id="lastname" defaultValue={user.lastname}/>
        </div>
        <div className="flex gap-4 items-center ">
          <LabelInput htmlFor="email">Email</LabelInput>
          <InputText name={"email"} type={"email"} id="email" defaultValue={user.email}/>
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
    </div>
  );
}
