import React from 'react';
import logo from './logo.svg';
import './App.css';
import { sum } from './mathFunctions';

export const helloWorld = () => "hello world";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Learn React on this page!
        </p>
        <p>
          did you know that two plus two is equal to {sum(2,2)}?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="learnReact"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
