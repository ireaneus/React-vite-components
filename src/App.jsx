import React, { useState } from 'react';

function Header(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}

function Action() {
  function handlePick() {
    alert('clicked');
  }
  return (
    <div>
      <button onClick={handlePick}> What should I do?</button>
    </div>
  );
}

function Options(props) {
  function handleRemoveAll() {
    alert('Removed All');
  }

  return (
    <div>
      <p>Options listed here</p>
      <button onClick={handleRemoveAll}>Remove all options</button>
      <ul>
        {props.options.map((option) => (
          <Option key={option} optionText={option} />
        ))}
      </ul>
    </div>
  );
}

function Option(props) {
  return (
    <div>
      <li>{props.optionText}</li>
    </div>
  );
}

function AddOption() {
  const [option, setOption] = useState('');

  function handleAddOption(event) {
    event.preventDefault();
    alert(`The option you entered was ${option.trim()}`);
  }

  return (
    <form onSubmit={handleAddOption}>
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

function App() {
  const title = 'Big Wave Web';
  const subtitle = 'Catch the next Wave for your Website!';
  const options = [
    'Brillant Web Design',
    'Hosted pages on the cloud',
    'Includes Domain Name Registration',
  ];

  return (
    <div>
      <Header title={title} subtitle={subtitle} />
      <Action />
      <Options options={options} />
      <AddOption />
    </div>
  );
}

export default App;
