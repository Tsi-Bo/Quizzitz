import { useReducer } from "react";

import questions from "../data/questions";
import Header from "./Header";
import StartScreen from "./StartScreen";
import Main from "./Main";
import Questions from "./Questions";
import NextButton from "./NextButton";
import EndScreen from "./EndScreen";
import Progress from "./Progress";

const initialState = {
  questions,
  status: "ready",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "reset":
      return { ...state, status: "ready", index: 0, answer: null, points: 0 };
    default:
      throw new Error("Something went wrong");
  }
}

export default function App() {
  const [{ questions, status, index, answer, points, highscore }, dispatch] =
    useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const maxPoints = questions.reduce((prev, curr) => prev + curr.points, 0);

  return (
    <>
      <Header />
      <Main>
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              answer={answer}
              points={points}
              maxPoints={maxPoints}
            />
            <Questions
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton
              dispatch={dispatch}
              index={index}
              numQuestions={numQuestions}
              answer={answer}
            />
          </>
        )}
        {status === "finished" && (
          <EndScreen
            points={points}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </>
  );
}
