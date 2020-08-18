import React from 'react'
import AnswerDetails from './AnswerDetails';

function AnswerDetailsList(props) {
  return(
    <>
      { props.answers.map( (answer, i) => {
        return <AnswerDetails key={i} body={answer.body} author={answer.author} createdAt={answer.createdAt}/>
      }) }
    </>
  )
}

export default AnswerDetailsList;
