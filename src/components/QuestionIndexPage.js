import React, { Component } from 'react'

import mockQuestionsData from '../data/questionsData';

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: mockQuestionsData,
      hello: 'world'
    }
  }

  // the id within this method is the id of the question that was clicked
  handleDeleteButtonClick(event, id) {
    this.setState((currentState, currentProps) => {
      // IMPORTANT: In React never mutate any objects (this includes arrays)
      // If you need to work on a object make a copy... and then work on the copy
      const questionsCopy = [...currentState.questions]; // spread syntax to copy an array (SHALLOW COPY)
      // const questionsCopy = [].concat(currentState.questions); // concat method to copy an array (SHALLOW COPY)
      // const questionsCopy = JSON.parse(JSON.stringify(currentState.questions)); // DEEP COPY with JSON.stringify But this cannot copy values like functions or `undefined` or `null`
      const updatedArray = questionsCopy.filter((q) => {
        return q.id !== id
      })
      return {
        questions: updatedArray
      }
    })
  }

  render() {
    return(
      <main id='question-index-page'>
        <h1>Question Index</h1>
        <ul>
          {this.state.questions.map((question) => {
            return <li key={question.id}>
              <a href='#'>{question.title}</a>
              <button onClick={ (event) => this.handleDeleteButtonClick(event, question.id) }>
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