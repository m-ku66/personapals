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

  function whichPalAreYou(personaType) {
    let pal;
    switch (personaType) {
      case "introvert":
        pal = <img src="/characters/milo.png"></img>;
        break;
      case "extrovert":
        pal = <img src="/characters/duckie.png"></img>;
        break;
      case "observant":
        pal = <img src="/characters/bari.png"></img>;
        break;
      case "intuitive":
        pal = <img src="/characters/lu.png"></img>;
        break;
      case "feeler":
        pal = <img src="/characters/spook.png"></img>;
        break;
      case "thinker":
        pal = <img src="/characters/nom.png"></img>;
        break;
      case "judger":
        pal = <img src="/characters/blinky.png"></img>;
        break;
      case "perceiver":
        pal = <img src="/characters/misty.png"></img>;
        break;
    }
    return pal;
  }

  function viewPersonas(navNum) {
    let displayedPal;
    switch (navNum) {
      case 1:
        displayedPal = whichPalAreYou(persona1);
        break;
      case 2:
        displayedPal = whichPalAreYou(persona2);
        break;
      case 3:
        displayedPal = whichPalAreYou(persona3);
        break;
      case 4:
        displayedPal = whichPalAreYou(persona4);
        break;
      default:
        break;
    }
    return displayedPal;
  }

  function renderText(navNum) {
    let resultsText;
    switch (navNum) {
      case 1:
        resultsText = [
          `Your energy comes from`,
          `${persona1 === "introvert" ? "millo" : "Duckie"}`,
          `${
            persona1 === "introvert"
              ? "Well-suited to Many Situations"
              : "Power of engagement"
          }`,
          `${
            persona1 === "introvert"
              ? "You prefer listening carefully to others, seeking deeper connections and have meaningful conversations. You value quality over quantity in your social interactions."
              : "You love engaging with your surroundings, seeking insights from the people and events around you. The world is not stopping you from pushing your boundaries and set limits."
          }`,
        ];
        break;
      case 2:
        resultsText = [
          `Your reaction comes from`,
          `${persona2 === "observant" ? "BARI" : "LU"}`,
          `${
            persona2 === "observant"
              ? "Do what works"
              : "Focuses on the bigger picture"
          }`,
          `${
            persona2 === "observant"
              ? "You tend to focus on facts and consider how they impact your present actions. A goddess at paying attention to details."
              : "You are curious and open-minded, using your imagination to seek new ideas. The word 'never giving up' is in your name, remaining determined in the face of obstacles."
          }`,
        ];
        break;
      case 3:
        resultsText = [
          `You make decisions like`,
          `${persona3 === "feeler" ? "SPOOK" : "nom"}`,
          `${
            persona3 === "feeler"
              ? "Who does this help?"
              : "How does this help?"
          }`,
          `${
            persona3 === "feeler"
              ? "You have a strong sense of empathy and emotional awareness, often prioritizing the feelings and well-being of others."
              : "You tend to make decisions based on logical analysis, focusing on the objective and value honesty."
          }`,
        ];
        break;
      case 4:
        resultsText = [
          `You are organized like`,
          `${persona4 === "judger" ? "BLINKY" : "misty"}`,
          `${
            persona4 === "judger" ? "Sticks to the plan" : "Go with the flow"
          }`,
          `${
            persona4 === "judger"
              ? "You feel most comfortable when you have a clear path ahead of you. It's better to have multiple backup options rather than dealing with unexpected events."
              : "You prefer to have flexibility by keeping your options open, adapting readily to unexpected challenges as they arise."
          }`,
        ];
        break;
      default:
        break;
    }
    return resultsText;
  }

  function renderBG(navNum) {
    let bg;
    switch (navNum) {
      case 1:
        persona1 === "introvert"
          ? (bg = classNames.container_millo)
          : (bg = classNames.container_duckie);
        break;
      case 2:
        persona2 === "observant"
          ? (bg = classNames.container_bari)
          : (bg = classNames.container_lu);
        break;
      case 3:
        persona3 === "feeler"
          ? (bg = classNames.container_spook)
          : (bg = classNames.container_nom);
        break;
      case 4:
        persona4 === "judger"
          ? (bg = classNames.container_blinky)
          : (bg = classNames.container_misty);
        break;
      default:
        bg = classNames.container;
    }
    return bg;
  }

  function renderResults(state) {
    let results;

    switch (state) {
      case "individual":
        results = (
          <div className="relative w-full h-full flex  flex-col justify-center items-center">
            <div className="absolute top-[5%]">
              <div className="flex flex-col items-center">
                <p className="mulishBold text-[1rem] mb-[6%]">
                  {" "}
                  {personaNav <= 4 && renderText(personaNav)[0]}
                </p>
                <p className="montserratBold text-[3rem]">
                  {" "}
                  {personaNav <= 4 && renderText(personaNav)[1]}
                </p>
              </div>
            </div>
            <div className="mb-[1%]">{viewPersonas(personaNav)}</div>
            <p className="mulishBold text-center mb-[3%]">
              {personaNav <= 4 && renderText(personaNav)[2]}
            </p>
            <p className="mulish text-center text-[0.85rem] w-[90%]">
              {personaNav <= 4 && renderText(personaNav)[3]}
            </p>
            <div className="absolute bottom-[10%] flex justify-center items-center">
              <Button
                buttonText={"Back"}
                purpose={() =>
                  setPersonaNav((prev) =>
                    prev === 1 ? setAppState("questions") : prev - 1
                  )
                }
                to={""}
                type={"results"}
              />
              <Button
                buttonText={"Next"}
                purpose={() =>
                  setPersonaNav((prev) =>
                    prev === 4 ? setResultsState("final") : prev + 1
                  )
                }
                to={""}
                type={"results"}
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
                  <div className="bg-transparent flex justify-center items-center w-[100%] h-[80%]">
                    <img
                      className="w-full h-full"
                      src="/characters/milo.png"
                    ></img>
                  </div>
                ) : (
                  <div className="bg-transparent flex justify-center items-center w-[100%] h-[80%]">
                    <img
                      className="w-full h-full"
                      src="/characters/duckie.png"
                    ></img>
                  </div>
                )}
              </div>
              <div className="bg-blue-500 w-[100%] h-[100%] flex justify-center items-center">
                {persona2 === "observant" ? (
                  <div className="bg-transparent flex justify-center items-center w-[100%] h-[80%]">
                    <img
                      className="w-full h-full"
                      src="/characters/bari.png"
                    ></img>
                  </div>
                ) : (
                  <div className="bg-transparent flex justify-center items-center w-[100%] h-[80%]">
                    <img
                      className="w-full h-full"
                      src="/characters/lu.png"
                    ></img>
                  </div>
                )}
              </div>
              <div className="bg-yellow-500 w-[100%] h-[100%] flex justify-center items-center">
                {persona3 === "feeler" ? (
                  <div className="bg-transparent flex justify-center items-center w-[100%] h-[80%]">
                    <img
                      className="w-full h-full"
                      src="/characters/spook.png"
                    ></img>
                  </div>
                ) : (
                  <div className="bg-transparent flex justify-center items-center w-[100%] h-[80%]">
                    <img
                      className="w-full h-full"
                      src="/characters/nom.png"
                    ></img>
                  </div>
                )}{" "}
              </div>
              <div className="bg-green-500 w-[100%] h-[100%] flex justify-center items-center">
                {persona4 === "judger" ? (
                  <div className="bg-transparent flex justify-center items-center w-[100%] h-[80%]">
                    <img
                      className="w-full h-full"
                      src="/characters/blinky.png"
                    ></img>
                  </div>
                ) : (
                  <div className="bg-transparent flex justify-center items-center w-[100%] h-[80%]">
                    <img
                      className="w-full h-full"
                      src="/characters/misty.png"
                    ></img>
                  </div>
                )}{" "}
              </div>
            </div>
            <div className="w-full h-[10vh] bg-stone-500"></div>
          </div>
        );
    }

    return results;
  }

  return (
    <>
      <div className={renderBG(personaNav)}>{renderResults(resultsState)}</div>
    </>
  );
};

export default Results;
