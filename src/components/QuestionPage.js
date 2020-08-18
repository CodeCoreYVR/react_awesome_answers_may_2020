import React from 'react';
import QuestionDetails from './QuestionDetails';
import AnswerDetailsList from './AnswerDetailsList';

import questionData from '../data/oneQuestionData';

export default function QuestionPage(props) {
  return(
    <main id='question-show-page'>
      <QuestionDetails question={questionData}></QuestionDetails>
      <h2>Answer Details</h2>
      <AnswerDetailsList answers={questionData.answers} />
    </main>
  )
}

// export default QuestionPage