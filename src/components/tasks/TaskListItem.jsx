export default function TaskListItem ({children}){
  return(
    <li className="flex"><input type="radio" /> <span className="text-sm">{children}</span><span>A faire</span> </li>
  )
}