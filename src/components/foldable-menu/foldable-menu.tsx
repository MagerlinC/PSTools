import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./foldable-menu.scss";

type menuItem = {
  name: string;
  id: number;
};

type FoldableMenuProps = {
  menuItems: menuItem[];
  location: menuLocation;
  routeBase: string;
};

export enum menuLocation {
  LEFT = "left",
  RIGHT = "right",
  TOP = "top",
  BOTTOM = "bottom",
}

function FoldableMenu({ menuItems, location, routeBase }: FoldableMenuProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={"menu-container " + location + (open ? " hide" : "")}
    >
      {open && (
        <div className={"foldable-menu"}>
          {menuItems.map((menuItem) => (
            <Link
              onClick={() => setOpen(false)}
              className={"menu-item"}
              to={"/" + routeBase + "/" + menuItem.id}
            >
              {menuItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
export default FoldableMenu;
