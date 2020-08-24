import React, { Component } from 'react'; // If you're using JSX you must import React at the top of the file
import QuestionPage from './components/QuestionPage';
import QuestionIndexPage from './components/QuestionIndexPage'
import QuestionCreatePage from './components/QuestionCreatePage';
import Clock from './components/Clock';
import { Session } from './requests';

import questionData from './data/oneQuestionData';
class App extends Component {

  componentDidMount() {
    // Hacky login. Don't do this in Real Life
    Session.create({
      email: 'js@winterfell.gov',
      password: 'supersecret'
    }).then((res) => console.log(res));
  }

  render() {
    return (
      <>
       {/* <QuestionPage question={questionData}/> */}
       <QuestionPage />
       <QuestionIndexPage />
       <QuestionCreatePage />
      </>
    );
  }
}

export default App;
