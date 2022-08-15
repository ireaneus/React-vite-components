import React from 'react';

export default function Action(props) {
  const handlePick = () => {
    alert('clicked');
  };

  return (
    <div>
      <button onClick={handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
}
