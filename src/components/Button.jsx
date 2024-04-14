import React, { useState } from "react";
import classNames from "../styles/styles";

const Button = ({ buttonText, purpose, to, type, textColor }) => {
  const titleText = "mulish text-[1rem] text-[#8886D9]";
  const whiteText = "mulish text-white text-[0.8rem]";

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
        break;
      case "results":
        btnStyle = classNames.button_results;
        break;
      default:
        break;
    }
    return btnStyle;
  }

  return (
    <div onClick={() => purpose(to)} className={renderClass(type)}>
      {type === "results" ? (
        <p
          style={{ color: `${textColor}` }}
          className={`mulishBold text-[0.8rem]`}
        >
          {buttonText}
        </p>
      ) : (
        <p className={type === "start" ? titleText : whiteText}>{buttonText}</p>
      )}
    </div>
  );
};

export default Button;
