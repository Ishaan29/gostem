import React, { Component } from 'react';
import Content from './content';
import './sideBar.css';
import SignInPage from './SignIn';
import { auth } from '../firebase';
import SignIn from './SignIn';
import {firebase} from '../firebase';
class SideBar extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            authUser: null
        }
    }
    componentDidMount (){
        firebase.auth.onAuthStateChanged(authUser => {
          authUser
          ? this.setState(() => ({ authUser}))
          : this.setState(() => ({authUser: null}));
        });
      }
    render() {
        if(authUser){
        return(
            <div className = "grid">
                <div className = "navbar">
                    <div className = "search-bar" > 
                        <input placeholder = "Find Responces Using User Name"></input>
                        <button>Search</button>
                        
                    </div>
                </div>
                <div className = "sidebar">
                <button className = "big-btn" onClick={auth.doSignOut}> Logout</button>
                <button className = "nav-btn">Inbox</button>
                <button className = "nav-btn">New User</button>
                <button className = "nav-btn">New</button>
                </div>
                <Content />
                
            </div>
        );}
        return(
            <div>
                <SignIn/>
            </div>
        );
    }
}

export default SideBar;