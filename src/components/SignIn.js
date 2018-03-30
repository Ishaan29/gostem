import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Card} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './SignIn.css';

const paper1 = {
  backgroundColor: '#fff8e0',
  // height: 350,
  // width: 300,
  marginBottom: 80,
  padding: 36,
  // marginLeft: 'auto',
  // marginRight: 'auto',
  // alignContent: 'center',
  // textAlign: 'center',
  // paddingLeft: 40,
  // display: 'inline-block',
};
const styles = {
  container: {
    // width: 500 ,
    maxWidth: 800,
    marginTop: 67,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 7
  },
  // margin: 12,
};

const styleCard = {
  // height: 500,
  // width:500,
};

const SignInPage = ({ history }) =>
  <div>
    <h1 style={styles.container}>SignIn</h1>
    <SignInForm history={history} />
    <SignUpLink />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;
    
    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div style={styles.container}
      >
      <MuiThemeProvider>
        <div>
        <Paper style={paper1} zDepth={5}>  
        <form onSubmit={this.onSubmit}>
          <TextField
            hintText="Email Address"
            floatingLabelText="Email Address"
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="text"
            // placeholder="Email Address"
          />
          <br/>
          <TextField
            hintText="Password"
            floatingLabelText="Password"
            value={password}
            onChange={event => this.setState(byPropKey('password', event.target.value))}
            type="password"
            // placeholder="Password"
          />
          <br/>
          <RaisedButton disabled={isInvalid} type="submit" label="SignIn" secondary={true}/>
         
          { error && <p>{error.message}</p> }
          </form>
        
        
        </Paper>  
          
        </div>
       
      </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};