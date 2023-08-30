export default function UsersList({users, onSelect}){
  return(
    <table className="table-fixed bg-green-100">
      <thead>
        <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users['hydra:member'].map((user)=>(
          <tr key={user.id} onClick={()=> onSelect(user)}>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}