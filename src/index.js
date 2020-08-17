// ES Modules... basically the modern `require()` function
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// mock-data

const question = {
  title: 'What is your favourite colour?',
  body: 'Red, green, blue, orange, yellow. ',
  createdAt: new Date(),
  viewCount: 10,
  author: {
    firstName:'brandon',
    lastName: 'lam'
  }
}
// if you want to use javascript within JSX you need to write it within the curly braces {}

function add(a, b) {
  return a + b;
}

function App() {
  return (
    <>
      <QuestionDetails
        question={question}></QuestionDetails>
      <AnswerDetails body='red' author={{firstName: 'emma', lastName: 'stone'}} createdAt={new Date()}/>
    </>
  )
}

function QuestionDetails(props) {
  console.log(props);
  return (
    <div>
      <h1> Hello from react</h1>
      <h2>{props.question.title}</h2>
      <p>
        {props.question.body}<br />
        <small>{props.question.author.firstName} {props.question.author.lastName}</small>
      </p>
      <p>
      <small>Seen {props.question.viewCount} times - Created at {props.question.createdAt.toString()}</small>
      </p>
    </div>
  )
}

function AnswerDetails(props) {
  return (
    <div className='ui segment'>
      <div className='ui header'>Answer Details</div>
      <p>
        {props.body}<br/>
      <small>by {props.author.firstName} {props.author.lastName}</small>
      </p>
      <p>
      <small>Answered at {props.createdAt.toString()}</small>
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
