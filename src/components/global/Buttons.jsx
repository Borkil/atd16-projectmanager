
export function PrimaryButton({ children, onClick}) {
  return (
    <button
      className="
        rounded
        border-2
        border-neutral-400
        p-1
        hover:bg-neutral-200
        text-xs
        flex
        justify-between
        items-center
        gap-2
        transition
        "
      onClick={onClick}
    >
      {children}
    </button>
  );
}





export function WarningButton({ children, onClick }) {
  return (
    <button
      className="
        rounded
        border-2
        border-red-400
        p-1
        hover:bg-red-200
        text-xs
        flex
        justify-between
        items-center
        gap-2
        transition
        text-red-400
        "
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function SubmitButton({ children, onClick }) {
  return (
    <button
      className="
        rounded
        border-2
        border-sky-400
        p-1
        hover:bg-sky-200
        text-xs
        flex
        justify-between
        items-center
        gap-2
        transition
        text-sky-400
        w-full
        "
      onClick={onClick}
      type="submit"
    >
      {children}
    </button>
  );
}

export function CloseButton({ children, onClick}) {
  return (
    <button
      className="
        p-1
        hover:text-red-500
        transition-colors
        "
      onClick={onClick}
    >
      {children}
    </button>
  );
}