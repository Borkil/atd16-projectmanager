export default function SelectElement({ elements, defaultSelect }) {
  return (
    <>
      <label htmlFor="selectProject">Choisir un projet</label>
      <select name="project" id="selectProject" defaultValue={defaultSelect}>
        <option value="">--choisir un projet--</option>
        {elements.map((element) => (
          <option
            key={element.id}
            value={element["@id"]}
          >
            {element.name}
          </option>
        ))}
      </select>
    </>
  );
}
