import React, { Component } from 'react';
import './App.css';

import Joke from './Joke/Joke';
import JokeList from './JokeLists/JokeList';

class App extends Component {
  state = {
    jokes: [
      { id: '1', type: 'police man', title: 'The police man and the table' },
      { id: '2', type: 'blondes', title: 'Difference between a blonde and a brunette' },
      { id: '3', type: 'students', title: 'The student in the middle of the night' }
    ],
    message: 'Hello React',
    showJokes: false
  }
  chageJokeInputHandler = (event, id) => {
    const jokeIndex = this.state.jokes.findIndex(joke => joke.id === id);

    // 1. get a copy of a joke object
    const joke = { ...this.state.jokes[jokeIndex]};
    // 2. get the actual input value and set it to the title
    joke.title = event.target.value;
    // 3. get a copy of jokes with the updated title
    const jokes = [...this.state.jokes];
    // 4. update a specific joke that is changed
    jokes[jokeIndex] = joke;
    // 5. update the jokes state
    this.setState({jokes: jokes});
  }



  toggleJokeHandler = () => {
    this.setState({showJokes: !this.state.showJokes})
  }

  deleteJokeHandler = (jokeIndex) => {
    const jokes = this.state.jokes.slice();
    // const jokes = [...this.state.jokes];
    jokes.splice(jokeIndex, 1);
    this.setState({jokes: jokes});
  }

  changeJokeOneInput = (event) => {
    // const message = this.state.message;
    // message.message = event.target.value;
    // jokes.title = event.target.title
    console.log('clicked change');
    this.setState({
      message:  event.target.value});
  }

  jokeListHandler = (event, id) => {
    // 0. findIndex
    const jokeIndex = this.state.jokes.findIndex((joke) => joke.id === id)
    // 1. get a copy of a joke
    const joke = {...this.state.jokes[jokeIndex]};
    // 2. get the joke type
    joke.type = event.target.value;
    // 3. get a copy of jokes with the updated type
    const jokes = [...this.state.jokes]
    // 4. update a specific joke that is changed
    jokes[jokeIndex] = joke;
    // 5. set state jokes
    this.setState({jokes: jokes})

  }

  render() {
    const buttonStyle = {
      textAlign: 'center',
      boxShadow: '0 2px 3px #ccc',
      margin: '0 auto',
      color: 'red',
      border: '1px solid #aaa',
      padding: '8px',
      cursor: 'pointer'
    };

    var jokes = null;
    if(this.state.showJokes) {
      jokes = (
        <div>
          {
            this.state.jokes.map((joke, index) => {
              return <Joke
                key={joke.id}
                delete={(event) => this.deleteJokeHandler(index)}
                changed={(event) => this.chageJokeInputHandler(event, joke.id)}
                type={joke.type}
                title={joke.title} />
            })
          }
        </div>
      );
    }
    return (
      <div className="App">
        <button 
          style={buttonStyle}
          onClick={this.toggleJokeHandler}>Show Jokes
        </button>
        {jokes}

        {/* <JokeOneInput 
          changed={this.changeJokeOneInput} 
          type={this.state.message} /> */}

        {this.state.jokes.map((joke, index) => {
          return <JokeList 
            key={joke.id}
            type={joke.type}
            changed={(event) => this.jokeListHandler(event, joke.id)}
            />
        })}
      </div>
    );
  }
}

export default App;
