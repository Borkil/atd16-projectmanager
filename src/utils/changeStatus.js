

export default async function changeStatus (task, status){

  const options = {
    method: "PUT",
    body: JSON.stringify({status: status}),
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/tasks/${task.id}`,
    options
  );

  if (response.ok) {
    console.log("ok mis à jour en bdd");
  } else {
    console.log("attention pas modifié en bdd");
  }
};