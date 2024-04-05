import React, { useState, useEffect } from "react";
import classNames from "./styles/styles";
import TitlePage from "./components/TitlePage";
import Quiz from "./components/Quiz";
import Results from "./components/Results";

function App() {
  const [appState, setAppState] = useState("title");
  // const [scrollState, setScrollState] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      document.body.style.overflowY =
        appState === "title" ? "hidden" : "scroll";
    };

    handleScroll(); // Set initial scroll behavior based on the initial app state

    // Add event listener to handle scrolling behavior
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [appState]);

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
