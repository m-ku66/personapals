import React, { useState, useEffect } from "react";
import classNames from "./styles/styles";
import TitlePage from "./components/TitlePage";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import AOS from "aos";
import "aos/dist/aos.css";
import Intro from "./components/Intro";

function App() {
  AOS.init();
  const [appState, setAppState] = useState("title");
  // const [scrollState, setScrollState] = useState(null);
  const [personalityType, setPersonalityType] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      // document.body.style.overflowY =
      //   appState === "title" ? "hidden" : "scroll";
      document.body.style.overflowY = appState ? "hidden" : "scroll";
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
      case "intro":
        renderedContent = <Intro setAppState={setAppState} />;
        break;
      case "questions":
        renderedContent = (
          <Quiz
            personalityType={personalityType}
            setPersonalityType={setPersonalityType}
            setAppState={setAppState}
          />
        );
        break;
      case "results":
        renderedContent = (
          <Results
            setAppState={setAppState}
            personalityType={personalityType}
            setPersonalityType={setPersonalityType}
          />
        );
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
