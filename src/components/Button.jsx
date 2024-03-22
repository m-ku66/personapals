import React from "react";
import classNames from "../styles/styles";

const Button = ({ buttonText, purpose, to }) => {
  return (
    <div onClick={() => purpose(to)} className={classNames.button}>
      <p className="text-[1rem]">{buttonText}</p>
    </div>
  );
};

export default Button;
