'use client';

import { signOut } from "next-auth/react";

export default function SignOutButton({children}){
  return (
    <button
      className="
        text-xs
        underline
        text-neutral-400
        hover:text-neutral-700
        transition
        "
      onClick={()=> signOut()}
    >
      {children}
    </button>
  );
}