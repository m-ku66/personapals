import React, { useState, useEffect } from "react";
import classNames from "../styles/styles";
import Button from "./Button";

const Results = ({ setAppState, personalityType, setPersonalityType }) => {
  const [persona1, setPersona1] = useState("");
  const [persona2, setPersona2] = useState("");
  const [persona3, setPersona3] = useState("");
  const [persona4, setPersona4] = useState("");

  const [resultsState, setResultsState] = useState("individual");
  const [personaNav, setPersonaNav] = useState(1);

  useEffect(() => {
    // Check personalityType and update personas accordingly
    if (personalityType[0] >= 0) {
      setPersona1("introvert");
    } else {
      setPersona1("extrovert");
    }

    if (personalityType[1] >= 0) {
      setPersona2("observant");
    } else {
      setPersona2("intuitive");
    }

    if (personalityType[2] >= 0) {
      setPersona3("feeler");
    } else {
      setPersona3("thinker");
    }

    if (personalityType[3] >= 0) {
      setPersona4("judger");
    } else {
      setPersona4("perceiver");
    }
  }, [personalityType]); // Run this effect when personalityType changes

  function viewPersonas(navNum) {
    let displayedPal;
    switch (navNum) {
      case 1:
        displayedPal = persona1;
        break;
      case 2:
        displayedPal = persona2;
        break;
      case 3:
        displayedPal = persona3;
        break;
      case 4:
        displayedPal = persona4;
        break;
      default:
        break;
    }
    return displayedPal;
  }

  function renderResults(state) {
    let results;

    switch (state) {
      case "individual":
        results = (
          <div className="relative w-full h-full flex justify-center items-center">
            {viewPersonas(personaNav)}
            <div className="absolute bottom-[10%] flex">
              <Button
                buttonText={"Back"}
                purpose={() =>
                  setPersonaNav((prev) =>
                    prev === 1 ? setAppState("questions") : prev - 1
                  )
                }
                to={""}
                type={"base"}
              />
              <Button
                buttonText={"Next"}
                purpose={() =>
                  setPersonaNav((prev) =>
                    prev === 4 ? setResultsState("final") : prev + 1
                  )
                }
                to={""}
                type={"base"}
              />
            </div>
          </div>
        );
        break;
      case "final":
        results = (
          <div className="w-full h-full flex flex-col">
            <div className="w-full h-[20vh] bg-stone-500"></div>
            <div className="w-full h-full grid grid-rows-2 grid-flow-col">
              <div className="bg-red-500 w-[100%] h-[100%] flex justify-center items-center">
                {persona1 === "introvert" ? (
                  <div className="bg-stone-400 flex justify-center items-center w-[80%] h-[80%]">
                    <img
                      className="w-full h-full"
                      src="/characters/milo.png"
                    ></img>
                  </div>
                ) : (
                  <div className="bg-stone-400 flex justify-center items-center w-[80%] h-[80%]">
                    <img
                      className="w-full h-full"
                      src="/characters/duckie.png"
                    ></img>
                  </div>
                )}
              </div>
              <div className="bg-blue-500 w-[100%] h-[100%] flex justify-center items-center">
                {persona2 === "observant" ? (
                  <div className="bg-stone-400 flex justify-center items-center w-[80%] h-[80%]">
                    <img
                      className="w-full h-full"
                      src="/characters/bari.png"
                    ></img>
                  </div>
                ) : (
                  <div className="bg-stone-400 flex justify-center items-center w-[80%] h-[80%]">
                    <img
                      className="w-full h-full"
                      src="/characters/lu.png"
                    ></img>
                  </div>
                )}
              </div>
              <div className="bg-yellow-500 w-[100%] h-[100%] flex justify-center items-center">
                {persona3 === "feeler" ? (
                  <div className="bg-stone-400 flex justify-center items-center w-[80%] h-[80%]">
                    <img
                      className="w-full h-full"
                      src="/characters/spook.png"
                    ></img>
                  </div>
                ) : (
                  <div className="bg-stone-400 flex justify-center items-center w-[80%] h-[80%]">
                    <img
                      className="w-full h-full"
                      src="/characters/nom.png"
                    ></img>
                  </div>
                )}{" "}
              </div>
              <div className="bg-green-500 w-[100%] h-[100%] flex justify-center items-center">
                {persona4 === "judger" ? (
                  <div className="bg-stone-400 flex justify-center items-center w-[80%] h-[80%]">
                    <img
                      className="w-full h-full"
                      src="/characters/blinky.png"
                    ></img>
                  </div>
                ) : (
                  <div className="bg-stone-400 flex justify-center items-center w-[80%] h-[80%]">
                    <img
                      className="w-full h-full"
                      src="/characters/misty.png"
                    ></img>
                  </div>
                )}{" "}
              </div>
            </div>
          </div>
        );
    }

    return results;
  }

  return (
    <>
      <div className={classNames.container}>{renderResults(resultsState)}</div>
    </>
  );
};

export default Results;
