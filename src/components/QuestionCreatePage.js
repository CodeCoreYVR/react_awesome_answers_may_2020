import React, { Component } from 'react'
import NewQuestionForm from './NewQuestionForm';

class QuestionCreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      created: false
    }

    this.createQuestion = this.createQuestion.bind(this)
  }

  // this method updates the state of QuestionCreatePage using this.setState
  createQuestion(params) {
    console.log(params);
    // calling setState will update the state of the component. 
    this.setState((currentState) => {
      // the callback function must return a object of the new state which will be combined with the existing state. If there are conflicting keys the new state will overwrite the old state
      return {
        created: true
      }
    })
  }

  render() {
    return(
      <main id='question-create-page'>
        <div>{this.state.created.toString()}</div>
        {/* we pass this.createQuestion to a child component because we want event's on a child component to trigger an update to state */}
        <NewQuestionForm handleSubmit={this.createQuestion}/>
        {/* Remember! when you pass down a method as a function through props the `this` value within the, now, function will be the global scope! So we need to make sure we bind the method to force the `this` value to be QuestionCreatePage */}
      </main>
    )
  }
}

export default QuestionCreatePage