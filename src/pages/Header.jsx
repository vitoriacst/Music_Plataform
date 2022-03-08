import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
        <header data-testid="header-component">
          <Link to="/">Login</Link>
          <Link to="/Album">Album</Link>
          <Link to="/Profile">Profile</Link>
          <Link to="/Search">Search</Link>
          <Link to="/Favorites">Favorites</Link>
          <Link to="/profile/edit">ProfileEdit</Link>
        </header>
      </div>
    );
  }
}
export default Header;
