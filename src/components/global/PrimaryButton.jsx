

export default function PrimaryButton({ children, onClick }) {
  return (
    <button
      className="
        rounded
        border
        p-1
        hover:bg-neutral-200
        text-sm
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


