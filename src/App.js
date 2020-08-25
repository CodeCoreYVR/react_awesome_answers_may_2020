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
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    Session.getCurrentUser()
      .then(user => {
        this.setState((state) => {
          return {
            user: user
          }
        })
      });
  }

  signIn(params) {
    Session.create(params)
      .then((res) => console.log(res));
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar user={this.state.user}/>
        <Switch>
          {/* When creating routes: make sure the higher specificity routes sit above lower specificity routes */}
          <Route path='/questions' exact={true} component={QuestionIndexPage}/>
          <Route path='/questions/new' component={QuestionCreatePage} />
          <Route path='/questions/:id' component={QuestionPage} />
          {/* <Route path='/sign_in' component={SignInPage} /> */}
          <Route path='/sign_in'
          // the render prop is another way to have a route render out a component. Use this if you need to pass props into the components you're rendering within <Route>
            render={
            // routeProps is the object with `match`, `history`, and `location`
            (routeProps) => {
              return <SignInPage signIn={this.signIn}/>
            }
          }/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
