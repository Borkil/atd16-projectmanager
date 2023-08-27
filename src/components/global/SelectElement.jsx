

export default function SelectElement({elements}){
  return(
    <>
    <label htmlFor="selectProject">Choisir un projet</label>
    <select name="project" id="selectProject">
      <option value=''>--choisir un projet--</option>
      {elements.map((element) => (
        <option key={element.id} value={element['@id']}>{element.name}</option>
      ))}
    </select>
    </>
  )
}
