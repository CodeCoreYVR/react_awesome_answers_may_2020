import React from 'react'

function AnswerDetails(props) {
  return (
    <div style={styles.container} className='ui segment'>
      <div className='ui header' style={styles.heading}>Answer Details</div>
      <p>
        {props.body}<br/>
      <small>by {props.author.firstName} {props.author.lastName}</small>
      </p>
      <p>
      <small>Answered at {props.createdAt.toString()}</small>
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