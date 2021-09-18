import React,{useState} from "react";
import './Counter.css';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  
  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter + -1);
  const reset = () => setCounter(0);
  
  return (
    <div className="counter">
      <h1 className="counter__title">Counter</h1>
      <span className="counter__number">{counter}</span>
      <button className="counter__button-increase button" onClick={increase}>Increase</button>
      <button className="counter__button-reset button" onClick={reset}>Reset</button>
      <button className="counter__button-decrease button" onClick={decrease}>Decrease</button>
    </div>
  );
}
