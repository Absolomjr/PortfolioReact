import React from 'react';

function ProfileComponent() {
  return (
    <section className="profile-section">
      <h3>My Profile Picture</h3>
      <img src='/me.jpg' width="300" height="300" alt="Absolom Orianga" />
    </section>
  );
}

export default ProfileComponent;