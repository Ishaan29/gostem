import React, { Component } from 'react';
import Content from './content';
import './sideBar.css';

class SideBar extends Component {
    constructor(props){
        super(props);
        
        
    }
    render() {
        return(
            <div className = "grid">
                <div className = "navbar">
                    <div className = "search-bar" > 
                        <input placeholder = "Find Responces Using User Name"></input>
                        <button>Search</button>
                        
                    </div>
                </div>
                <div className = "sidebar">
                <button className = "big-btn"> Logout</button>
                <button className = "nav-btn">Inbox</button>
                <button className = "nav-btn">New User</button>
                <button className = "nav-btn">New</button>
                </div>
                <Content />
                
            </div>
        );
    }
}

export default SideBar;