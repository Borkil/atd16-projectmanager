'use client';

import { signOut } from "next-auth/react";

export default function SignOutButton({children}){
  return (
    <button
      className="
        p-1
        rounded
        transition-colors
        bg-neutral-100
        "
      onClick={()=> signOut()}
    >
      {children}
    </button>
  );
}