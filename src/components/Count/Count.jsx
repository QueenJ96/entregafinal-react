import { useState } from "react";
import "./Count.css";

export const Count = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);

  return (
    <div className="count-container">
      <button className="count-btn" onClick={decrement} disabled={count === 0}>-</button>
      <p className="count-text">Selección: {count}</p>
      <button className="count-btn" onClick={increment}>+</button>
    </div>
  );
};