import React from "react";
import TipButon from "./TipButon";
import './css/SelectTipButtons.css';

export default function SelectTipButtons() {
  return (
    <div className="select-tip-buttons__container">
      <h3>Select Tip %</h3>
      <div>
        <TipButon percent="5" />
        <TipButon percent="10" />
        <TipButon percent="15" />
        <TipButon percent="25" />
        <TipButon percent="50" />
        <input type="number" placeholder="Custom" />
      </div>
    </div>
  );
}
