import { useState } from 'react';
import './App.css';
import Number from './components/Number';
import Plus from './components/Plus';
import Result from './components/Result';
import Minus from './components/Minus';
import Numinput from './components/Numinput';
import Equal from './components/Equal';
import Clear from './components/Clear';
import Multiply from './components/Multiply';
import Divide from './components/Divide';

function App() {

  const [input, setInput] = useState(0)
  const [result, setResult] = useState(0)
  const [plus, setPlus] = useState(false)
  const [minus, setMinus] = useState(false)
  const [multiply, setMultiply] = useState(false)
  const [divide, setDivide] = useState(false)

  return (
    <div>
      <div>
        <Numinput input={input}/>
        <Result result={result}/>
      </div>
      <br />
      <div>
        <Number number={7} input={input} setInput={setInput}/>
        <Number number={8} input={input} setInput={setInput}/>
        <Number number={9} input={input} setInput={setInput}/>
        <Plus input={input} setInput={setInput} result={result} setResult={setResult} plus={plus} setPlus={setPlus} setMinus={setMinus} setMultiply={setMultiply} setDivide={setDivide}/>
      </div>
      <div>
        <Number number={4} input={input} setInput={setInput}/>
        <Number number={5} input={input} setInput={setInput}/>
        <Number number={6} input={input} setInput={setInput}/>
        <Minus input={input} setInput={setInput} result={result} setResult={setResult} minus={minus} setMinus={setMinus} setPlus={setPlus} setMultiply={setMultiply} setDivide={setDivide}/>
      </div>
      <div>
        <Number number={1} input={input} setInput={setInput}/>
        <Number number={2} input={input} setInput={setInput}/>
        <Number number={3} input={input} setInput={setInput}/>
        <Multiply input={input} setInput={setInput} result={result} setResult={setResult} multiply={multiply} setMultiply={setMultiply} setPlus={setPlus} setMinus={setMinus} setDivide={setDivide} plus={plus} minus={minus} divide={divide}/>
      </div>
      <div>
        <Number number={0} input={input} setInput={setInput}/>
        <Clear setInput={setInput} setResult={setResult} setPlus={setPlus} setMinus={setMinus} setMultiply={setMultiply} setDivide={setDivide}/>
        <Equal input={input} setInput={setInput} result={result} setResult={setResult} plus={plus} minus={minus} multiply={multiply} divide={divide} setPlus={setPlus} setMinus={setMinus} setMultiply={setMultiply} setDivide={setDivide}/>
        <Divide  input={input} setInput={setInput} result={result} setResult={setResult} divide={divide} setDivide={setDivide} setPlus={setPlus} setMinus={setMinus} setMultiply={setMultiply} plus={plus} minus={minus} multiply={multiply}/>
      </div>
    </div>
    );
}

export default App;
