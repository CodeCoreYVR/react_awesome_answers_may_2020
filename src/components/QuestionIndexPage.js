import React, { Component } from 'react'
import { Question } from '../requests';
import { Link } from 'react-router-dom';
import { Heading, Main, Box, List, Button } from 'grommet';

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      hello: 'world'
    }
  }

  componentDidMount() {
    Question.index()
      .then(questions => {
        this.setState((state) => {
          return {
            questions: questions
          }
        })
      });
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
      <Main id='question-index-page'>
        <Heading>Question Index</Heading>
        <Box>
          <List
            as="ul"
            primaryKey="id"
            secondaryKey="title"
            data={this.state.questions}
            children={(item, index) => {
              return(
                <Box key={item.id} direction="row" gap="medium">
                  <Link to={`/questions/${item.id}`}>{item.title}</Link>
                  <Button label='delete' onClick={ (event) => this.handleDeleteButtonClick(event, item.id) } />
                </Box>
              )
            }}
          />
        </Box>
      </Main>
    )
  }
}

export default QuestionIndexPage;