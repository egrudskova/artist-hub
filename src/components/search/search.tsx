import React, { useState } from 'react';
import './search.css';
import { InputChangeHandler } from '../../services/types.ts';

interface SearchProps {
  handleSearchRequestChange: (request: string) => void;
}

const Search = ({ handleSearchRequestChange }: SearchProps): React.JSX.Element => {
  const [input, setInput] = useState('');

  const handleInputChange = (evt: InputChangeHandler): void => {
    setInput(evt.target.value);
  };

  return (
    <section className="search">
      <label htmlFor="search" className="visually-hidden">
        Search the artist:
      </label>
      <input id="search" type="search" value={input} onChange={handleInputChange} className="search__input" />
      <button
        className="search__button"
        onClick={() => {
          handleSearchRequestChange(input);
        }}
      ></button>
    </section>
  );
};

export default Search;
