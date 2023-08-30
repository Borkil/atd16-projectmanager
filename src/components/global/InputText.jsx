'use client';

import { useState } from "react";

export default function InputText({name, defaultValue, onChange, placeHolder, type, id}){
  const [value, setValue] = useState(defaultValue)

  return(
    <input
      type={type}
      name={name}
      id={id}
      onChange={e => setValue(e.target.value)}
      defaultValue={value}
      placeholder={placeHolder}
      className="
        text-md
        font-medium
        p-1
        rounded
        outline
        outline-2
        outline-neutral-400
        focus:outline-sky-500
      "
    />
  )
}