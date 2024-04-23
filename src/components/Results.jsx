import React, { useState, useEffect } from "react";
import classNames from "../styles/styles";
import Button from "./Button";

const Results = ({ setAppState, personalityType, setPersonalityType }) => {
  const [persona1, setPersona1] = useState("");
  const [persona2, setPersona2] = useState("");
  const [persona3, setPersona3] = useState("");
  const [persona4, setPersona4] = useState("");
  const [overlayState, setOverlayState] = useState("hidden");

  const [bubbleFade, setBubbleFade] = useState("fadeIn1");

  const [resultsState, setResultsState] = useState("name");
  const [personaNav, setPersonaNav] = useState(1);
  const [name, setName] = useState("name");

  // Add state to keep track of the current bubble index
  const [currentBubbleIndex, setCurrentBubbleIndex] = useState(0);

  // Function to handle bubble click and randomly switch bubble image
  const handleBubbleClick = () => {
    // Generate a random index within the range of the bubbles array length
    const randomIndex = Math.floor(Math.random() * (3 - 0) - 0);
    // Update the currentBubbleIndex state with the random index
    setCurrentBubbleIndex(randomIndex);
    setBubbleFade("");
    setTimeout(() => {
      setBubbleFade("fadeIn1");
    }, 10);
  };

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

  // Array to hold all image URLs
  const imageUrls = [
    "/characters/milo.png",
    "/characters/duckie.png",
    "/characters/bari.png",
    "/characters/lu.png",
    "/characters/spook.png",
    "/characters/nom.png",
    "/characters/blinky.png",
    "/characters/misty.png",
  ];

  // useEffect to preload images
  useEffect(() => {
    const preloadedImages = [];
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      preloadedImages.push(img);
    });
  }, []); // Empty dependency array to run once when the component mounts

  function whichPalAreYou(personaType) {
    let pal;
    switch (personaType) {
      case "introvert":
        pal = <img src="/characters/milo.png" alt="Milo"></img>;
        break;
      case "extrovert":
        pal = <img src="/characters/duckie.png" alt="Duckie"></img>;
        break;
      case "observant":
        pal = <img src="/characters/bari.png" alt="Bari"></img>;
        break;
      case "intuitive":
        pal = <img src="/characters/lu.png" alt="Lu"></img>;
        break;
      case "feeler":
        pal = <img src="/characters/spook.png" alt="Spook"></img>;
        break;
      case "thinker":
        pal = <img src="/characters/nom.png" alt="Nom"></img>;
        break;
      case "judger":
        pal = <img src="/characters/blinky.png" alt="Blinky"></img>;
        break;
      case "perceiver":
        pal = <img src="/characters/misty.png" alt="Misty"></img>;
        break;
      default:
        pal = null;
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
        displayedPal = null;
    }
    return displayedPal;
  }

  function renderText(navNum) {
    let resultsText;
    switch (navNum) {
      case 1:
        resultsText = [
          `Your energy comes from`,
          `${persona1 === "introvert" ? "Millo" : "Duckie"}`,
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
          `${persona2 === "observant" ? "Bari" : "Lu"}`,
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
          `${persona3 === "feeler" ? "Spook" : "Nom"}`,
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
          `${persona4 === "judger" ? "Blinky" : "Misty"}`,
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
    let bgColor;
    let resultsPageBG;

    switch (navNum) {
      case 1:
        bg =
          persona1 === "introvert"
            ? classNames.container_millo
            : classNames.container_duckie;
        bgColor = persona1 === "introvert" ? "#FF7C87" : "#81B0FF";
        resultsPageBG = persona1 === "introvert" ? "#FFD0B9" : "#BBEEFF";
        break;
      case 2:
        bg =
          persona2 === "observant"
            ? classNames.container_bari
            : classNames.container_lu;
        bgColor = persona2 === "observant" ? "#57C395" : "#FC8F68";
        resultsPageBG = persona2 === "observant" ? "#B4FFC7" : "#FFE98B";
        break;
      case 3:
        bg =
          persona3 === "feeler"
            ? classNames.container_spook
            : classNames.container_nom;
        bgColor = persona3 === "feeler" ? "#8886D9" : "#FF7885";
        resultsPageBG = persona3 === "feeler" ? "#C5C6FF" : "#FFD1EB";
        break;
      case 4:
        bg =
          persona4 === "judger"
            ? classNames.container_blinky
            : classNames.container_misty;
        bgColor = persona4 === "judger" ? "#8886D9" : "#FC8F68";
        resultsPageBG = persona4 === "judger" ? "#EAD4FF" : "#FFCD93";
        break;
      default:
        bg = classNames.container;
    }
    return [bg, bgColor, resultsPageBG];
  }

  function renderPersonaType(p1, p2, p3, p4) {
    let introText;
    let displayedPersona;

    switch (true) {
      case p1 === "introvert" &&
        p2 === "intuitive" &&
        p3 === "feeler" &&
        p4 === "judger":
        introText = `${name}, you are an`;
        displayedPersona = "Embracer";
        break;
      case (p1, p2, p3, p4) ===
        ("extrovert", "intuitive", "thinker", "perceiver"):
        introText = `${name}, you are a`;
        displayedPersona = "Player";
        break;
      case (p1, p2, p3, p4) ===
        ("introvert", "intuitive", "thinker", "perceiver"):
        introText = `${name}, you are a`;
        displayedPersona = "Pioneer";
        break;
      case (p1, p2, p3, p4) ===
        ("extrovert", "observant", "feeler", "perceiver"):
        introText = `${name}, you are a`;
        displayedPersona = "Charmer";
        break;
      case (p1, p2, p3, p4) === ("introvert", "intuitve", "feeler", "judger"):
        introText = `${name}, you are a`;
        displayedPersona = "Creator";
        break;
      case (p1, p2, p3, p4) ===
        ("introvert", "observant", "thinker", "perceiver"):
        introText = `${name}, you are an`;
        displayedPersona = "Inventor";
        break;
      case (p1, p2, p3, p4) ===
        ("extrovert", "observant", "thinker", "perceiver"):
        introText = `${name}, you are an`;
        displayedPersona = "Adventurer";
        break;
      case (p1, p2, p3, p4) === ("introvert", "observant", "thinker", "judger"):
        introText = `${name}, you are a`;
        displayedPersona = "Reader";
        break;
      case (p1, p2, p3, p4) === ("introvert", "observant", "feeler", "judger"):
        introText = `${name}, you are a`;
        displayedPersona = "Protector";
        break;
      case (p1, p2, p3, p4) ===
        ("introvert", "intuitive", "feeler", "perceiver"):
        introText = `${name}, you are a`;
        displayedPersona = "Daydreamer";
        break;
      case (p1, p2, p3, p4) === ("introvert", "intuitive", "thinker", "judger"):
        introText = `${name}, you are a`;
        displayedPersona = "Gambler";
        break;
      case (p1, p2, p3, p4) ===
        ("introvert", "observant", "feeler", "perceiver"):
        introText = `${name}, you are a`;
        displayedPersona = "Painter";
        break;
      case (p1, p2, p3, p4) === ("extrovert", "intuitive", "thinker", "judger"):
        introText = `${name}, you are a`;
        displayedPersona = "Collaborator";
        break;
      case (p1, p2, p3, p4) === ("extrovert", "observant", "feeler", "judger"):
        introText = `${name}, you are a`;
        displayedPersona = "Caregiver";
        break;
      case (p1, p2, p3, p4) ===
        ("extrovert", "intuitive", "feeler", "perceiver"):
        introText = `${name}, you are a`;
        displayedPersona = "Entertainer";
        break;
      case (p1, p2, p3, p4) === ("extrovert", "observant", "thinker", "judger"):
        introText = `${name}, you are a`;
        displayedPersona = "Judger";
        break;
      default:
        introText = `${name}, you are a`;
        displayedPersona = "Unique Personality!";
        break;
    }
    // console.log(persona);
    return [introText, displayedPersona];
  }

  function compatibility(persona) {
    let mostCompatible;
    let leastCompatible;

    switch (persona[1]) {
      case "Embracer":
        mostCompatible = "Charmer & Player";
        leastCompatible = "Collaborator & Judger";
        break;
      case "Player":
        mostCompatible = "Charmer & Embracer";
        leastCompatible = "Protector & Judger";
        break;
      case "Pioneer":
        mostCompatible = "Gambler & Inventor";
        leastCompatible = "Protector & Caregiver";
        break;
      case "Charmer":
        mostCompatible = "Player & Embracer";
        leastCompatible = "Judge & Creator";
        break;
      case "Creator":
        mostCompatible = "Judge & Gambler";
        leastCompatible = "Charmer & Daydreamer";
        break;
      case "Inventor":
        mostCompatible = "Judge & Gambler";
        leastCompatible = "Entertainer & Caregiver";
        break;
      case "Adventurer":
        mostCompatible = "Embracer & Pioneer";
        leastCompatible = "Creator & Judger";
        break;
      case "Reader":
        mostCompatible = "Entertainer & Collaborator";
        leastCompatible = "Pioneer & Player";
        break;
      case "Protector":
        mostCompatible = "Entertainer & Reader";
        leastCompatible = "Daydreamer & Charmer";
        break;
      case "Daydreamer":
        mostCompatible = "Caregiver & Embracer";
        leastCompatible = "Reader & Player";
        break;
      case "Gambler":
        mostCompatible = "Inventor & Player";
        leastCompatible = "Caregiver & Painter";
        break;
      case "Painter":
        mostCompatible = "Charmer & Caregiver";
        leastCompatible = "Gambler & Inventor";
        break;
      case "Collaborator":
        mostCompatible = "Protector & Creator";
        leastCompatible = "Pioneer & Adventurer";
        break;
      case "Caregiver":
        mostCompatible = "Painter & Creator";
        leastCompatible = "Pioneer & Player";
        break;
      case "Entertainer":
        mostCompatible = "Reader & Protector";
        leastCompatible = "Inventor & Embracer";
        break;
      case "Judger":
        mostCompatible = "Gambler & Painter";
        leastCompatible = "Charmer & Player";
        break;
      case "Unique Personality!":
        mostCompatible = "Anybody!";
        leastCompatible = "Nobody!";
        break;
    }
    return [mostCompatible, leastCompatible];
  }

  function renderScreen(screenType) {
    switch (screenType) {
      case 1:
        setOverlayState(
          "z-[500] absolute flex justify-center items-center w-full h-full bg-[#8886D9]"
        );
        break;
    }
  }

  function renderBubbles(character) {
    let bubble;
    switch (character) {
      case "millo":
        bubble = [
          "/bubbles/bubble1.png",
          "/bubbles/bubble2.png",
          "/bubbles/bubble3.png",
          "/bubbles/bubble4.png",
        ];
        break;
      case "duckie":
        bubble = [
          "/bubbles/bubble5.png",
          "/bubbles/bubble6.png",
          "/bubbles/bubble7.png",
          "/bubbles/bubble8.png",
        ];
        break;
      case "bari":
        bubble = [
          "/bubbles/bubble9.png",
          "/bubbles/bubble10.png",
          "/bubbles/bubble11.png",
          "/bubbles/bubble12.png",
        ];
        break;
      case "lu":
        bubble = [
          "/bubbles/bubble13.png",
          "/bubbles/bubble14.png",
          "/bubbles/bubble15.png",
          "/bubbles/bubble16.png",
        ];
        break;
      case "nom":
        bubble = [
          "/bubbles/bubble16-1.png",
          "/bubbles/bubble16-2.png",
          "/bubbles/bubble16-3.png",
          "/bubbles/bubble16-4.png",
        ];
        break;
      case "spook":
        bubble = [
          "/bubbles/bubble16-5.png",
          "/bubbles/bubble16-6.png",
          "/bubbles/bubble16-7.png",
          "/bubbles/bubble16-8.png",
        ];
        break;
      case "blinky":
        bubble = [
          "/bubbles/bubble16-9.png",
          "/bubbles/bubble16-10.png",
          "/bubbles/bubble16-11.png",
          "/bubbles/bubble16-12.png",
        ];
        break;
      case "misty":
        bubble = [
          "/bubbles/bubble16-13.png",
          "/bubbles/bubble16-14.png",
          "/bubbles/bubble16-15.png",
          "/bubbles/bubble16-16.png",
        ];
        break;
      default:
        break;
    }
    return bubble;
  }

  function renderResults(state) {
    let results;

    switch (state) {
      case "individual":
        results = (
          <div className="relative w-full h-full flex  flex-col justify-center items-center">
            <div className="w-[80%] h-[80%] absolute top-[5%]">
              <div className="flex flex-col items-center">
                <p className="mulishBold text-[1rem] mb-[6%]">
                  {" "}
                  {personaNav <= 4 && renderText(personaNav)[0]}
                </p>
                <p
                  style={{ color: `${renderBG(personaNav)[1]}` }}
                  className="montserratBold text-[3rem]"
                >
                  {" "}
                  {personaNav <= 4 && renderText(personaNav)[1]}
                </p>
              </div>
            </div>
            <div className="mb-[1%]">{viewPersonas(personaNav)}</div>
            <p className="mulishBold text-center mb-[3%]">
              {personaNav <= 4 && renderText(personaNav)[2]}
            </p>
            <p className="mulish text-center text-black/[0.7] text-[0.85rem] w-[80%]">
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
                textColor={renderBG(personaNav)[1]}
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
                textColor={renderBG(personaNav)[1]}
              />
            </div>
          </div>
        );
        break;
      case "final":
        results = (
          <>
            <div className={overlayState}>
              <p className="absolute top-[20%] text-[#FFFFFF] montserratDark text-[2rem] text-center w-[80%]">
                Are you sure you want to restart the quiz?
              </p>
              <div className="flex justify-center">
                <Button
                  buttonText={"yes"}
                  purpose={setAppState}
                  to={"title"}
                  type={"start"}
                  textColor={""}
                />
                <div className="mx-[10%]"></div>
                <Button
                  buttonText={"no"}
                  purpose={setOverlayState}
                  to={"hidden"}
                  type={"start"}
                  textColor={""}
                />
              </div>
            </div>
            <div className="flex justify-center items-center w-full h-full p-[1%]">
              <div className="w-[99%] h-[99%] flex flex-col outline outline-[1px] outline-white/[0.2]">
                <div className="flex w-full h-[15vh] bg-[#8886D90]">
                  <div className="flex flex-col w-[40%] h-full bg-transparent py-[3%]">
                    <div className="flex items-center justify-center">
                      <div
                        onClick={() => {
                          renderScreen(1);
                        }}
                        className="bg-[#D8D7FF] select-none cursor-pointer flex justify-center items-center rounded-[500px] w-[15px] h-[15px] mr-[5%]"
                      >
                        <p className="text-[0.8rem] montserratDark">{"<"}</p>
                      </div>
                      <p className="text-[#D8D7FF] montserratDark text-[0.8rem] text-center">
                        Go back
                      </p>
                    </div>
                    <p className="text-white montserratDark text-[1rem] text-center">
                      Personality Test Result:
                    </p>
                  </div>
                  <div className="py-[2%] flex items-center flex-col w-[60%] h-full bg-[#D8D7FF]">
                    <p className="text-center text-[1rem] montserratDark">{`${
                      renderPersonaType(
                        persona1,
                        persona2,
                        persona3,
                        persona4
                      )[0]
                    }`}</p>
                    <p className="text-center text-[#434185] text-[2rem] montserratBold">{`${
                      renderPersonaType(
                        persona1,
                        persona2,
                        persona3,
                        persona4
                      )[1]
                    }`}</p>
                  </div>
                </div>
                <div className="w-full h-full grid grid-rows-2 grid-flow-col">
                  <div
                    style={{ backgroundColor: `${renderBG(1)[2]}` }}
                    className="relative w-[100%] h-[100%] flex justify-center items-center"
                  >
                    {persona1 === "introvert" ? (
                      <div
                        style={{ position: "relative" }}
                        className="bg-transparent flex justify-center items-center w-[100%] h-[70%]"
                      >
                        <div className="w-[80%] h-[80%] absolute top-[-1%]">
                          <img
                            className={bubbleFade}
                            src={renderBubbles("millo")[currentBubbleIndex]}
                            onClick={handleBubbleClick}
                          />
                        </div>
                        <img
                          className="w-full h-full"
                          src="/characters/milo.png"
                          alt="Milo"
                        ></img>
                      </div>
                    ) : (
                      <div
                        style={{ position: "relative" }}
                        className="bg-transparent flex justify-center items-center w-[100%] h-[80%]"
                      >
                        <div className="w-[80%] h-[80%] absolute top-[5%]">
                          <img
                            className={bubbleFade}
                            src={renderBubbles("duckie")[currentBubbleIndex]}
                            onClick={handleBubbleClick}
                          />
                        </div>
                        <img
                          className="w-full h-full"
                          src="/characters/duckie.png"
                          alt="Duckie"
                        ></img>
                      </div>
                    )}
                    <div className="flex justify-center items-center absolute bottom-[0%] w-full h-[8%] bg-[#FFFFFF]/[0.4]">
                      <p className="montserratBold text-[black]/[0.6]">
                        {persona1 === "introvert" ? "millo" : "Duckie"}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ backgroundColor: `${renderBG(2)[2]}` }}
                    className="relative w-[100%] h-[100%] flex justify-center items-center"
                  >
                    {persona2 === "observant" ? (
                      <div
                        style={{ position: "relative" }}
                        className="bg-transparent flex justify-center items-center w-[100%] h-[80%]"
                      >
                        <div className="w-[80%] h-[80%] absolute top-[5%]">
                          <img
                            className={bubbleFade}
                            src={renderBubbles("bari")[currentBubbleIndex]}
                            onClick={handleBubbleClick}
                          />
                        </div>
                        <img
                          className="w-full h-full"
                          src="/characters/bari.png"
                          alt="Bari"
                        ></img>
                      </div>
                    ) : (
                      <div
                        style={{ position: "relative" }}
                        className="bg-transparent flex justify-center items-center w-[100%] h-[80%]"
                      >
                        <div className="w-[80%] h-[80%] absolute top-[20%]">
                          <img
                            className={bubbleFade}
                            src={renderBubbles("lu")[currentBubbleIndex]}
                            onClick={handleBubbleClick}
                          />
                        </div>
                        <img
                          className="w-full h-full"
                          src="/characters/lu.png"
                          alt="Lu"
                        ></img>
                      </div>
                    )}
                    <div className="flex justify-center items-center absolute bottom-[0%] w-full h-[8%] bg-[#FFFFFF]/[0.4]">
                      <p className="montserratBold text-[black]/[0.6]">
                        {persona2 === "observant" ? "BARI" : "LU"}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ backgroundColor: `${renderBG(3)[2]}` }}
                    className="relative w-[100%] h-[100%] flex justify-center items-center"
                  >
                    {persona3 === "feeler" ? (
                      <div
                        style={{ position: "relative" }}
                        className="bg-transparent flex justify-center items-center w-[100%] h-[80%]"
                      >
                        <div className="w-[80%] h-[80%] absolute top-[5%]">
                          <img
                            className={bubbleFade}
                            src={renderBubbles("spook")[currentBubbleIndex]}
                            onClick={handleBubbleClick}
                          />
                        </div>
                        <img
                          className="w-full h-full"
                          src="/characters/spook.png"
                          alt="Spook"
                        ></img>
                      </div>
                    ) : (
                      <div
                        style={{ position: "relative" }}
                        className="bg-transparent flex justify-center items-center w-[100%] h-[70%]"
                      >
                        <div className="w-[80%] h-[80%] absolute top-[5%]">
                          <img
                            className={bubbleFade}
                            src={renderBubbles("nom")[currentBubbleIndex]}
                            onClick={handleBubbleClick}
                          />
                        </div>
                        <img
                          className="w-full h-full"
                          src="/characters/nom.png"
                          alt="Nom"
                        ></img>
                      </div>
                    )}
                    <div className="flex justify-center items-center absolute bottom-[0%] w-full h-[8%] bg-[#FFFFFF]/[0.4]">
                      <p className="montserratBold text-[black]/[0.6]">
                        {persona3 === "feeler" ? "SPOOK" : "nom"}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{ backgroundColor: `${renderBG(4)[2]}` }}
                    className="relative w-[100%] h-[100%] flex justify-center items-center"
                  >
                    {persona4 === "judger" ? (
                      <div
                        style={{ position: "relative" }}
                        className="bg-transparent flex justify-center items-center w-[100%] h-[70%]"
                      >
                        <div className="w-[80%] h-[80%] absolute top-[5%]">
                          <img
                            className={bubbleFade}
                            src={renderBubbles("blinky")[currentBubbleIndex]}
                            onClick={handleBubbleClick}
                          />
                        </div>
                        <img
                          className="w-full h-full"
                          src="/characters/blinky.png"
                          alt="Blinky"
                        ></img>
                      </div>
                    ) : (
                      <div
                        style={{ position: "relative" }}
                        className="bg-transparent flex justify-center items-center w-[100%] h-[80%]"
                      >
                        <div className="w-[80%] h-[80%] absolute top-[5%]">
                          <img
                            className={bubbleFade}
                            src={renderBubbles("misty")[currentBubbleIndex]}
                            onClick={handleBubbleClick}
                          />
                        </div>
                        <img
                          className="w-full h-full"
                          src="/characters/misty.png"
                          alt="Misty"
                        ></img>
                      </div>
                    )}
                    <div className="flex justify-center items-center absolute bottom-[0%] w-full h-[8%] bg-[#FFFFFF]/[0.4]">
                      <p className="montserratBold text-[black]/[0.6]">
                        {persona4 === "judger" ? "BLINKY" : "misty"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full h-[15vh] bg-[#8886D90]">
                  <div className="flex w-full h-[50%] bg-[#D8D7FF]">
                    <div className="flex items-center bg-[#D8D7FF] w-fit">
                      <p className="montserratDark ml-[5%] mr-[15%] w-[30%] leading-[1rem] text-[0.8rem]">
                        most compatible
                      </p>
                      <div className="flex justfy-center w-fit bg-transparent">
                        <p className="ml-[15%] montserratDark w-[50%] leading-[0.9rem] text-[0.6rem]">
                          {
                            compatibility(
                              renderPersonaType(
                                persona1,
                                persona2,
                                persona3,
                                persona4
                              )
                            )[0]
                          }
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center bg-[#D8D7FF] w-fit">
                      <p className="montserratDark ml-[5%] mr-[15%] w-[30%] leading-[1rem] text-[0.8rem]">
                        least compatible
                      </p>
                      <div className="flex justfy-center w-fit bg-transparent">
                        <p className="montserratDark w-[100%] leading-[0.9rem] text-[0.6rem]">
                          {
                            compatibility(
                              renderPersonaType(
                                persona1,
                                persona2,
                                persona3,
                                persona4
                              )
                            )[1]
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center w-full h-[50%] bg-transparent">
                    <img
                      className="ml-[5%]"
                      src="/pp_logo.png"
                      alt="Persona Pals logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
        break;
      case "name":
        results = (
          <div>
            <div className="slideUp2">
              <div className={classNames.container}>
                <div
                  style={{ position: "relative" }}
                  className={classNames.container_fill_center}
                >
                  <div
                    style={{ position: "absolute", top: "5%" }}
                    className={classNames.container_fit_column_center}
                  >
                    <p className="text-center text-[1.1rem] montserratDark w-[80%] text-white mb-[15%]">
                      To introduce yourself to your new pals, please write your
                      name
                    </p>
                    {/* Name input */}
                    {/* focus:border-transparent */}
                    <input
                      type="text"
                      placeholder="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="text-center rounded-md border border-transparent p-2 text-[1.1rem] montserratDark w-[80%] text-white"
                      style={{ backgroundColor: "#8886D9" }}
                    />
                    <div className="w-[60%] bg-white mb-[5%]">
                      <hr />
                    </div>
                    <div className="slideUp3">
                      <Button
                        buttonText={"start"}
                        purpose={setResultsState}
                        to={"individual"}
                        type={"start"}
                        textColor={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        break;
    }

    return results;
  }

  return (
    <>
      {personalityType && personalityType.length > 0 && (
        <div className={renderBG(personaNav)[0]}>
          {renderResults(resultsState)}
        </div>
      )}
    </>
  );
};

export default Results;
