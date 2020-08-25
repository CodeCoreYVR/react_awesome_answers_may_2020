import React, { Component } from 'react'; // If you're using JSX you must import React at the top of the file
import QuestionPage from './components/QuestionPage';
import QuestionIndexPage from './components/QuestionIndexPage'
import QuestionCreatePage from './components/QuestionCreatePage';
import Clock from './components/Clock';
import { Session } from './requests';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Navbar from './components/Navbar';
import SignInPage from './components/SignInPage';

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
      <BrowserRouter>
        <Navbar />
        <Switch>
          {/* When creating routes: make sure the higher specificity routes sit above lower specificity routes */}
          <Route path='/questions' exact={true} component={QuestionIndexPage}/>
          <Route path='/questions/new' component={QuestionCreatePage} />
          <Route path='/questions/:id' component={QuestionPage} />
          <Route path='/sign_in' component={SignInPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
