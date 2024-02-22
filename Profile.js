
import React from 'react';
import Header from './Header'; 
// import Footer from './Footer'; 
import Sidebar from './sidebar';

function Profile() {
  return (
    <div className="profile-page">
      <Header />
      <div className="content">
      <div className="profile" id="outer-container">
       <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    
      </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Profile;
