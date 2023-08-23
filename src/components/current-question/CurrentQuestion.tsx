import Button, { Letter } from "../button/Button.tsx";
import { Answer, Question } from "../../pages/gameplay.tsx";
import styles from "./current-question.module.scss";
import { useCallback, useState } from "react";
import { useSound } from "../../hooks/useSound.tsx";

interface CurrentQuestionProps {
  onWrong: () => void;
  onCorrect: () => void;
  question: Question;
}

const answerLetters: Letter[] = ["A", "B", "C", "D"];

const CurrentQuestion = ({
  onWrong,
  onCorrect,
  question,
}: CurrentQuestionProps) => {
  const [selected, setSelected] = useState<number>(-1);
  const [correct, setCorrect] = useState<number>(-1);
  const playSound = useSound();

  const onAnswer = useCallback(
    async (answer: Answer) => {
      if (selected !== -1) return;

      const newSelected = question.answers.indexOf(answer);

      setSelected(newSelected);
      playSound("selected", false);
      await new Promise((resolve) => setTimeout(resolve, 5000));

      const newCorrect = question.answers.findIndex((a) => a.isCorrect)
      setCorrect(newCorrect);

      playSound(newCorrect === newSelected ? "correct" : "wrong", false);
      await new Promise((resolve) => setTimeout(resolve, 5000));

      answer.isCorrect ? onCorrect() : onWrong();
      setSelected(-1);
      setCorrect(-1);
    },
    [onCorrect, onWrong, playSound, question.answers, selected],
  );

  return (
    <div className={styles.question}>
      <div className={styles.text}>{question.question}</div>
      <div className={styles.answers}>
        {question.answers.map((answer, i) => (
          <Button
            key={i}
            onClick={() => onAnswer(answer)}
            letter={answerLetters[i]}
            selected={selected === i}
            correct={correct === i}
          >
            {answer.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CurrentQuestion;
