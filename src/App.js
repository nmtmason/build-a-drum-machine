import React, { Component } from 'react';

import { Board } from './components/Board';

class App extends Component {
  render() {
    return (
      <Board
        tempo={90}
        playing={false}
        resolution={16}
        bars={1}
        samples={{
          boom: [0, 4, 6, 9, 12, 14],
          clap: [],
          kick: [],
          ride: [],
          openhat: [],
          snare: [],
          tink: [],
          tom: []
        }}
      />
    );
  }
}

export default App;
