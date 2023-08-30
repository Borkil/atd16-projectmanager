
export default function SelectElement({ name ,elements , defaultSelect, children }) {

  return (
      <select name={name} id={name} defaultValue={defaultSelect}>
        <option value="">{children}</option>
        {elements.map((element) => (
          <option
            key={element.id}
            value={element["@id"]}
          >
            {element.name ? element.name : `${element.firstname} ${element.lastname}`}
          </option>
        ))}
      </select>
  );
}
