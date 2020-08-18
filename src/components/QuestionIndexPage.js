import React, { Component } from 'react'

import mockQuestionsData from '../data/questionsData';

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: mockQuestionsData
    }
  }

  render() {
    return(
      <main id='question-index-page'>
        <h1>Question Index</h1>
        <ul>
          {this.state.questions.map((question) => {
            return <li key={question.id}>
              <a href='#'>{question.title}</a>
              <button onClick={(event) => {
                this.setState((currentState) => {
                  return {
                    questions: []
                  }
                })
              }}>
                Delete
              </button>
            </li>
          })}
        </ul>
      </main>
    )
  }
}

export default QuestionIndexPage;