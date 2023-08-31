import Link from "next/link.js";

export default function NavItem({ children }) {
  return (
    <li className="text-neutral-700 font-medium text-md flex p-1 gap-3 hover:bg-slate-300 hover:rounded hover:tracking-wider transition-all transition-duration-1500">
      {children}
    </li>
  );
}
