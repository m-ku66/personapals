import classNames from "../styles/styles";

import React from "react";
import Button from "./Button";

const TitlePage = ({ setAppState }) => {
  return (
    <div className="slideUp2">
      <div className={classNames.container}>
        <div
          style={{ position: "relative" }}
          className={classNames.container_fill_center}
        >
          <div
            style={{ position: "absolute", top: "15%" }}
            className={classNames.container_fit_column_center}
          >
            <img className="mb-[2rem]" src="/title.gif" alt="Persona Pals!" />
            <div className="slideUp3">
              <Button
                buttonText={"start"}
                purpose={setAppState}
                to={"intro"}
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

export default TitlePage;
