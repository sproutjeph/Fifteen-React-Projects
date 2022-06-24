import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from './context';
import './Details.scss';
const Details = () => {
  const { cocktails } = useGlobalContext();
  const { id } = useParams();
  const item = cocktails.find((item) => item.id === id);
  console.log(item);

  return (
    <div>
      <article key={id} className="cocktail-item">
        <img src={item.img} alt={item.name} />
        <div className="info">
          <h2>{item.name}</h2>
          <h3>{item.glass}</h3>
          <p>{item.type}</p>
        </div>
      </article>
    </div>
  );
};

export default Details;
