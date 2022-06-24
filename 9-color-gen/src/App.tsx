import React, { useState } from 'react';
import SingleColor from './SingleColor';
const Values = require('values.js');

// let colors = new Values('#222').all(10);

// console.log(`rgb(${colors[0].rgb.join(' ')})`);
// console.log(colors[0]);

interface Color {
  rgb: [r: number, g: number, b: number];
  alpha: number;
  type: string;
  weight: string;
}

const App = () => {
  const [enteredColor, setEnteredColor] = useState('');
  const [colors, setColors] = useState<Color[]>(new Values('#f15025').all(10));

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    try {
      const list = new Values(enteredColor).all(10);
      setColors(list);
      console.log(colors);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <section className="App__header">
        <h1>Color Generator</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="#f15025"
            value={enteredColor}
            onChange={(e) => setEnteredColor(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </section>

      <section className="contanier">
        {colors.map((clr, i) => (
          <SingleColor {...clr} key={i} i={i} />
        ))}
      </section>
    </>
  );
};

export default App;
