import React from 'react';
import '../styles/Commands.css';

function Commands() {
  const commands = [
    {
      name: '/profile',
      description: 'Create or edit your dating profile',
      usage: '/profile edit'
    },
    {
      name: '/match',
      description: 'Find potential matches in your server',
      usage: '/match search'
    },
    {
      name: '/settings',
      description: 'Customize your matching preferences',
      usage: '/settings privacy'
    }
  ];

  return (
    <section id="commands" className="commands">
      <h2>Bot Commands</h2>
      <div className="commands-list">
        {commands.map((command, index) => (
          <div key={index} className="command-card">
            <h3>{command.name}</h3>
            <p>{command.description}</p>
            <code>{command.usage}</code>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Commands;
