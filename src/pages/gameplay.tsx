import styles from "./gameplay.module.scss";
import patka_thinking from "../assets/patka_thinking.png";
import QuestionsList from "../components/questions-list/QuestionsList.tsx";
import {useCallback, useEffect, useState} from "react";
import { StageProps } from "../App.tsx";
import CurrentQuestion from "../components/current-question/CurrentQuestion.tsx";
import logo from "../assets/logo.png"
import {useSound} from "../hooks/useSound.tsx";

export interface Question {
  question: string;
  answers: Answer[];
  money: number;
}

export interface Answer {
  text: string;
  isCorrect: boolean;
}

const minBackgroundSize = Math.round(
  Math.sqrt(Math.pow(window.outerWidth, 2) + Math.pow(window.outerHeight, 2)),
);

const questions: Question[] = [
  {
    question: "Test question",
    answers: [
      { text: "Answer not correct", isCorrect: false },
      { text: "Answer not correct", isCorrect: false },
      { text: "Answer not correct", isCorrect: false },
      { text: "Answer correct", isCorrect: true },
    ],
    money: 500,
  },
  {
    question: "Test question 2",
    answers: [
      { text: "Answer not correct 2", isCorrect: false },
      { text: "Answer not correct 2", isCorrect: false },
      { text: "Answer not correct 2", isCorrect: false },
      { text: "Answer correct 2", isCorrect: true },
    ],
    money: 1000,
  },
  {
    question: "Test question 3",
    answers: [
      { text: "Answer not correct 3", isCorrect: false },
      { text: "Answer not correct 3", isCorrect: false },
      { text: "Answer not correct 3", isCorrect: false },
      { text: "Answer correct 3", isCorrect: true },
    ],
    money: 2000,
  },
];

const Gameplay = ({ setStage }: StageProps) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const playSound = useSound();

  useEffect(() => {
    console.log("gameplay")
    playSound("question");
  }, []);

  const correctAnswer = useCallback(() => {
    // Last question solved, it's a victory
    if (currentQuestion === questions.length - 1) {
      setStage("win");
      playSound("victory");
    }
    else {
      setCurrentQuestion(currentQuestion + 1);
      playSound("question");
    }
  }, [currentQuestion, playSound, setStage]);

  const wrongAnswer = useCallback(() => {
    setStage("lose");
  }, [setStage]);

  return (
    <div className={styles.gameplay}>
      <div
        className={styles.animatedBackground}
        style={{ height: minBackgroundSize + "px" }}
      />

      <img src={patka_thinking} alt="Patka" className={styles.patka} />
      <img src={logo} className={styles.logo} alt="Logo"/>

      <QuestionsList questions={questions} current={currentQuestion} />
      <CurrentQuestion
        onCorrect={correctAnswer}
        onWrong={wrongAnswer}
        question={questions[currentQuestion]}
      />
    </div>
  );
};

export default Gameplay;
