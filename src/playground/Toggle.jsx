import React, { useState } from 'react';

export default function Toggle() {
  let [show, setShow] = useState(false);

  return (
    <div>
      <h1>Visibility toggle</h1>
      <div>
        <button onClick={() => setShow(!show)}>
          {show ? 'Hide Details' : 'Show Details'}
        </button>
        {show && <p>This text is visible only when I say so</p>}
      </div>
    </div>
  );
}
