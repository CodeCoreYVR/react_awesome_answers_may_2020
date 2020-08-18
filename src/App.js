import React from 'react'; // If you're using JSX you must import React at the top of the file
import QuestionPage from './components/QuestionPage';

import questionData from './data/oneQuestionData';
export function App() {
  return (
    <>
     {/* <QuestionPage question={questionData}/> */}
     <QuestionPage />
    </>
  );
}

export default App;
