"use client";

import { useState } from "react";

export default function SelectUpdateContributors({ users, project }) {
  const [userList, setUserList] = useState(project.contributor);
  const [selectList, setSelectList] = useState(users["hydra:member"]);
 
  const handleToggleUserList = (user) => {
    if (event.target.checked) {
      setUserList([user, ...userList]);
    }else{
      setUserList(userList.filter((a) => a.id !== user.id));
    }
  };

  return (
    <>
      <div>
        {userList.map((user) => (
          <div key={user.id} className="bg-green-100">
            <p>{user.firstname}</p>
          </div>
        ))}
      </div>
      <fieldset>
        <legend>Choisi des contributeurs</legend>
        {selectList.map((user) => (
          <div key={user.id}>
            <input
              type="checkbox"
              id={user.id}
              name="contributor"
              value={user["@id"]}
              onChange={() => handleToggleUserList(user)}
              defaultChecked={userList.find(e => e.id === user.id)? true : false}
            />
            <label htmlFor={user.id}>{user.firstname}</label>
          </div>
        ))}
      </fieldset>
    </>
  );
}

