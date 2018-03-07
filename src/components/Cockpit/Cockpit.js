import React from 'react';

const cockpit = (props) => {
  const buttonStyle = {
      textAlign: 'center',
      boxShadow: '0 2px 3px #ccc',
      margin: '0 auto',
      color: 'red',
      border: '1px solid #aaa',
      padding: '8px',
      cursor: 'pointer'
    };

  return (
     <div>
       <button 
          style={buttonStyle}
          onClick={props.clicked}>Show Jokes
        </button>
     </div>
  ); 
}
 
export default cockpit;