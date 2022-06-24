import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import './Cocktail.scss';
const Cocktails = () => {
  const { cocktails } = useGlobalContext();

  return (
    <section className="cocktail">
      <h1>Cocktails</h1>

      <ul>
        {cocktails.map(({ img, id, name, type, glass }) => (
          <article key={id} className="cocktail-item">
            <img src={img} alt={name} />
            <div className="info">
              <h2>{name}</h2>
              <h3>{glass}</h3>
              <p>{type}</p>
              <Link className="details-btn" to={`/details${id}`}>
                Details
              </Link>
            </div>
          </article>
        ))}
      </ul>
    </section>
  );
};

export default Cocktails;
