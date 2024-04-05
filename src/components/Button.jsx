import React, { useState } from "react";
import classNames from "../styles/styles";

const Button = ({ buttonText, purpose, to, type }) => {
  const titleText = "mulish text-[1rem] text-[#8886D9]";
  const whiteText = "mulish text-white text-[0.8rem]";
  return (
    <div
      onClick={() => purpose(to)}
      className={type === "start" ? classNames.button : classNames.button_light}
    >
      <p className={type === "start" ? titleText : whiteText}>{buttonText}</p>
    </div>
  );
};

export default Button;
