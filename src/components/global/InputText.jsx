
export default function InputText({name, defaultValue, onChange, placeHolder, type, id}){
  return(
    <input
      type={type}
      name={name}
      id={id}
      value={defaultValue}
      onChange={onChange}
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