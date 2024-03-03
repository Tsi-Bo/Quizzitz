function NextButton({ dispatch, index, numQuestions, answer }) {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className={"btn btn-next"}
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next Question
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className={"btn btn-next"}
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish quiz
      </button>
    );
}

export default NextButton;
