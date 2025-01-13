import React, { useState } from 'react';

const Dashboard = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleLogin = () => {
    // Here you would initiate the OAuth2 flow
    window.location.href = 'https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot%20applications.commands&permissions=8';
  };

  return (
    <div className="dashboard">
      {!userLoggedIn ? (
        <>
          <h1>Login to manage your Bot</h1>
          <button onClick={handleLogin}>Login with Discord</button>
        </>
      ) : (
        <p>Welcome to your Bot Dashboard!</p>
      )}
    </div>
  );
};

export default Dashboard;
