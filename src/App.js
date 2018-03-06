import React, { Component } from 'react';
import Joke from './Joke/Joke';

class App extends Component {
  state = {
    jokes: [
      { id: '1', type: 'police man', title: 'The police man and the table' },
      { id: '2', type: 'blondes', title: 'Difference between a blonde and a brunette' },
      { id: '1', type: 'students', title: 'The student in the middle of the night' }

    ]
  }
  
  render() {
    return (
      <div className="App">
        <Joke 
          type={this.state.jokes[0].type} 
          title={this.state.jokes[0].title} />
        <Joke 
          type={this.state.jokes[1].type} 
          title={this.state.jokes[1].title} />
        <Joke 
          type={this.state.jokes[2].type} 
          title={this.state.jokes[2].title} />
      </div>
    );
  }
}

export default App;
