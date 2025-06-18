const WeeklyGoals = () => (
  <div className="weekly-goals">
    <h2 className="section-title">Weekly Goals</h2>
    {['Calories', 'Protein', 'Water'].map((item, index) => (
      <div key={index}>
        <p>{item}</p>
        <div className="progress-bar">
          <div className="fill" style={{ width: `${70 + index * 10}%` }}>
            {70 + index * 10}%
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default WeeklyGoals;
