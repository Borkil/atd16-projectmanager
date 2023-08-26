// isOpen => permet d'afficher ou cacher la sideBar. True == afficher
export default function RightSidebar({ isOpen, children }) {
  return (
    <div
      className={`
      ${!isOpen ? "translate-x-96 opacity-0" : "translate-x-0 opacity-1"}
      drop-shadow-md
      bg-white
      w-1/3
      rounded
      flex
      flex-col
      gap-4
      transition-full
      duration-500
      absolute
      right-0
      top-0
      h-full
      p-4
      md:w-1/2
      `}
    >
      {children}
    </div>
  );
}
