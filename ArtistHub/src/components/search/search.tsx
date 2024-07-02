import React from 'react';
import './search.css';
import { buildApiRequest } from '../../utils.ts';
import { APIMethods, APIMethodsCategories, APIResponseType } from '../../types.ts';

export default class Search extends React.Component {
  state = {
    result: [],
  };

  fetchSearchData = async (): Promise<void> => {
    const response = await fetch(
      buildApiRequest({
        userInput: 'test',
        APIMethodCategory: APIMethodsCategories.Track,
        APIMethod: APIMethods.Search,
      })
    );
    const json: APIResponseType = (await response.json()) as APIResponseType;
    this.setState({ result: json.results[`${APIMethodsCategories.Track}matches`] });
  };

  render(): React.JSX.Element {
    return (
      <section className="search">
        <label htmlFor="search" className="visually-hidden">
          Search the artist:
        </label>
        <input id="search" type="search" placeholder="Search for artist..." className="search__input" />
        <button className="search__button" onClick={void this.fetchSearchData}></button>
      </section>
    );
  }
}
