import React from 'react';
import Header from './Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      procura: '',
      Button: true,

    };
  }

  change = (event) => {
    const valueCheck = 2;
    this.setState(() => ({
      procura: event.target.value,
      Button: event.target.value.length < valueCheck,
    }));
  }

  render() {
    const {
      Button,
    } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form action="submit">
          <input
            type="text"
            name="procura"
            id="Artista"
            data-testid="search-artist-input"
            placeholder="Explore"
            onChange={ this.change }

          />
          <button
            data-testid="search-artist-button"
            type="submit"
            name="Button"
            disabled={ Button }

          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}
Search.propTypes = {
};
export default Search;
