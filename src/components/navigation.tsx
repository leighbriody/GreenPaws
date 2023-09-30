"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes";
import Logo from "../../public/images/logo.png";

import { RiArrowDropDownLine } from "react-icons/ri";
import Moon from "./Moon";
import Sun from "./Sun";
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const { data: session } = useSession();
  const pathname = usePathname();

  function toggleTheme() {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <nav id="navbar" className=" w-full border-b border-gray-100 ">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
        <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4">
          <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
            <div
              aria-label="ampire logo"
              className="nav-link flex items-center space-x-2"
            >
              <Image
                src={Logo}
                width={200}
                height={200}
                alt="logo"
                className="h-7 w-auto m-0"
              />
            </div>

            <button
              aria-label="humburger"
              id="hamburger"
              className={`relative -mr-6 p-6 lg:hidden ${
                isMenuOpen ? "navbar-active" : ""
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div
                aria-hidden="true"
                id="line"
                className={`m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300 transform ${
                  isMenuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              ></div>
              <div
                aria-hidden="true"
                id="line2"
                className={`m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300 transform ${
                  isMenuOpen ? "-translate-y-1 -rotate-45" : ""
                }`}
              ></div>
            </button>
          </div>
          <div
            aria-hidden="true"
            id="layer"
            className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-darker/70 lg:hidden"
          ></div>
          <div
            id="navlinks"
            className={`${
              isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
            } absolute top-full right-0 z-30 w-full origin-top-left translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-auto lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none dark:lg:bg-transparent`}
          >
            <div className="text-gray-600 dark:text-gray-300 lg:pr-4 ">
              <ul className="space-y-6 text-base font-medium tracking-wide lg:flex lg:space-y-0 lg:text-sm">
                <li>
                  <Link
                    href={"/"}
                    className={`nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4 ${
                      pathname == "/" ? "text-primary" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/about"}
                    className={`nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4 ${
                      pathname == "/about" ? "text-primary" : ""
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/pricing"}
                    className={`nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4 ${
                      pathname == "/pricing" ? "text-primary" : ""
                    }`}
                  >
                    Pricing
                  </Link>
                </li>
                {session && (
                  <li>
                    <Link
                      href={"/dashboard"}
                      className={`nav-link block transition hover:text-primary dark:hover:text-primaryLight lg:px-4 ${
                        pathname == "/dashboard" ? "text-primary" : ""
                      }`}
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <div className="mt-5 -ml-1 flex w-full flex-col space-y-2 border-primary/10 dark:border-gray-700 sm:flex-row md:w-max lg:mt-0 lg:mr-6 lg:space-y-0 lg:border-l lg:pl-6">
              <div className="lg:hidden">
                {currentTheme === "dark" && <Sun changeTheme={toggleTheme} />}
                {currentTheme === "light" && <Moon changeTheme={toggleTheme} />}
              </div>
            </div>
            <div className="mt-12 -ml-1 flex w-full flex-col space-y-2 border-primary/10 dark:border-gray-700 sm:flex-row md:w-max lg:mt-0 lg:mr-6 lg:space-y-0 lg:border-l lg:pl-6">
              <div className="relative ml-auto flex h-9 w-full items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-primaryLight sm:px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 lg:dark:before:bg-gray-800">
                {!session && (
                  <Link
                    href={"/sign-in"}
                    className="relative text-sm font-semibold text-white dark:text-gray-900 lg:text-primary lg:dark:text-white"
                  >
                    Get Started Free
                  </Link>
                )}
                {session && (
                  <Link
                    href={"/"}
                    onClick={() => signOut()}
                    className="relative text-sm font-semibold text-white dark:text-gray-900 lg:text-primary lg:dark:text-white"
                  >
                    Sign Out
                  </Link>
                )}
              </div>
            </div>

            {session?.user?.image && (
              <>
                <div className="flex items-center space-x-4">
                  <div className="switcher group relative hidden h-9 w-9 rounded-full lg:flex focus:outline-none">
                    {currentTheme === "dark" && (
                      <div>
                        <Sun changeTheme={toggleTheme} />
                      </div>
                    )}
                    <div>
                      {currentTheme === "light" && (
                        <Moon changeTheme={toggleTheme} />
                      )}
                    </div>
                  </div>

                  {/* Added a flex container for spacing */}
                  <button className="switcher group relative hidden h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex focus:outline-none">
                    <div className="dropdown dropdown-end">
                      <label tabIndex={0} className="">
                        <div className="grid grid-cols-[auto,auto] gap-1 items-center mr-5">
                          <div className="group relative h-9 w-9 rounded-full overflow-hidden">
                            <Image
                              src={session?.user?.image}
                              width={500}
                              height={500}
                              alt="user"
                            />
                          </div>
                          <div className="relative group">
                            <div className="rounded-full">
                              <RiArrowDropDownLine />
                            </div>
                          </div>
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                      >
                        <li>
                          <Link href={"/billing"}>Manage Billing</Link>
                        </li>
                        <li>
                          <Link href={"/contact"}>Support</Link>
                        </li>
                      </ul>
                    </div>
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="fixed top-3 right-14 z-20 sm:right-24 lg:hidden mr-5">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="">
                {session?.user?.image && (
                  <div className="grid grid-cols-[auto,auto] gap-1 items-center mr-5">
                    <div className="group relative h-9 w-9 rounded-full overflow-hidden">
                      <Image
                        src={session?.user?.image}
                        width={500}
                        height={500}
                        alt="user"
                      />
                    </div>
                    <div className="relative group">
                      <div className="rounded-full">
                        <RiArrowDropDownLine />
                      </div>
                    </div>
                  </div>
                )}
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
              >
                <li>
                  <Link href={"/billing"}>Manage Billing</Link>
                </li>
                <li>
                  <Link href={"/contact"}>Support</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
