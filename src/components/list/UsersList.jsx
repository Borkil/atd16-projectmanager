export default function UsersList({ users, onSelect }) {
  return (
    <div className="p-10 border-t-2 mt-10">
      <table className="table-fixed divide-y text-left w-full text-sm">
        <thead>
          <tr className="text-neutral-500">
            <th className="py-4">Prénom</th>
            <th>Nom</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className="divide-y ">
          {users["hydra:member"].map((user) => (
            <tr
              onClick={() => onSelect(user)}
              key={user.id}
              className="hover:bg-neutral-200 cursor-pointer "
            >
              <td className="truncate pr-2 py-4">{user.firstname}</td>
              <td className="truncate pr-2">{user.lastname}</td>
              <td className="truncate pr-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
