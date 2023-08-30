
export default function InputName({name, defaultValue, onChange, placeHolder}){
  return(
    <input
      name={name}
      value={defaultValue}
      onChange={onChange}
      placeholder={placeHolder}
      className="
        text-lg
        font-semibold
        p-1
        rounded
        hover:outline-none
        hover:outline-neutral-400
        focus:outline-sky-500
      "
    />
  )
}