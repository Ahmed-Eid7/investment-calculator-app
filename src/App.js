import Header from "./componens/Header";
import Form from "./componens/Form";
import Tabel from "./componens/Tabel";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlyContribution;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = +(currentSavings * expectedReturn).toFixed(3);
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest,
        savingsEndOfYear: +currentSavings.toFixed(3),
        yearlyContribution,
      });
    }

    setData(yearlyData);
    console.log(data);
  };

  return (
    <div>
      <Header />
      <Form onSubmitForm={calculateHandler} />
      <Tabel data={data} />
    </div>
  );
}

export default App;
