import React, { useState, useRef, useEffect } from 'react';
import Data from './data';
const App = () => {
  const [data, setdata] = useState<string[]>(Data);
  const inputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const inputData = +inputRef.current!.value;

    setdata(Data.slice(0, inputData));
    console.log(data);
  }

  useEffect(() => {
    setdata([]);
  }, []);

  return (
    <section className="App">
      <h1 className="App__header">TIRED OF BORING LOREM IPSUM?</h1>
      <form>
        <label>Paragraphs:</label>
        <input type="number" ref={inputRef} />
        <button type="submit" onClick={handleSubmit}>
          Generate
        </button>
      </form>
      <ul>
        {data.map((text, index) => (
          <li key={index}>
            <p>{text} </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default App;
