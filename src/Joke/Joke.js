import React from 'react';

const joke = (props) => {
  return (
    <div>
      <h3>Joke type: {props.type}</h3>
      <h3>Joke title: {props.title}</h3>
    </div>
  );
};

export default joke;