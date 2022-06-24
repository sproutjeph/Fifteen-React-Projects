import React from 'react';
import { Link } from 'react-router-dom';
import './Error.scss';
const Error = () => {
  return (
    <section className="error">
      <h2>Opps! page not found</h2>

      <div>
        <Link to="/">back to home</Link>
      </div>
    </section>
  );
};

export default Error;
