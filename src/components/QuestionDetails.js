import React from 'react';

export default function QuestionDetails(props) {
  return (
    <div>
      <h1> Hello from react</h1>
      <h2>{props.question.title}</h2>
      <p>
        {props.question.body}<br />
        <small>{props.question.author.firstName} {props.question.author.lastName}</small>
      </p>
      <p>
      <small>Seen {props.question.viewCount} times - Created at {props.question.createdAt.toString()}</small>
      </p>
    </div>
  )
}