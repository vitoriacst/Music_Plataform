import React from 'react';
import { Link } from 'react-router-dom';
// import Load from './Load';
// import Login from './Login';

class Header extends React.Component {
  // constructor() {
  //   super()
  //   const{
  //   }= this.state
  // };

  // RequirimentApi=(event) => {
  //   event.preventDefault();
  //   const {Load} = this.state;
  //   this.setState({ load: true },
  //     async () => {
  //       await createUser({Load});
  //       this.setState({
  //         load: false,
  //       });
  //     });
  // }

  render() {
    return (
      <div>
        <header data-testid="header-component">
          <Link to="/">Login</Link>
          <Link to="/album">Album</Link>
          <Link to="/profile" data-testid="link-to-profile">Profile</Link>
          <Link to="/search" data-testid="link-to-search">Search</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
          <Link to="/profile/edit">ProfileEdit</Link>
        </header>
      </div>
    );
  }
}
export default Header;
