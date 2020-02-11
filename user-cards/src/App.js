import React from 'react';
import logo from './logo.svg';
import './App.css';

import UserCards from './components/UserCards';

class App extends React.Component {
  constructor() {
    super();

  }

  render() {
  return (
    <div className="App">
      <h2>GitHub User Cards</h2>
      <UserCards />
    </div>
  );
  }
}

export default App;
