import React, { useState } from 'react';

export default function AddOption(props) {
  const [option, setOption] = useState('');

  return (
    <form onSubmit={props.handleAddOption}>
      <input
        type="text"
        value={option}
        onChange={(e) => setOption(e.target.value)}
      />
      <br />
      <button type="submit">Add option</button>
    </form>
  );
}
