import React from 'react';

export default function Options(props) {
  return (
    <div>
      <p>Options listed here</p>
      
      <ul>
        {props.options.map((option) => (
          <li>{option}</li>
        ))}
      </ul>
    </div>
  );
}
