import React, { Component } from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import SideBarComponent from './siedBar';
import * as routes from '../constants/routes';
import {firebase} from '../firebase';
import Page1 from './Page1';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authUser: null,
    };
  }
  componentDidMount (){
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
      ? this.setState(() => ({ authUser}))
      : this.setState(() => ({authUser: null}));
    });
  }
  render() {
    return(
      <MuiThemeProvider>
        <Router>
          <div>
            {/* <Navigation authUser={this.state.authUser} /> */}
            {/* <hr/> */}
            <Route
          exact path={routes.LANDING}
          component={() => <Page1 />}
        />
        {/* <Route
          exact path={routes.SIGN_UP}
          component={() => <SignUpPage />}
        /> */}
        <Route
          exact path={routes.SIGN_IN}
          component={() => <SignInPage />}
        />
        {/* <Route
          exact path={routes.PASSWORD_FORGET}
          component={() => <PasswordForgetPage />}
        /> */}
        <Route
          exact path={routes.HOME}
          component={() => <SideBarComponent />}
        />
        <Route
          exact path={routes.ACCOUNT}
          component={() => < SideBarComponent/>}
        />
        
      
        </div>


       </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
