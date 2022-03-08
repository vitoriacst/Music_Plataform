import React from 'react';
import Header from './Header';

class Search extends React.Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
        <h1>search</h1>
      </div>
    );
  }
}
export default Search;
