import React from 'react';
import '../styles/Features.css';

function Features() {
  const features = [
    {
      title: 'Dating Profiles',
      description: 'Create beautiful profiles with custom fields, images, and interests.',
      icon: '❤️'
    },
    {
      title: 'Matchmaking',
      description: 'Advanced algorithm to find perfect matches based on interests and preferences.',
      icon: '🤝'
    },
    {
      title: 'Privacy First',
      description: 'Complete control over your data with customizable privacy settings.',
      icon: '🔒'
    },
    {
      title: 'Server Integration',
      description: 'Seamlessly integrates with your existing server structure.',
      icon: '🔄'
    }
  ];

  return (
    <section id="features" className="features">
      <h2>Why Choose Our Bot?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;