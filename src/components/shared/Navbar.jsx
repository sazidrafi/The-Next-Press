//import React from 'react';

import Image from "next/image";
import Link from "next/link";
import userlogo from "@/assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="flex justify-between container mx-auto py-2 m-3">
      <div></div>
      <ul className="flex justify-between gap-3 text-gray-500">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/aboutus">About</NavLink>
        </li>
        <li>
          <NavLink href="/career">Career</NavLink>
        </li>
      </ul>
      <div className="flex justify-center gap-2 items-center">
        <Image src={userlogo} alt="user logo"></Image>
        <Link href="/login">
          <button className="bg-gray-200 py-2 px-5 cursor-pointer">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
