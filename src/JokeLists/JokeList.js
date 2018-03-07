import React from 'react';

const jokeList = (props) => {
  return (
    <div>
      <p>Hello Joke List: {props.type}</p>
      <input type="text" onChange={props.changed}/>
    </div>
  );
};

export default jokeList;