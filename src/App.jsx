// src/App.jsx
import {showStarships} from './services/starshipService';
import { useState, useEffect } from 'react';
import './App.css'
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import './App.css';

const App = () => {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const data = await showStarships();
      setStarships(data.results || []);
      setFilteredStarships(data);
    };
    fetchStarships();
  }, []);

  const handleSearch = (query) => {
    const filtered = starships.filter((s) =>
      s.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStarships(filtered);
  };

  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch onSearch={handleSearch} />
    
        <StarshipList starships={filteredStarships} />
      
    </main>
  );
};

export default App;