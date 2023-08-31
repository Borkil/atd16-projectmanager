

export default function UserInitial({user}) {
  return (
    <div className="bg-sky-500 rounded-full w-fit h-fit p-2 flex items-center justify-center text-sm font-semibold  ">
      {initial(user.firstname, user.lastname)}
    </div>
  )
}

const initial = (firstname, lastname) => {
  return firstname.substring(0,1) + lastname.substring(0,1)
}
