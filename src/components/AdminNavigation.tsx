"use client";
import Link from "next/link";
import React from "react";
import { FaUser, FaBriefcase, FaClipboardList } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function AdminNavigation() {
  const pathname = usePathname();
  const SELECTED_HEX = "#560DF8";
  const UNSELECTED_HEX = "#888";

  return (
    <div>
      <div className="navbar bg-base-100 dark:bg-gray-800">
        <div className="navbar-start">
          <div className="dropdown">
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link href="/dashboard/profile">
                  <div className="flex items-center">
                    <FaUser className="mr-2" /> Profile
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/jobs">
                  <div className="flex items-center">
                    <FaBriefcase className="mr-2" /> Jobs
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/applications">
                  <div className="flex items-center">
                    <FaClipboardList className="mr-2" /> Applications
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center  lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/dashboard/profile">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke={`${
                      pathname.includes("profile")
                        ? SELECTED_HEX
                        : UNSELECTED_HEX
                    }`}
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  <p
                    className={`${
                      pathname.includes("profile")
                        ? "text-selected"
                        : "text-unselected"
                    }`}
                  >
                    Profile
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/jobs">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke={`${
                      pathname.includes("jobs") ? SELECTED_HEX : UNSELECTED_HEX
                    }`}
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg>
                  <p
                    className={`${
                      pathname.includes("jobs")
                        ? "text-selected"
                        : "text-unselected"
                    }`}
                  >
                    Jobs
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/applications">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke={`${
                      pathname.includes("applications")
                        ? SELECTED_HEX
                        : UNSELECTED_HEX
                    }`}
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                  <p
                    className={`${
                      pathname.includes("applications")
                        ? "text-selected"
                        : "text-unselected"
                    }`}
                  >
                    Applications
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
}
