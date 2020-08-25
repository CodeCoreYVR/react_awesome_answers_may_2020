import React from 'react';

export default function NewQuestionForm({ handleSubmit, title, body, updateQuestionParams}) {

  function handleUpdate(e) {
    const input = e.target;
    // console.log(input.value);
    // console.log('-------')
    // console.log(input.name);
    updateQuestionParams(
      {[input.name]: input.value}
    )
  }

  return(
    <form onSubmit={(event) => { 
      event.preventDefault(); // prevent default behaviour of form submission (just like vanilla javascript)
      handleSubmit();
    }}>
      <label htmlFor='title'>title</label>
      <p>{20 - title.length} Characters Left</p>
      <input type='text' name='title' id='title' value={title} onInput={handleUpdate} disabled={title.length === 20}/>
      <label htmlFor='body'>body</label>
      <input type='text' name='body' id='body' value={body} onInput={handleUpdate}/>
      <input type='submit' value='Create Question'/>
    </form>
  )
}