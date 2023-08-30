

export default function LabelInput({children, htmlFor}) {
  return (
    <label htmlFor={htmlFor}className="p-1 text-xs font-medium basis-1/6">
      {children}
    </label>
  )
}
