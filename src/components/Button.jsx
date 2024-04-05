import React, { useState } from "react";
import classNames from "../styles/styles";

const Button = ({ buttonText, purpose, to, type }) => {
  const [textState, setTextState] = useState(type);
  return (
    <div onClick={() => purpose(to)} className={classNames.button}>
      <p className={textState === "start" ? "text-[1rem]" : "text-[0.8rem]"}>
        {buttonText}
      </p>
    </div>
  );
};

export default Button;
