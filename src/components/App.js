import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  // Initialize the counter state to 0
  const [count, setCount] = useState(0);

  // Function to handle button clicks and increment the counter
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* Paragraph displaying the count */}
      <p>Button clicked {count} times</p>
      {/* Button to trigger the count increment */}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
