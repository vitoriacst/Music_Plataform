import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  render() {
    return (
      <div>
        <header data-testid="header-component">
          <Router>
            <Link to="/">Login</Link>
            <Link to="/Album">Album</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/Search">Search</Link>
            <Link to="/Favorites">Favorites</Link>
            <Link to="/profile/edit">ProfileEdit</Link>
          </Router>
        </header>
        <h1>{getUser}</h1>
      </div>
    );
  }
}
export default Header;
