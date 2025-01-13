import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
import '../styles/Home.css';

const inviteBotLink = 'https://discord.com/oauth2/authorize?client_id=1327305617530032261&permissions=8&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2F&integration_type=0&scope=bot+applications.commands';

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text-content">
          <div className="hero-badge">
            #1 Discord Dating Bot
          </div>
          <h1>Find Your Perfect Match in Discord</h1>
          <p>Connect, chat, and create meaningful relationships within your favorite Discord communities. Experience dating that feels natural and fun.</p>
          
          <div className="hero-features-list">
            <div className="feature-item">
              <div className="feature-icon">✨</div>
              <span>Smart Matchmaking</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <span>Privacy Focused</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">❤️</div>
              <span>Real Connections</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="primary-button"  >
              <Link to ={inviteBotLink}  className="primary-button"  >
            <img width="50" height="50" src="https://img.icons8.com/?size=100&id=jCIaYGMYhY9d&format=png&color=000000" alt="discord-logo"/>
              Add to Discord
              </Link>
            </button>
            <button className="secondary-button">
              View Documentation
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500K+</span>
              <span className="stat-label">Active Users</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Servers</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Matches Made</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="preview-window">
          <div className="window-header">
            <div className="window-buttons">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="window-title">LoveBot - Discord</div>
          </div>
          <div className="preview-content">
            <img src="https://res.cloudinary.com/dwhkjrluc/image/upload/v1736759597/videooo_yxbqmy.gif" alt="Bot Preview" className="preview-image" />
          </div>
        </div>
        <div className="floating-cards">
          <div className="float-card card-1">
            <img src="https://img.icons8.com/?size=100&id=23239&format=png&color=000000" alt="User" className="user-avatar" />
            <div className="card-content">
              <span className="card-title">New Match!</span>
              <span className="card-subtitle">Sarah liked your profile</span>
            </div>
          </div>
          <div className="float-card card-2">
            <div className="card-content">
              <span className="card-title">94% Match</span>
              <span className="card-subtitle">Based on your interests</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;