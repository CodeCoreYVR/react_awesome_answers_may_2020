import React from 'react'; // If you're using JSX you must import React at the top of the file
import QuestionPage from './components/QuestionPage';
import QuestionIndexPage from './components/QuestionIndexPage'

import questionData from './data/oneQuestionData';
export function App() {
  return (
    <>
     {/* <QuestionPage question={questionData}/> */}
     <QuestionPage />
     <QuestionIndexPage />
    </>
  );
}

export default App;
