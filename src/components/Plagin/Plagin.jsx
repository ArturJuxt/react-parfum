import React from "react";
import "./Plagin.scss";
import SubRightBar from "./SubRightBar/SubRightBar";
import SubLeftBar from "./SubLeftBar/SubLeftBar";
import Content from "./Content/Content";

function Plagin() {
  return (
    <div className="plagin">
      <SubLeftBar />
      <Content />
      <SubRightBar />
    </div>
  );
}

export default Plagin;
