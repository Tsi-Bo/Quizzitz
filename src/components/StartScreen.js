function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h4>{numQuestions} questions to test your skills in biology!</h4>

      <button className={"btn"} onClick={() => dispatch({ type: "start" })}>
        Let's go!
      </button>
    </div>
  );
}

export default StartScreen;
