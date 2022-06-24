import { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';
import './Search.scss';
const SearchCocktail = () => {
  const { setSearchTerm } = useGlobalContext();
  const inputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
  function handleChange() {
    setSearchTerm(inputRef.current!.value);
  }
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <section className="search">
      <div className="form-control">
        <form onSubmit={handleSubmit}>
          <label> Search Your Favorite Cocktail</label>
          <input type="text" ref={inputRef} onChange={handleChange} />
        </form>
      </div>
    </section>
  );
};

export default SearchCocktail;
