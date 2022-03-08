import React from 'react';
import Header from './Header';

class Favorites extends React.Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        <h1>Favorites</h1>
      </div>
    );
  }
}
export default Favorites;
