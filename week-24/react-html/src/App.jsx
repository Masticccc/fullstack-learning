import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AdvancedTasks from './components/AdvancedTasks.jsx';
import AnimeDropdown from './components/AnimeDropdown.jsx';
import InputBox from './components/InputBox.jsx';

function App() {
  const items = [
    { content: 'Go for a walk', completed: false },
    { content: 'Have a good 1hour nap', completed: true },
    { content: 'Game whole night', completed: true },
  ];
  const [animeRequestUrl, setAnimeRequestUrl] = useState('');
  const onTopAnimeClick = () => {
    setAnimeRequestUrl('https://api.jikan.moe/v4/top/anime');
  };
  const onSportAnimeClick = () => {
    setAnimeRequestUrl('https://api.jikan.moe/v4/anime?genres=30&page=1');
  };

  return (
    <div className="container">
      <Header abc="123 ahioasdioajioio" item={100}>
        <div>
          <h2>Just another header</h2>
          <h4>ajsdiojasoidjio</h4>
          <h6>sjaiodjioajsiodjiosd</h6>
        </div>
      </Header>
      <Header>
        <div>abc</div>
      </Header>
      <Header>
        <Tasks>
          <ul>
            <li>Had a good diet meal</li>
            <li>Completed today coding class</li>
          </ul>
        </Tasks>
      </Header>
      <div>
        <Tasks>
          <ul>
            <li>Had a good diet meal</li>
            <li>Completed today coding class</li>
          </ul>
        </Tasks>
      </div>
      <div>
        <AdvancedTasks items={items} />
      </div>
      <div>
        <AdvancedTasks items={[]} />
      </div>
      <div>
        <div>
          <button onClick={onTopAnimeClick}>Load top anime</button>
          <button onClick={onSportAnimeClick}>Load sport anime</button>
        </div>
        <AnimeDropdown requestUrl={animeRequestUrl} />
      </div>
      <div>
        <InputBox />
      </div>
    </div>
  );
}

export default App;
