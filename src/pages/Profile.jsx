import React from 'react';
import Header from './Header';
import '../style/Profile.css';

class Profile extends React.Component {
  render() {
    return (
      <div data-testid="page-profile" className="my-profile">
        <Header />
        <h1>Hello Friend</h1>
        <svg width="164" height="168" viewBox="0 0 164 168" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M82 14C44.2595 14 13.6667 45.339 13.6667 84C13.6667 122.661 44.2595 154 82 154C119.741 154 150.333 122.661 150.333 84C150.333 45.339 119.741 14 82 14Z" stroke="#F8F8F8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M29.1852 128.422C29.1852 128.422 44.4167 108.5 82 108.5C119.583 108.5 134.822 128.422 134.822 128.422H29.1852ZM82 84C87.4369 84 92.6512 81.7875 96.4957 77.8492C100.34 73.911 102.5 68.5695 102.5 63C102.5 57.4305 100.34 52.089 96.4957 48.1508C92.6512 44.2125 87.4369 42 82 42C76.5631 42 71.3488 44.2125 67.5043 48.1508C63.6598 52.089 61.5 57.4305 61.5 63C61.5 68.5695 63.6598 73.911 67.5043 77.8492C71.3488 81.7875 76.5631 84 82 84V84Z" stroke="#F8F8F8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    );
  }
}
export default Profile;
