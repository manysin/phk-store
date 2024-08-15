"use client";

import { Dropdown } from "flowbite-react";
import { IoMdArrowDropdown } from "react-icons/io";

export function CategoryList() {
  return (
    <Dropdown
      label=""
      dismissOnClick={false}
      renderTrigger={() => (
        <span className="font-semibold flex items-center gap-2">
          Categories <IoMdArrowDropdown className="mt-1.5" />
        </span>
      )}
    >
      <Dropdown.Item>Shoes</Dropdown.Item>
      <Dropdown.Item>Cloth</Dropdown.Item>
      <Dropdown.Item>Watch</Dropdown.Item>
      <Dropdown.Item>Phone</Dropdown.Item>
      <Dropdown.Item>Computer</Dropdown.Item>
      <Dropdown.Item>Book</Dropdown.Item>
      <Dropdown.Item>Baby</Dropdown.Item>
    </Dropdown>
  );
}
