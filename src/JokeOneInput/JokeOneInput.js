import React from 'react';

const joke = (props) => {
  return (
    <div >
      
      <h3>Joke type: {props.type}</h3>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default joke;