import React from "react";
import classNames from "../styles/styles";
import Button from "./Button";

const Intro = ({ setAppState }) => {
  return (
    <div className="slideUp2">
      <div className={classNames.container}>
        <div
          style={{ position: "relative" }}
          className={classNames.container_fill_center}
        >
          <div
            style={{ position: "absolute", top: "10%" }}
            className={classNames.container_fit_column_center}
          >
            <p className="text-center text-[1.1rem] montserratDark w-[80%] text-white mb-[15%]">
              Go on a journey and meet your four pals at the end! These pals are
              similar to you based on
            </p>
            <img className="mb-[2rem]" src="/intro.png" alt="Intro image" />
            <p className="text-center text-[1.1rem] montserratDark w-[80%] text-white mb-[15%]">
              are you ready? lets go!
            </p>
            <div className="slideUp3">
              <Button
                buttonText={"start"}
                purpose={setAppState}
                to={"questions"}
                type={"start"}
                textColor={""}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
