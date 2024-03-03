function EndScreen({ points, highscore, dispatch }) {
  return (
    <div className="results">
      <h2>Quiz Finished</h2>
      <p>You obtained {points} points</p>
      <p>Highscore: {highscore}</p>
      <button
        className={"btn btn-results"}
        onClick={() => dispatch({ type: "reset" })}
      >
        Back to main menu
      </button>
    </div>
  );
}

export default EndScreen;
