import React from "react";
import SelectInput from "./SelectInput";
import SelectTipButtons from "./SelectTipButtons";
import "./css/InputContainer.css";
export default function InputContainer({ bill, people, customPercent, percent, handleInputChange, handlePercentForButton }) {
  return (
    <div className="main-inputs__container">
      <SelectInput
        type="Bill"
        name="bill"
        value={bill}
        handleInputChange={handleInputChange}
      />
      <SelectTipButtons
        value={customPercent}
        valuePref={percent}
        handlePercentForButton={handlePercentForButton}
        handleInputChange={handleInputChange}
        name="customPercent"
      />
      <SelectInput
        type="Number of people"
        name="people"
        handleInputChange={handleInputChange}
        value={people}
      />
    </div>
  );
}
