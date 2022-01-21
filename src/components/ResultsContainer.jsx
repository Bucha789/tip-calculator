import React from 'react'
import ResultsDisplay from './ResultsDisplay'

import './css/ResultsContainer.css';

export default function ResultsContainer() {
  return (
    <div className='results__container'>
      <div>
      <ResultsDisplay typeDisplay='Tip Amount' amount='0.00'/>
      <ResultsDisplay typeDisplay='Total' amount='0.00'/>
      </div>
      <button className='button__reset'>RESET</button>
    </div>
  )
}
