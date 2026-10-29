"use client";

import Image from "next/image";
import Link from "next/link";
import userlogo from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // console.log(user, "Üser");
  // console.log(session, "Session");
  // console.log(isPending);

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
      {isPending ? (
        <p>Loading...</p>
      ) : user ? (
        <div className="flex justify-center gap-2 items-center">
          <p>Hi, {user.name}</p>
          <Image src={user.image} width={40} height={40} alt="user logo"></Image>

          <button
            className="bg-gray-200 py-2 px-5 cursor-pointer"
            onClick={async () => await authClient.signOut()}
          >
            Logout
          </button>
        </div>
      ) : (
        <Link href="/login">
          <button className="bg-gray-200 py-2 px-5 cursor-pointer">
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
