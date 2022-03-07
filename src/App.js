import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Link to="/">Login</Link>
          <Link to="/Album">Album</Link>
          <Link to="/NotFound">NotFound</Link>
          <Link to="/Profile">Profile</Link>
          <Link to="/Search">Search</Link>
          <Link to="/Favorites">Favorites</Link>
          <Link to="/profile/edit">ProfileEdit</Link>

          <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/album" component={ Album } />
            <Route exact path="/profile" component={ Profile } />
            <Route path="/search" component={ Search } />
            <Route exact path="/profile/edit" component={ ProfileEdit } />
            <Route path="/favorites" component={ Favorites } />
            <Route exact path="*" component={ NotFound } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
