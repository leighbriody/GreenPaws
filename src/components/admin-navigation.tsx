import React from "react";
import { FaUser, FaBriefcase, FaClipboardList } from "react-icons/fa"; // Import the React icons

export default function AdminNavigation() {
  return (
    <div className="navbar bg-base-100 border-t border-gray-300">
      <div className="navbar-start">
        <div className="dropdown">
          {/* ... */}
          <ul
            tabindex="0"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <div>
                <FaUser className="mr-2" /> Profile{" "}
                {/* Add the icon and spacing */}
              </div>
            </li>
            <li>
              <div>
                <FaBriefcase className="mr-2" /> Jobs{" "}
                {/* Add the icon and spacing */}
              </div>
            </li>
            <li>
              <div>
                <FaClipboardList className="mr-2" /> Applications{" "}
                {/* Add the icon and spacing */}
              </div>
            </li>
            <li>
              <div>
                <FaClipboardList className="mr-2" /> Applications{" "}
                {/* Add the icon and spacing */}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>
              <FaUser className="mr-2" /> Profile{" "}
              {/* Add the icon and spacing */}
            </a>
          </li>
          <li>
            <a>
              <FaBriefcase className="mr-2" /> Jobs{" "}
              {/* Add the icon and spacing */}
            </a>
          </li>
          <li>
            <a>
              <FaClipboardList className="mr-2" /> Applications{" "}
              {/* Add the icon and spacing */}
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
