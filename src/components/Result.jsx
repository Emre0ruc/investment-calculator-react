import Row from "./Row";

import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({userInput}){
    const result = calculateInvestmentResults(userInput);

    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {result.map((data) => {
                    const investedCapital = userInput.initialInvestment + userInput.annualInvestment*data.year;
                    const totalInterest = data.valueEndOfYear - investedCapital;
                    return(
                        <Row key={data.year} 
                        year={data.year} 
                        investmentValue={formatter.format(data.valueEndOfYear)}
                        interest={formatter.format(data.interest)}
                        totalInterest={formatter.format(totalInterest)}
                        investedCapital={formatter.format(investedCapital)}/>
                    );
                })}
            </tbody>
        </table>
    );
}