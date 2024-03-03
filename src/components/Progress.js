function Progress({ index, numQuestions, answer, points, maxPoints }) {
  const percentage = Math.ceil((index / numQuestions) * 100);

  return (
    <section>
      <div className="progress-container">
        <p>
          Points: {points} / {maxPoints}
        </p>
        <p>{`${percentage}%`}</p>
      </div>

      <progress max={numQuestions} value={index + Number(answer !== null)} />
    </section>
  );
}

export default Progress;
