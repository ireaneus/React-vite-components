import React from 'react';

function Header(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
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

function Options(props) {
  return (
    <div>
      <p>Options listed here</p>
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
  return <div>Adding options here</div>;
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
