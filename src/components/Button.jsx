import React, { useState } from "react";
import classNames from "../styles/styles";

const Button = ({ buttonText, purpose, to, type }) => {
  const titleText = "mulish text-[1rem] text-[#8886D9]";
  const whiteText = "mulish text-white text-[0.8rem]";

  /**
   * Idea to change button state.
   * 
   * pass a useState to the button's type paramater and the
   * setState function of it to the button's purpose parameter
   */

  function renderClass(btnType) {
    let btnStyle;

    switch (btnType) {
      case "start":
        btnStyle = classNames.button;
        break;
      case "base":
        btnStyle = classNames.button_light;
        break;
      case "focus":
        btnStyle = classNames.button_focus;
    }
    return btnStyle;
  }

  return (
    <div onClick={() => purpose(to)} className={renderClass(type)}>
      <p className={type === "start" ? titleText : whiteText}>{buttonText}</p>
    </div>
  );
};

export default Button;
