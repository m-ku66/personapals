import React, { useEffect, useState } from "react";
import classNames from "../styles/styles";
import Button from "./Button";
import questions from "./Questions";

const Quiz = ({ personalityType, setPersonalityType, setAppState }) => {
  const [quizState, setQuizState] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [focusState1, setFocusState1] = useState("base");
  const [focusState2, setFocusState2] = useState("base");
  const [currentAnswer, setCurrentAnswer] = useState(
    "No answer is currently selected..."
  );
  const [fadeState1, setFadeState1] = useState("fadeIn1");
  const [fadeState2, setFadeState2] = useState("fadeIn2");
  const [fadeState3, setFadeState3] = useState("fadeIn3");

  const [slideState1, setSlideState1] = useState("slideUp1");
  const [slideState2, setSlideState2] = useState("slideUp2");
  const [slideState3, setSlideState3] = useState("slideUp3");

  const [ie, setIe] = useState(0);
  const [oi, setOi] = useState(0);
  const [tf, setTf] = useState(0);
  const [jp, setJp] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  // Array to hold all image URLs
  const imageUrls = questions.map((question) => question.image);

  // useEffect to preload images
  useEffect(() => {
    const preloadedImages = [];
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      preloadedImages.push(img);
    });
  }, [imageUrls]);

  function handleButtonFocus(questionArray) {
    setCurrentAnswer(questionArray[1]);
    switch (questionArray[0]) {
      case 1:
        setFocusState1("focus");
        setFocusState2("base");
        break;
      case 2:
        setFocusState2("focus");
        setFocusState1("base");
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    console.log(currentAnswer);
    console.log(ie, oi, tf, jp);
  }, [currentAnswer]);

  function renderQuizContent(state) {
    let quizContent;
    switch (state) {
      case 1:
        quizContent = (
          <>
            <div
              style={{ position: "absolute", top: "10%" }}
              className={`${slideState1} w-[88%] h-[88%] flex flex-col items-center`}
            >
              <div className={slideState2}>
                <div className={classNames.container_fit_column_center}>
                  <p
                    className={
                      currentQuestionIndex === 4 ||
                      currentQuestionIndex === 5 ||
                      currentQuestionIndex === 8 ||
                      currentQuestionIndex === 10 ||
                      currentQuestionIndex === 12
                        ? "mulishBold text-white mb-[0.1rem] w-[95%] text-center text-[0rem]"
                        : "mulishBold text-white mb-[0.7rem] w-[95%] text-center text-[1.1rem]"
                    }
                  >
                    {currentQuestion.prompt}
                  </p>
                  <img
                    className={
                      currentQuestionIndex === 4 ||
                      currentQuestionIndex === 5 ||
                      currentQuestionIndex === 8 ||
                      currentQuestionIndex === 10 ||
                      currentQuestionIndex === 12
                        ? "mb-[0rem]"
                        : "mb-[1.5rem]"
                    }
                    src={currentQuestion.image}
                    alt="question image"
                  />
                </div>
              </div>
              <div className={slideState3}>
                <Button
                  buttonText={currentQuestion.choice1}
                  purpose={handleButtonFocus}
                  to={[1, currentQuestion.choice1]}
                  type={focusState1}
                  textColor={""}
                />
              </div>
              <div className="py-[0.5rem]"></div>
              <div className={slideState3}>
                <Button
                  buttonText={currentQuestion.choice2}
                  purpose={handleButtonFocus}
                  to={[2, currentQuestion.choice2]}
                  type={focusState2}
                  textColor={""}
                />
              </div>

              <div className="py-[1rem]"></div>
              <div className={slideState3}>
                <Button
                  buttonText={
                    currentQuestionIndex < questions.length - 1
                      ? "next"
                      : "See Results!"
                  }
                  purpose={() => {
                    if (
                      currentQuestionIndex < questions.length - 1 &&
                      currentAnswer !== "No answer is currently selected..."
                    ) {
                      //move to the next question
                      setCurrentQuestionIndex(currentQuestionIndex + 1);
                      setFocusState1("base");
                      setFocusState2("base");

                      //reset animations
                      setFadeState1("");
                      setFadeState2("");
                      setFadeState3("");
                      setSlideState1("");
                      setSlideState2("");
                      setSlideState3("");
                      setTimeout(() => {
                        setFadeState1("fadeIn1");
                        setFadeState2("fadeIn2");
                        setFadeState3("fadeIn3");
                        setSlideState1("slideUp1");
                        setSlideState2("slideUp2");
                        setSlideState3("slideUp3");
                      }, 10);

                      //accumulate points towards personas
                      switch (currentQuestion.key) {
                        case "a":
                          setIe((prev) =>
                            currentAnswer === currentQuestion.choice1
                              ? prev + 1
                              : prev - 1
                          );
                          break;
                        case "b":
                          setIe((prev) =>
                            currentAnswer === currentQuestion.choice1
                              ? prev - 1
                              : prev + 1
                          );
                          break;
                        case "c":
                          setIe((prev) =>
                            currentAnswer === currentQuestion.choice1
                              ? prev + 1
                              : prev - 1
                          );
                          break;
                        case "d":
                          setOi((prev) =>
                            currentAnswer === currentQuestion.choice1
                              ? prev + 1
                              : prev - 1
                          );
                          break;
                        case "e":
                          setOi((prev) =>
                            currentAnswer === currentQuestion.choice1
                              ? prev - 1
                              : prev + 1
                          );
                          break;
                        case "f":
                          setOi((prev) =>
                            currentAnswer === currentQuestion.choice1
                              ? prev + 1
                              : prev - 1
                          );
                          break;
                        case "g":
                          setTf((prev) =>
                            currentAnswer === currentQuestion.choice1
                              ? prev + 1
                              : prev - 1
                          );
                          break;
                        case "h":
                          setTf((prev) =>
                            currentAnswer === currentQuestion.choice1
                              ? prev - 1
                              : prev + 1
                          );
                          break;
                        case "i":
                          setTf((prev) =>
                            currentAnswer === currentQuestion.choice1
                              ? prev - 1
                              : prev + 1
                          );
                          break;
                        case "j":
                        case "k":
                          setJp((prev) =>
                            currentAnswer === currentQuestion.choice1
                              ? prev + 1
                              : prev - 1
                          );
                          break;
                        case "l":
                          setJp((prev) =>
                            currentAnswer === currentQuestion.choice1
                              ? prev - 1
                              : prev + 1
                          );
                          break;
                        default:
                          break;
                      }
                      setCurrentAnswer("No answer is currently selected...");
                    } else if (
                      currentQuestionIndex === questions.length - 1 ||
                      currentQuestion === undefined
                    ) {
                      setTimeout(() => {
                        setQuizState(2);
                      }, 1000);
                      setTimeout(() => {
                        setPersonalityType([ie, oi, tf, jp]);
                        setAppState("results");
                      }, 3000);
                    } else {
                      alert(
                        "Bro's ignoring the questions and trying to leave!"
                      );
                    }
                  }}
                  to={""}
                  type={"start"}
                  textColor={""}
                />
              </div>
            </div>
          </>
        );
        break;
      case 2:
        quizContent = (
          <div className={classNames.container_fit_column_center}>
            <img className={`${fadeState2}`} src="/loading.gif" alt="" />
          </div>
        );
        break;
      default:
        break;
    }
    return quizContent;
  }

  return (
    <div className={classNames.container}>
      <div className={classNames.container_fill_padding}>
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div
            className={`${fadeState2} text-[0.9rem] mulish text-white absolute top-[5%] mb-[1rem]`}
          >
            {quizState === 1
              ? `${currentQuestionIndex + 1} of ${questions.length}`
              : ""}
          </div>
          {renderQuizContent(quizState)}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
