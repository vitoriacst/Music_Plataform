import React from 'react';
import Header from './Header';
import Load from './Load';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      Button: true,
      load: false,

    };
  }

  change = (event) => {
    const valueCheck = 2;
    this.setState(() => ({
      Button: event.target.value.length < valueCheck,
    }));
  }

  render() {
    const {
      Button,
      load,
    } = this.state;

    return (
      <div data-testid="page-search">
        { load ? <Load /> : (
          <>
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
          </>
        )}
      </div>
    );
  }
}
export default Search;
