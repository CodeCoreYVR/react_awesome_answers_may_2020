import React, { Component } from 'react'
import NewQuestionForm from './NewQuestionForm';
import { Question } from '../requests';

class QuestionCreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      created: false,
      errors: {}
    }

    this.createQuestion = this.createQuestion.bind(this)
  }

  // this method updates the state of QuestionCreatePage using this.setState
  createQuestion(params) {
    console.log(params);
    Question.create(params)
      .then(res => {
        if(res.id) {
          this.props.history.push(`/questions/${res.id}`)
        }
        if (res.errors) {
          this.setState(() => {
            return {
              errors: res.errors
            }
          })
        }
      });
  }

  render() {
    return(
      <main id='question-create-page'>
        {
          Object.keys(this.state.errors).map(key => {
            return(
            <div>{key} {this.state.errors[key].join(', ')}</div>
            )
          })
        }
        {/* we pass this.createQuestion to a child component because we want event's on a child component to trigger an update to state */}
        <NewQuestionForm handleSubmit={this.createQuestion}/>
        {/* Remember! when you pass down a method as a function through props the `this` value within the, now, function will be the global scope! So we need to make sure we bind the method to force the `this` value to be QuestionCreatePage */}
      </main>
    )
  }
}

export default QuestionCreatePage