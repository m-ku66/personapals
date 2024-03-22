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
            <div className={classNames.container_fit_column_center}>
              <p className="mb-[1rem] w-[95%] text-center text-[0.8rem]">
                {currentQuestion.prompt}
              </p>
              <img
                className="mb-[2rem]"
                src={currentQuestion.image}
                alt="question image"
              />
            </div>
            <Button buttonText={currentQuestion.choice1} purpose={""} />
            <div className="py-[0.5rem]"></div>
            <Button buttonText={currentQuestion.choice2} purpose={""} />
            <div className="py-[0.5rem]"></div>
            <Button
              buttonText={
                currentQuestionIndex < questions.length - 1
                  ? "Next"
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
            />
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
        <div className={classNames.container_fill_column_full_center}>
          <div className="mb-[1rem]">
            {quizState === 1
              ? `${currentQuestionIndex + 1} / ${questions.length}`
              : ""}
          </div>
          {renderQuizContent(quizState)}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
