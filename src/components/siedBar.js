import React, { Component } from 'react';
import './sideBar.css';

class SideBarComponent extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return(
            <div className = "sd-nav">
                <div className = "sd-nav-cont">
                <span>UserName</span>
                <br/>
                <a href="#"> Responce </a>
                <br/>
                <button>Logout</button>
                </div>
            </div>
        );
    }
}

export default SideBarComponent; 