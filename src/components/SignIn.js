import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
import {Card} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './SignIn.css';


const SignInPage = ({ history }) =>
  <div>
    <h1>SignIn</h1>
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
  clicked: false,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handelClick() {
    this.setState({clicked: true});
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

    
   
    if(this.state.error != null ) {this.state.clicked = true}

    const className = this.state.clicked ? 'error' : 'hidden';
    return (
      // <MuiThemeProvider>
      // <Card  style={styleCard}>  
      //   <form onSubmit={this.onSubmit}>
      //     <TextField
      //       value={email}
      //       onChange={event => this.setState(byPropKey('email', event.target.value))}
      //       type="text"
      //       placeholder="Email Address"
      //     />
      //     <TextField
      //       value={password}
      //       onChange={event => this.setState(byPropKey('password', event.target.value))}
      //       type="password"
      //       placeholder="Password"
      //     />
      //     <br/>
      //     <RaisedButton disabled={isInvalid} type="submit" label="SignIn" secondary={true}  style={style}/>
         
      //     { error && <p>{error.message}</p> }
      //     </form>
        
        
      //   </Card>  
          
         
       
      // </MuiThemeProvider>

      <div className="login">
       
       <div className = {className} > 
        { error && <p>{error.message}</p> }
        </div>
    
        <div className = "input" >
          <input placeholder = "Enter Your Email" value = {email}  type="text" onChange={ event => this.setState(byPropKey("email", event.target.value))}></input><br/>
          <input placeholder = "Enter Your Password" value = {password}  type="password" onChange={ event => this.setState(byPropKey("password", event.target.value))}></input><br />
          <button onClick = {this.onSubmit}> submit</button>
          
        </div>
       
      </div>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};