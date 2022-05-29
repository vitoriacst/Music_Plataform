import React from 'react';
import { Link } from 'react-router-dom';
import Load from './Load';
import { getUser } from '../services/userAPI';
import '../style/Header.css';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      load: true,
      usuario: '',
    };
  }

  async componentDidMount() {
    const usuario = await getUser();
    this.setState({
      load: false,
      usuario: usuario.name,
    });
  }

  render() {
    const {
      load,
      usuario,
    } = this.state;
    return (
      <div>
        <header data-testid="header-component" className="Header-main">
          {
            load ? <Load /> : (
              <p data-testid="header-user-name">{usuario}</p>
            )
          }
          <nav className="links">
            <Link
              className="Link"
              exact
              to="/profile"
              data-testid="link-to-profile"
            >
              Profile

            </Link>
            <Link
              exact
              to="/search"
              data-testid="link-to-search"
              className="Link"
            >
              Search

            </Link>
            <Link
              exact
              to="/favorites"
              data-testid="link-to-favorites"
              className="Link"
            >
              Favorites

            </Link>
          </nav>
        </header>
      </div>
    );
  }
}
export default Header;
