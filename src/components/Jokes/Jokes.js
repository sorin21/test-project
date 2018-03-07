import React from 'react';
import Joke from "./Joke/Joke";

const jokes = (props) => {
  return (
    props.jokes.map((joke, index) => {
      return <Joke 
        key={joke.id} 
        delete={event => props.delete(index)} 
        changed={event => props.changed(event, joke.id)} 
        type={joke.type} 
        title={joke.title} />;
    })
  )
}

export default jokes;

