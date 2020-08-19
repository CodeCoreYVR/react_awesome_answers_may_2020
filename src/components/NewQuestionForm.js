import React from 'react';

export default function NewQuestionForm(props) {
  const handleSubmit = props.handleSubmit
  return(
    <form onSubmit={(event) => { 
      event.preventDefault(); // prevent default behaviour of form submission (just like vanilla javascript)
      const currentTarget = event.currentTarget; // the event object here is the same as the event object within vanilla javascript event handlers
      const formData = new FormData(currentTarget);
      const params = {
        title: formData.get('title'),
        body: formData.get('body')
      }
      // calling handleSubmit will update the state in the parent component (QuestionCreatePage)
      handleSubmit(params);
    }}>
      <label htmlFor='title'>title</label>
      <input type='text' name='title' id='title'/>
      <label htmlFor='body'>body</label>
      <input type='text' name='body' id='body'/>
      <input type='submit' value='Create Question'/>
    </form>
  )
}