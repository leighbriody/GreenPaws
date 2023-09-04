import Link from "next/link";
import React from "react";
import { FaUser, FaBriefcase, FaClipboardList } from "react-icons/fa";

export default function AdminNavigation() {
  return (
    <div className="navbar bg-base-100 border-t border-gray-300">
      <div className="navbar-start">
        <div className="dropdown">
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link href={"/dashboard/profile"}>
                <div>
                  <FaUser className="mr-2" /> Profile{" "}
                </div>
              </Link>
            </li>

            <li>
              <div>
                <FaBriefcase className="mr-2" /> Jobs{" "}
              </div>
            </li>
            <li>
              <div>
                <FaClipboardList className="mr-2" /> Applications{" "}
              </div>
            </li>
            <li>
              <div>
                <FaClipboardList className="mr-2" /> Applications{" "}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/dashboard/profile"}>
              <FaUser className="mr-2" /> Profile{" "}
            </Link>
          </li>
          <li>
            <Link href={"/dashboard/jobs"}>
              <FaBriefcase className="mr-2" /> Jobs{" "}
            </Link>
          </li>
          <li>
            <Link href={"/dashboard/applications"}>
              <FaClipboardList className="mr-2" /> Applications{" "}
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
