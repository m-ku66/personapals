import React, { useState } from "react";
import classNames from "../styles/styles";
import Button from "./Button";
import questions from "./Questions";

const Quiz = ({ setAppState }) => {
  const [quizState, setQuizState] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  function renderQuizContent(state) {
    let quizContent;
    switch (state) {
      case 1:
        quizContent = (
          <>
            <div className="w-[88%] h-[88%] flex flex-col items-center">
              <div className={classNames.container_fit_column_center}>
                <p className="mulishBold text-white mb-[0.7rem] w-[95%] text-center text-[0.8rem]">
                  {currentQuestion.prompt}
                </p>
                <img
                  className="mb-[1rem]"
                  src={currentQuestion.image}
                  alt="question image"
                />
              </div>
              <Button
                buttonText={currentQuestion.choice1}
                purpose={""}
                to={""}
                type={""}
              />
              <div className="py-[0.3rem]"></div>
              <Button
                buttonText={currentQuestion.choice2}
                purpose={""}
                to={""}
                type={""}
              />
              <div className="py-[0.5rem]"></div>
              <Button
                buttonText={
                  currentQuestionIndex < questions.length - 1
                    ? "next"
                    : "See Results!"
                }
                purpose={() => {
                  if (currentQuestionIndex < questions.length - 1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                  } else {
                    setQuizState(2);
                    setTimeout(() => {
                      setAppState("results");
                    }, 3000);
                  }
                }}
                to={""}
                type={"start"}
              />
            </div>
          </>
        );
        break;
      case 2:
        quizContent = (
          <div className={classNames.container_fit_column_center}>
            <p className="mb-[1rem] w-[80%] text-center">{"Loading..."}</p>
          </div>
        );
        break;
    }
    return quizContent;
  }

  return (
    <div className={classNames.container}>
      <div className={classNames.container_fill_padding}>
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="text-[0.7rem] mulish text-white absolute top-[3%] mb-[1rem]">
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
