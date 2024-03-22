import React, { useState } from "react";
import classNames from "./styles/styles";
import TitlePage from "./components/TitlePage";
import Quiz from "./components/Quiz";
import Results from "./components/Results";

function App() {
  const [appState, setAppState] = useState("title");

  function renderAppContent(state) {
    let renderedContent;
    switch (state) {
      case "title":
        renderedContent = <TitlePage setAppState={setAppState} />;
        break;
      case "questions":
        renderedContent = <Quiz setAppState={setAppState} />;
        break;
      case "results":
        renderedContent = <Results setAppState={setAppState} />;
        break;
    }
    return renderedContent;
  }

  return (
    <>
      <div className="sm:block md:hidden">{renderAppContent(appState)}</div>
      <div className="sm:hidden md:block">
        <div className={classNames.container}>
          <div className={classNames.container_fill_column_full_center}>
            <p>This quiz is made for mobile devices only :/</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
