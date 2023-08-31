export default function SelectContributorElement({user, onChange, defaultChecked}) {
  return (
    <div
      key={user.id}
      className=" flex justify-between hover:bg-neutral-200 px-8 py-3 gap-4"
    >
      <label htmlFor={user.id}>{`${user.firstname} ${user.lastname}`}</label>
      <input
        type="checkbox"
        id={user.id}
        name="contributor"
        value={user["@id"]}
        onChange={onChange}
        className="cursor-pointer h-4 w-4"
        defaultChecked={defaultChecked}
      />
    </div>
  );
}
