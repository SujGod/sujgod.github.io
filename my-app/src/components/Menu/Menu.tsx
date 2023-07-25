import React, { useState, useEffect } from "react";
import { MenuProps } from "./Menu.props";
import "./Menu.css";

export const Menu: React.FC<MenuProps> = ({}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const menu = document.getElementById("menu") as HTMLElement;
    const elements = document.getElementsByClassName("item");

    const handleMouseOver = (index: number) => {
      menu.dataset.activeIndex = index.toString();
      console.log(menu.dataset.activeIndex);
    };

    Array.from(elements).forEach((item, index) => {
      const menuItem = item as HTMLElement;
      menuItem.addEventListener("mouseover", () => {
        handleMouseOver(index);
      });
    });

    return () => {
      Array.from(elements).forEach((item, index) => {
        const menuItem = item as HTMLElement;
        menuItem.removeEventListener("mouseover", () => {
          handleMouseOver(index);
        });
      });
    };
  }, []);

  return (
    <div id="menu" className="flex w-1/2 mr-20 mt-40 ml-40 h-full">
      <div id="items" className="z-10">
        <a href="/about" className="item block text-5xl mt-10 mb-10">
          About
        </a>
        <a href="/education" className="item block text-5xl mb-10">
          Education
        </a>
        <a href="/experience" className="item block text-5xl mb-10">
          Experience
        </a>
        <a href="/projects" className="item block text-5xl mb-10">
          Projects
        </a>
      </div>
      <div id="back-pattern"></div>
      <div id="back-image"></div>
    </div>
  );
};
