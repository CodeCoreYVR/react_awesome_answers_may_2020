// ES Modules... basically the modern `require()` function
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// if you want to use javascript within JSX you need to write it within the curly braces {}

function add(a, b) {
  return a + b;
}

function App() {
  return (
    <div>
      <QuestionDetails/>
      <AnswerDetails/>
    </div>
  )
}

function QuestionDetails() {
  return (
    <div>
      <h1> Hello from react </h1>
      <h2>What is your favourite colour?</h2>
      <p>
        Red, green, blue, orange, yellow. <br />
        <small>By Michael Owen</small>
      </p>
      <p>
        <small>Seen 10 times - Created {add(5, 1000)} days ago</small>
      </p>
    </div>
  )
}

function AnswerDetails() {
  return (
    <div className='ui segment'>
      <div className='ui header'>Answer Details</div>
      <p>
        Red. <br/>
        <small>by Eden Hazard</small>
      </p>
      <p>
        <small>Answered 2 days ago</small>
      </p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
