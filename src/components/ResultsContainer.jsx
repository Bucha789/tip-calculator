import React, {useEffect} from "react";
import ResultsDisplay from "./ResultsDisplay";

import "./css/ResultsContainer.css";

export default function ResultsContainer({ tip, total, resetValues }) {
  useEffect(() => {
    if (total === 0 || tip === 0) {
      document.querySelector('.button__reset').setAttribute('disabled', '')
    } else {
      document.querySelector('.button__reset').removeAttribute('disabled')
    }
  }, [tip, total])
  return (
    <div className="results__container">
      <div>
        <ResultsDisplay typeDisplay="Tip Amount" amount={tip.toFixed(2)} />
        <ResultsDisplay typeDisplay="Total" amount={total.toFixed(2)} />
      </div>
      <button onClick={resetValues} className="button__reset">RESET</button>
    </div>
  );
}
