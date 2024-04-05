import React, { useState, useEffect } from "react";
import classNames from "./styles/styles";
import TitlePage from "./components/TitlePage";
import Quiz from "./components/Quiz";
import Results from "./components/Results";

function App() {
  const [appState, setAppState] = useState("title");
  const [scrollState, setScrollState] = useState(null);
  let page;

  useEffect(() => {
    page = document.getElementsByTagName("body");
    page[0].style.overflowY = scrollState ? "scroll" : "hidden";
  }, []);

  function renderAppContent(state) {
    let renderedContent;
    switch (state) {
      case "title":
        setScrollState(false);
        renderedContent = <TitlePage setAppState={setAppState} />;
        break;
      case "questions":
        setScrollState(true);
        renderedContent = <Quiz setAppState={setAppState} />;
        break;
      case "results":
        setScrollState(true);
        renderedContent = <Results setAppState={setAppState} />;
        break;
    }
    return renderedContent;
  }

  return (
    <>
      <div className={classNames.mobile_display}>
        {renderAppContent(appState)}
      </div>
      <div className={classNames.desktop_display}>
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
