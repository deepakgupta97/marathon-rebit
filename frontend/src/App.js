import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
        const response = await axios.get(`${backendUrl}/api/teams`);
        setTeams(response.data);
      } catch (err) {
        setError('Failed to fetch teams');
      } finally {
        setLoading(false);
      }
    };
    fetchTeams();
  }, []);

  if (loading) return <div>Loading Mumbai Marathon Teams...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mumbai Marathon 2025 - Team Banners</h1>
        <div className="banner-container">
          {teams.map((item, index) => (
            <div key={index} className="running-banner">
              <marquee direction="left" scrollamount="5">
                🏃‍♂️ Join {item.team} in the Mumbai Marathon! Run for a cause! 🏃‍♀️
              </marquee>
            </div>
          ))}
        </div>
        <p>Teams powered by Backend API (Dynamic at runtime)</p>
      </header>
    </div>
  );
}

export default App;
