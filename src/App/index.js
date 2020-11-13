import React from 'react';
import SharkTank from '../components/SharkTank';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>SHARK ATTACK</h1>
        <SharkTank />
        <button className="attack btn btn-danger" onClick={console.warn('attack clicked')}>Shark Attack</button>
      </div>
    );
  }
}

export default App;
