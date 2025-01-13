import React from 'react';

const Home = () => {
  const inviteBotLink = `https://discord.com/oauth2/authorize?client_id=1327305617530032261&scope=bot%20applications.commands&permissions=8`;

  return (
    <div className="home">
      <h1>Welcome to the RC Date</h1>
      <p>
        This bot helps with various tasks in your Discord server. It's easy to set up, and you can invite it using the link below:
      </p>
      <a href={inviteBotLink} target="_blank" rel="noopener noreferrer">
        Invite the Bot to Your Server
      </a>
    </div>
  );
};

export default Home;
