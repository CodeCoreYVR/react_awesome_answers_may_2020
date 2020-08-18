import React, { Component } from 'react';
import QuestionDetails from './QuestionDetails';
import AnswerDetailsList from './AnswerDetailsList';

import mockQuestionData from '../data/oneQuestionData';

class QuestionPage extends Component {
  constructor(props) {
    super(props); // in all React Class components you must always call the `super(props)` within the constructor
    this.state = {
      question: mockQuestionData
    }
  }

  render() {
    return(
      <main id='question-show-page'>
        <QuestionDetails question={this.state.question}></QuestionDetails>
        <h2>Answer Details</h2>
        <AnswerDetailsList answers={this.state.question.answers} />
      </main>
    )
  }
}

export default QuestionPage