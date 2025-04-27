import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const menus = [
  {
    label: "Boys",
    to: "/",
    children: [
      { label: "Ucu", to: "ucu" },
      { label: "Ken", to: "Ken" },
    ],
  },
];

function NaviLi({ li = [] }) {
  const [displayChildren, setDisplayChildren] = useState({});
  function handleOnClick(getCurrentLabel) {
    setDisplayChildren({
      ...displayChildren,
      [getCurrentLabel]: !displayChildren[getCurrentLabel],
    });
  }
  return (
    <li>
      <div className=" flex items-center gap-4 cursor-pointer">
        <p>{li.label}</p>
        {li && li.children && li.children.length && (
          <span onClick={() => handleOnClick(li.label)}>
            {displayChildren[li.label] ? (
              <Icon
                icon="iconamoon:arrow-down-2-light"
                className=" h-4 w-4 text-red-500"
              />
            ) : (
              <Icon
                icon="iconamoon:arrow-up-2-light"
                className=" h-4 w-4 text-red-500"
              />
            )}
          </span>
        )}
      </div>
      {li && li.children && li.children.length && displayChildren[li.label] ? (
        <NaviUl ul={li.children} />
      ) : null}
    </li>
  );
}

function NaviUl({ ul = [] }) {
  return (
    <ul className=" list-none mt-0 mb-0">
      {ul && ul.length && ul.map((li, index) => <NaviLi key={index} li={li} />)}
    </ul>
  );
}

function NaviNested({ menus = [] }) {
  return (
    <div className="">
      <NaviUl ul={menus} />
    </div>
  );
}

export default NaviNested;
