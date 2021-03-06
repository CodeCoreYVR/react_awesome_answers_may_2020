import React, { Component } from 'react'; // If you're using JSX you must import React at the top of the file
import QuestionPage from './components/QuestionPage';
import QuestionIndexPage from './components/QuestionIndexPage'
import QuestionCreatePage from './components/QuestionCreatePage';
import HooksClock from './components/HooksClock';
import WorldTimers from './components/WorldTimers';
import { Session } from './requests';
import {
  BrowserRouter,
  Route,
  Switch,

} from 'react-router-dom';
import Navbar from './components/Navbar';
import SignInPage from './components/SignInPage';
import AuthRoute from './components/AuthRoute';
import { Grommet, Box } from 'grommet';
import theme_one from './theme_one.json';
import NewUserPage from './components/NewUserPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
    
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  componentDidMount() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    Session.getCurrentUser()
      .then(user => {
        this.setState((state) => {
          return {
            user: user
          }
        })
      });
  }

  signIn(params, history) {
    Session.create(params)
      .then((res) => {
        history.push('/questions')
        this.getCurrentUser();
      });
  }

  render() {
    return (
      <Grommet theme={theme_one}>
        <BrowserRouter>
          <Navbar user={this.state.user}/>
          <Box pad="medium">
            <Switch>
              <Route path='/world_timers' component={WorldTimers} />
              <Route path='/clock' component={HooksClock} />
              {/* When creating routes: make sure the higher specificity routes sit above lower specificity routes */}
              <Route path='/questions' exact={true} component={QuestionIndexPage}/>
              {/* <Route path='/questions/new' component={QuestionCreatePage} /> */}
              <AuthRoute 
                path='/questions/new'
                isAuthenticated={!!this.state.user}
                component={QuestionCreatePage}
              />
              <Route path='/questions/:id' component={QuestionPage} />
              <Route path='/users/new' component={NewUserPage} />
              {/* <Route path='/sign_in' component={SignInPage} /> */}
              <Route path='/sign_in'
              // the render prop is another way to have a route render out a component. Use this if you need to pass props into the components you're rendering within <Route>
                render={
                // routeProps is the object with `match`, `history`, and `location`
                (routeProps) => {
                  console.log(routeProps);
                  return <SignInPage {...routeProps} signIn={this.signIn}/>
                }
              }/>
            </Switch>
          </Box>
        </BrowserRouter>
      </Grommet>
    );
  }
}

export default App;
