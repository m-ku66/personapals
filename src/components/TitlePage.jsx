import classNames from "../styles/styles";

import React from "react";
import Button from "./Button";

const TitlePage = ({ setAppState }) => {
  return (
    <div className={classNames.container}>
      <div className={classNames.container_fill_center}>
        <div className={classNames.container_fit_column_center}>
          <img className="mb-[2rem]" src="/title.svg" alt="Persona Pals!" />
          <Button buttonText={"start"} purpose={setAppState} to={'questions'} />
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
