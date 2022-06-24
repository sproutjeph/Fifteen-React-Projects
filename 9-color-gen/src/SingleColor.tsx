import React, { useEffect, useState } from 'react';

const SingleColor = ({
  alpha,
  rgb,
  type,
  weight,
  i,
}: {
  rgb: [r: number, g: number, b: number];
  alpha: number;
  type: string;
  weight: string;
  i: number;
}) => {
  const [alert, setAlert] = useState(false);

  function componentToHex(c: number) {
    var Hex = c.toString(16);
    return Hex.length === 1 ? '0' + Hex : Hex;
  }

  function rgbToHex(r: number, g: number, b: number) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  console.log(rgbToHex(2, 2, 2));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      onClick={() => {
        navigator.clipboard.writeText(rgbToHex(...rgb));
        setAlert(true);
      }}
      className="Single-color"
      style={{ backgroundColor: `rgb(${rgb.join(' ')})` }}
    >
      <div className={`${i > 10 ? 'light' : 'dark'}`}>
        <p>{weight}%</p>
        <p>{rgbToHex(...rgb)}</p>
        {alert && <p className="copied">Copied to clipboard</p>}
      </div>
    </article>
  );
};

export default SingleColor;
