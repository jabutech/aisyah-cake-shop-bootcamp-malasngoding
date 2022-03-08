import React from "react";

export default function MenuList(props) {
  const { link, menuName } = props;
  return (
    <>
      <li className="px-4">
        <a href={link} className="flex">
          {menuName}
          <img
            src="/images/chevron.png"
            alt="chevron"
            className="ml-1 object-contain"
          />
        </a>
      </li>
    </>
  );
}
