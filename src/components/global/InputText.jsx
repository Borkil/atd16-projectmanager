import { useState } from "react"

export default function InputText({name, defaultValue, onChange}){


  return(
    <input type="text" name={name} value={defaultValue} onChange={onChange} />
  )
}