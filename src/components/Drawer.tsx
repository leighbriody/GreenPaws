import React from "react";

export default function Drawer() {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label for="my-drawer-4" className="drawer-button btn btn-primary">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label for="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
