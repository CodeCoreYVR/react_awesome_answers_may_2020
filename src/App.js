import React from 'react'; // If you're using JSX you must import React at the top of the file
import QuestionDetails from './components/QuestionDetails';
import AnswerDetails from './components/AnswerDetails';

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

const answersList = [
  {
    body: 'blue',
    author: {
      firstName: 'jon',
      lastName: 'snow'
    },
    createdAt: new Date()
  },
  {
    body: 'red',
    author: {
      firstName: 'jon',
      lastName: 'snow'
    },
    createdAt: new Date()
  },
  {
    body: 'green',
    author: {
      firstName: 'jon',
      lastName: 'snow'
    },
    createdAt: new Date()
  }
]
export function App() {
  return (
    <>
      <QuestionDetails
        question={question}></QuestionDetails>
      { answersList.map( (answer, i) => {
        return <AnswerDetails key={i} body={answer.body} author={answer.author} createdAt={answer.createdAt}/>
      }) }
    </>
  );
}

export default App;
