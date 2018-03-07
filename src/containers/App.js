import React, { Component } from 'react';
import './App.css';
import Jokes from "../components/Jokes/Jokes";
import Cockpit from "../components/Cockpit/Cockpit";

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

    var jokes = null;
    if(this.state.showJokes) {
      jokes = <div>
          <Jokes 
            jokes={this.state.jokes} 
            delete={this.deleteJokeHandler}
            changed={this.chageJokeInputHandler} />
        </div>;
    }
    return (
      <div className="App">
        <Cockpit 
          showJokes={this.state.showJokes}
          clicked={this.toggleJokeHandler} />
        {jokes}
      </div>
    );
  }
}

export default App;
