import './App.css';
import {useState} from 'react';

import Card from './components/Card';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src="/samosa.png" onClick={updateCount} />
      </div>

      <div className="container">
          <Card name="Double Stuffed 👯‍♀️" description="2x per click" cost="10 samosas"/>

          <Card name="Party Pack 🎉" description="5x per click" cost="100 samosas"/>

          <Card name="Full Feast 👩🏽‍🍳" description="10x per click" cost="1000 samosas"/>
      </div>
    </div>
  )
}

export default App