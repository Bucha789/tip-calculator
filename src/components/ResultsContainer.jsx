import React from 'react'
import ResultsDisplay from './ResultsDisplay'

export default function ResultsContainer() {
  return (
    <div className='results__container'>
      <ResultsDisplay typeDisplay='Tip Amount' amount='0.00'/>
      <ResultsDisplay typeDisplay='Total' amount='0.00'/>
      <button className='button__reset'>RESET</button>
    </div>
  )
}
