import React ,{ Component} from 'react';
import './template.css';
class Template extends Component {

    render() {
        return(
            <div className = "temp">
                <div className ="side-panel">
                
                </div>
                <div className = "float-btn">
                   <p>PERSONAL INFO</p>
                </div>
                {/* <div className = "header"> 
                    <h2>GOSTEM</h2>
                </div> */}
                <div className = "input-field">
                   
                   <input className  ="input" placeholder = "Child's Name"></input>
                   <input className  ="input"></input>
                </div>
            </div>
        );
    }
}

export default Template;