export default function UserInput({userInput, onChange}) {
  return (
    <div id="user-input">
      <div className="input-grou">
        <label htmlFor="initial-investment">Initial Investment</label>
        <input type="number" id="initial-investment" name="initialInvestment" value={userInput.initialInvestment} onChange={onChange}/>

        <label htmlFor="annual-investment">Annual Investment</label>
        <input type="number" id="annual-investment" name="annualInvestment" value={userInput.annualInvestment} onChange={onChange} />
      </div>

      <div className="input-grou">
        <label htmlFor="expected-return">Expected Return</label>
        <input type="number" id="expected-return" name="expectedReturn" value={userInput.expectedReturn} onChange={onChange} />
        
        <label htmlFor="duration">Duration</label>
        <input type="number" id="duration" name="duration" value={userInput.duration} onChange={onChange}/>
      </div>
    </div>
  );
}
