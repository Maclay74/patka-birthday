import { Question } from "../../pages/gameplay.tsx";
import styles from "./questions-list.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface QuestionsListProps {
  questions: Question[];
  current: number;
}

interface QuestionItemProps {
  question: Question;
  current: boolean;
  done: boolean;
  index: number;
}

const QuestionItem = ({ question, current, done, index }: QuestionItemProps) => {
  return <div className={cx("question", {current, done})} data-index={index + 1}>{question.money} zl</div>;
};

const QuestionsList = ({ questions, current }: QuestionsListProps) => {
  return (
    <div className={styles.list}>
      {questions.map((question, i) => (
        <QuestionItem question={question} index={i} key={i} current={i === current} done={i < current} />
      ))}
    </div>
  );
};

export default QuestionsList;
