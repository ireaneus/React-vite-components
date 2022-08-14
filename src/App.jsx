import React from 'react';

function Header() {
  return (
    <div>
      <h1>Big Wave Web</h1>
      <h2>Design, Hosting, and DNS registration</h2>
    </div>
  );
}

function Action() {
  return (
    <div>
      <button>What should I do?</button>
    </div>
  );
}

function Option() {
  return (
    <div>
      <p>Options listed here</p>
      <ul>
        <li>Option 1</li>
        <li>Option 2</li>
      </ul>
    </div>
  );
}

function AddOption() {
  return (
    <div>
      <p>Adding options here</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Action />
      <Option />
      <AddOption />
    </div>
  );
}

export default App;
