import './App.css';
import InputContainer from './components/InputContainer';
import ResultsContainer from './components/ResultsContainer';

function App() {
  return (
    <div className="App">
      <h1>Spli<br></br>tter</h1>
      <div className="grid__container">
      <InputContainer />
      <ResultsContainer/>
      </div>
    </div>
  );
}

export default App;
