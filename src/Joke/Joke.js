import React from 'react';
import classes from './Joke.css';

const joke = (props) => {
  return (
    <div className={classes.Joke}>
      <h3>Joke type: {props.type}</h3>
      <h3>Joke title: {props.title}</h3>
    </div>
  );
};

export default joke;