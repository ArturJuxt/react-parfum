import React, { useState } from "react";
import "./Menu.scss";

const arr = [
  "Каталог парфюмерии",
  "Для мужчин",
  "Для женщин",
  "Косметика",
  "Макияж",
  "Бренды",
  "Акции",
  "О магазине",
];

function Menu() {
  const [activeItem, setActiveItem] = useState(0);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="menu_list">
      <ul>
        {arr.map((item, index) => (
          <li
            onClick={() => onSelectItem(index)}
            className={activeItem === index ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
