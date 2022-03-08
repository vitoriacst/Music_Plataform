import React from 'react';
import Header from './Header';

class Profile extends React.Component {
  render() {
    return (
      <div data-testid="page-profile">
        <h1>profile</h1>
        <Header />
      </div>
    );
  }
}
export default Profile;
