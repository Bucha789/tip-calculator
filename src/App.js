import InputContainer from "./components/InputContainer";
import ResultsContainer from "./components/ResultsContainer";
import "./App.css";
import { useEffect, useState } from "react";
import { getTotalAmount } from "./helpers/getTotalAmount";


const initialState = {
    bill: "",
    people: "",
    percent: "",
    customPercent: "",
};


function App() {
  const [amountValues, setAmountValues] = useState(initialState);
  const [finalAmountValues, setFinalAmountValues] = useState({
    tipPerson: 0,
    totalPerson: 0,
  });
  const { tipPerson, totalPerson } = finalAmountValues;
  useEffect(() => {
    const newTotals = getTotalAmount(amountValues);
    setFinalAmountValues({
      tipPerson: newTotals.tipForPerson,
      totalPerson: newTotals.totalForPerson,
    });
  }, [amountValues]);

  const handleInputChange = ({ target }) => {
    setAmountValues({
      ...amountValues,
      [target.name]: target.value,
    });
  };
  const handlePercentForButton = (percent) => {
    setAmountValues({
      ...amountValues,
      percent,
    });
  };
  const resetValues = () => {
    setAmountValues(initialState);
  }
  return (
    <div className="App">
      <h1>
        Spli<br></br>tter
      </h1>
      <div className="grid__container">
        <InputContainer
          {...amountValues}
          handleInputChange={handleInputChange}
          handlePercentForButton={handlePercentForButton}
        />
        <ResultsContainer resetValues={resetValues} tip={tipPerson} total={totalPerson} />
      </div>
    </div>
  );
}

export default App;
