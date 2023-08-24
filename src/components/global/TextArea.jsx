export default function TextArea({name, placHolder, label, defaultValue}){
  return(
    <>
    <label htmlFor="textArea" className="text-sm text-neutral-500">{label}</label>
    <textarea 
      name={name}
      id="textArea"
      cols="30"
      rows="8"
      placeholder={placHolder}
      defaultValue={defaultValue}
      className="
        hover:outline-none
        hover:outline-neutral-400
        focus:outline-sky-500
        rounded
        px-2
        py-1
        font-medium
      "
      ></textarea>
    </>
  )
}