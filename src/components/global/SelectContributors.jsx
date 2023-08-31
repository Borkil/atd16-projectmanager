"use client";

import { useState } from "react";

export default function SelectContributors({ users }) {
  const [userList, setUserList] = useState([]);

  const handleToggleUserList = (user) => {
    if (event.target.checked) {
      setUserList([user, ...userList]);
    } else {
      setUserList(userList.filter((a) => a.id !== user.id));
    }
  };

  return (
    <>
      <div>
        {userList.map((user) => (
          <p key={user.id}>{user.firstname}</p>
        ))}
      </div>
      <fieldset>
        <legend>Choisi des contributeurs</legend>
        {users["hydra:member"].map((user) => (
          <div key={user.id}>
            <input
              type="checkbox"
              id={user.id}
              name="contributor"
              value={user["@id"]}
              onChange={() => handleToggleUserList(user)}
            />
            <label htmlFor={user.id}>{user.firstname}</label>
          </div>
        ))}
      </fieldset>
    </>
  );
}
