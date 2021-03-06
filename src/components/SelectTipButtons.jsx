import React, { useState, useEffect } from "react";
import "./css/SelectTipButtons.css";
import "./css/TipButton.css";

export default function SelectTipButtons({ name, value, valuePref, handleInputChange, handlePercentForButton}) {
  const [buttonActive, setButtonActive] = useState('');
  const buttonValues = ["5", "10", "15", "25", "50"];

  const handleClick = (percent) => {
    setButtonActive(percent);
    handlePercentForButton(percent);
  };
  useEffect(() => {
    if (value === '') {
      setButtonActive(valuePref)
    }
  }, [value])
  return (
    <div className="select-tip-buttons__container">
      <h3>Select Tip %</h3>
      <div>
        {buttonValues.map((item) => {
          return (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={
                buttonActive === item ? `tip__button active` : "tip__button"
              }
            >
              {item}%
            </button>
          );
        })}
        <input
          onClick={() => setButtonActive('')}
          type="number"
          min={0}
          name={name}
          value={value}
          onChange={handleInputChange}
          placeholder="Custom"
        />
      </div>
    </div>
  );
}

// import React, { useState } from 'react'
// export default function TipButon({percent, handleInputChange, isActive) {
//   const classNameButton = isActive ? 'tip__button active' : 'tip__button'

//   const handleClick = () => {
//     setIsActive(!isActive)
//     handleInputChange({target: {
//       name: 'custom',
//       value: percent
//     }})
//   }

//   return (
//     <>
//       <button onClick={handleClick} className={classNameButton}>{percent}%</button>
//     </>
//   )
// }
