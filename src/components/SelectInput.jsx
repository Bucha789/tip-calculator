import React from "react";
import "./css/SelectInput.css";
export default function SelectInput({ type, name, value, handleInputChange }) {
  const classOfInput = value === '0' ? 'danger' : '' 
  return (
    <div className="select-input__container">
      <div className="select-input__title">
        <h3>{type}</h3>
        {
          value === '0' && <span>Can't be zero</span>
        }
      </div>
      <div className="input__container">
        {
          type == 'Bill' ? 
          <i className="fas fa-dollar-sign"></i> : <i class="fas fa-user"></i>
        }
        <input
          type="number"
          name={name}
          value={value}
          min={0}
          className={classOfInput}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
