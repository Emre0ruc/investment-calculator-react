import { use, useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/User_Input";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment : "",
    annualInvestment : "",
    expectedReturn : "",
    duration : ""
  })

  function handleChange(event){
    const {name, value} = event.target;

    setUserInput({
      ...userInput,
      [name] : value
    });
  }

  const numericUserInput = {
    initialInvestment : parseFloat(userInput.initialInvestment) || 0,
    annualInvestment : parseFloat(userInput.annualInvestment) || 0,
    expectedReturn : parseFloat(userInput.expectedReturn) || 0,
    duration : parseFloat(userInput.duration)
  }

  return (
    <div>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
      <Result userInput={numericUserInput}/>
    </div>    
  );
}

export default App
