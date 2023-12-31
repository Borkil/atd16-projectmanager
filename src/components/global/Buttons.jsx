import { TrashIcon, CrossIcon } from "../icons/Icons.jsx";


export function PrimaryButton({ children, onClick}) {
  return (
    <button
      className="
        rounded
        border-2
        p-1
        bg-sky-500
        hover:bg-sky-600
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

export function PrimaryButtonBorder({ children, onClick}) {
  return (
    <button
      className="
        rounded
        border-2
        border-sky-500
        text-sky-500
        p-1
        hover:bg-sky-200
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

export function TaskDoneButton({ children, onClick}) {
  return (
    <button
      className="
        rounded
        border-2
        border-green-500
        text-green-500
        p-1
        hover:bg-green-200
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

export function SecondaryButton({ children, onClick}) {
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
        bg-red-500
        p-2
        hover:bg-red-600
        text-xs
        flex
        justify-between
        items-center
        gap-2
        transition
        text-white
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
        p-2
        bg-sky-500
        hover:bg-sky-600
        text-xs
        flex
        justify-between
        items-center
        gap-2
        transition
        text-white
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
        hover:text-sky-500
        transition-colors
        "
      onClick={onClick}
    >
      <CrossIcon/>
    </button>
  );
}

export function TrashButton({ children, onClick}) {
  return (
    <button
      className="
        p-1
        hover:text-red-500
        transition-colors
        "
      onClick={onClick}
    >
      <TrashIcon/>
    </button>
  );
}

export function AddButton({ children, onClick}) {
  return (
    <button
      className="
        p-1
        bg-sky-500
        text-white
        transition-colors
        rounded-b-lg
        rounded-r-lg
        w-10
        h-9
        flex
        justify-center
        items-center
        shadow-md
        shadow-sky-300
        hover:bg-sky-600
        hover:scale-110

        "
      onClick={onClick}
    >
      {children}
    </button>
  );
}

