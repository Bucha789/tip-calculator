import InputContainer from './components/InputContainer';
import ResultsContainer from './components/ResultsContainer';
import './App.css';
import { useEffect, useState } from 'react';

const getTotalAmount = ({bill, people, percent, customPercent}) => {
  percent = customPercent === '' ? Number(percent) : Number(customPercent);
  const totalForPerson = (Number(bill) + (Number(bill) * (percent / 100))) / people;
  const tipForPerson = (Number(bill) * (percent / 100) / people)

  return {
    totalForPerson,
    tipForPerson
  }
}
function App() {
  const [amountValues, setAmountValues] = useState({
    bill: "",
    people: "",
    percent: "",
    customPercent: "",
  });
  const [finalAmountValues, setFinalAmountValues] = useState({
    tipPerson: 0,
    totalPerson: 0,
  })
  const {tipPerson, totalPerson} = finalAmountValues;
  useEffect(() => {
    const newTotals = getTotalAmount(amountValues);
    setFinalAmountValues({
      tipPerson: newTotals.tipForPerson,
      totalPerson: newTotals.totalForPerson,
    })
  },[amountValues])
  
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
  return (
    <div className="App">
      <h1>Spli<br></br>tter</h1>
      <div className="grid__container">
      <InputContainer {...amountValues} handleInputChange={handleInputChange} handlePercentForButton={handlePercentForButton} />
      <ResultsContainer tip={tipPerson} total={totalPerson} />
      </div>
    </div>
  );
}

export default App;
