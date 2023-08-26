import { useEffect, useState } from "react";

export default function InputDate({ label, name, defaultValue }) {
  const [data, setData] = useState(new Date(defaultValue));
  const [value, setValue] = useState("");

  function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }
  useEffect(() => {
    if (defaultValue) {
      setValue(formatDateToYYYYMMDD(data));
    }
  }, [data]);

  return (
    <div className="flex gap-4 items-center">
      <label htmlFor="deadline" className="text-sm text-neutral-500">
        {label}
      </label>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="date"
        name={name}
        value={value}
        className="focus:outline-sky-500 hover:ring hover:ring-2 hover:ring-offset-0 hover:ring-neutral-400 rounded cursor-pointer p-1"
      />
    </div>
  );
}
