//import React from 'react';
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${isActive ? "border-b border-b-red-500" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
