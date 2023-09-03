"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { LoginButton, LoginText } from "./buttons";
import { LogoutButton } from "./buttons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const { data: session } = useSession();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href={"/home"}
              className={pathname == "/home" ? "text-primary" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className={pathname == "/about" ? "text-primary" : ""}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href={"/home"}
              className={pathname == "/pricing" ? "text-primary" : ""}
            >
              Pricing
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!session && <LoginText />}
        {!session && <LoginButton />}
        {session && <LogoutButton />}
      </div>
    </div>
  );
}
