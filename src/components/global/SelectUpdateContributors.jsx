"use client";

import { useState } from "react";
import SelectContributorElement from "./SelectContributorElement.jsx";

export default function SelectUpdateContributors({ users, project }) {
  const [userList, setUserList] = useState(project.contributor);
  const [selectList, setSelectList] = useState(users["hydra:member"]);

  const handleToggleUserList = (user) => {
    if (event.target.checked) {
      setUserList([user, ...userList]);
    } else {
      setUserList(userList.filter((a) => a.id !== user.id));
    }
  };

  return (
    <>
      <fieldset>
        <legend className="py-4 text-neutral-400">
          Choisir des contributeurs
        </legend>
        <div className="flex flex-wrap gap-4 mb-4">
          {userList.map((user) => (
            <p
              key={user.id}
              className="bg-slate-200  px-4 py-1 shadow flex justify-center items-center rounded-full text-xs font-medium text-slate-500 "
            >
              {user.firstname}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-1 divide-y-2 border-t-2 border-b-2 ">
          {selectList.map((user) => (
            <SelectContributorElement
              key={user.id}
              user={user}
              defaultChecked={
                userList.find((e) => e.id === user.id) ? true : false
              }
              onChange={() => handleToggleUserList(user)}
              value={user["@id"]}
            />
          ))}
        </div>
      </fieldset>
    </>
  );
}
