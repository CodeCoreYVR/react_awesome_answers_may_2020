import React from 'react'

function AnswerDetails(props) {
  const createdAt = new Date(props.created_at)
  return (
    <div style={styles.container} className='ui segment'>
      <p>
        {props.body}<br/>
      <small>by {props.author.full_name}</small>
      </p>
      <p>
      <small>Answered at {createdAt.toString()}</small>
      </p>
    </div>
  )
}

const styles = {
  container: {
    color: 'red'
  },
  heading: {
    color: 'blue'
  }
}
export default AnswerDetails