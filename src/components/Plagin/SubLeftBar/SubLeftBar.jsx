/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "./SubLeftBar.scss";
import nina from "../../../img/nina.jpg";
import chek from "../../../img/chek.png";

function SubLeftBar() {
  return (
    <div className="sub_left_bar">
      <div>
        <img src={nina} alt="img" />
      </div>
      <div className="list">
        <ul>
          <li>⚜️ Parfume Gallery ⚜️</li>
          <li><img src={chek} alt="img" />Բարձր որակ</li>
          <li><img src={chek} alt="img" />Մատչելի գներ</li>
          <li><img src={chek} alt="img" />300+ Տեսականի</li>
          <li><img src={chek} alt="img" />Անհատական մոտեցում</li>
          <li ><img src={chek} alt="img" />Անվճար առաքում</li>
          <li><img src={chek} alt="img" />Որակները երաշխավորված</li>
        </ul>
      </div>
    </div>
  );
}

export default SubLeftBar;
