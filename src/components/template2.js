import React ,{ Component} from 'react';
import './template.css';

class Template2 extends Component {

    render() {
        return(
            <div>
                <div className ="side-panel">

                </div>
                <div className = "float-btn">
                   <p>PERSONAL INFO</p>
                </div>
                <div className ="temp">

                <div className = "header">
                    <h2>GOSTEM</h2>
                </div>

                <div className = "input-field">
                <lable>
                NAME OF CHILD:
                   <input className  ="input" typr="text" placeholder = "Name in caps"></input>
                </lable>
                <lable>
                DOB:
                <input className  ="input" type="date" placeholder = "Date of birth"></input>
                </lable>
                <lable>
                AGE:
                   <input className  ="input" type="number" placeholder = "Child's age"></input>
                </lable>
                <lable>
                ADDRESS:
                   <input className  ="input" type="text" placeholder = "Full address"></input>
                </lable>
                <lable>
                CITY:
                   <input className  ="input" type="text" placeholder = "City name"></input>
                </lable>
                <lable>
                PRIMARY CELL NUMBER:
                   <input className  ="input" type="number" placeholder = "Child's Name"></input>
                </lable>
                <lable>
                EMAIL:
                   <input className  ="input" type="email" placeholder = "Parnts's email address"></input>
                </lable>
                <lable>
                CHILD LIVES WITH:
                <input className  ="input" placeholder = "Child's Name"></input>

                </lable>
                <lable>
                HOW DID YOU KNOW ABOUT STEM ACADEMY:
                   <input className  ="input" type="text" placeholder = "HOW??"></input>
                </lable>
                <lable>
                REGISTRATION DATE:
                   <input className  ="input" type="date" placeholder = "Date"></input>
                </lable>
                <lable>
                STATE DATE:
                   <input className  ="input" type="date" placeholder = "State date"></input>
                </lable>
                <p className="pstyling">This is to certify that voluntarily furnish medical information of the above mentioned student
                to STEM ACADEMY for young kids. I hereby request that in the event that emergency medical care for my child.
                I further give my concent for an emergency facility or physician to administer necessary medical treatment to my child
                if i am unable to reach or the situation require immidiate action. I understand that i am responsible for
                paying all the medical bills.
                </p>
                <lable>
                INITIAL:
                   <input className  ="input" type="text" placeholder = "Initial"></input>
                </lable>
                <lable>
                PRIMARY CARE PHYSICIAN:
                   <input className  ="input" type="text" placeholder = "Physician's Name"></input>
                </lable>
                <lable>
                PHONE NUMBER:
                   <input className  ="input" type="number" placeholder = "Mobile number"></input>
                </lable>
                <lable>
                MOTHERS NAME:
                   <input className  ="input" type="text" placeholder = "Full Name"></input>
                </lable>
                <lable>
                MOBILE:
                   <input className  ="input" type="number" placeholder = "Mobile number"></input>
                </lable>
                <lable>
                EMAIL:
                   <input className  ="input" type="email" placeholder = "Email address"></input>
                </lable>
                <lable>
                FATHERS NAME:
                   <input className  ="input" type="text" placeholder = "Full name"></input>
                   </lable>
                   <lable>
                   MOBILE:
                   <input className  ="input" type="number" placeholder = "Mobile number"></input>
                   </lable>
                   <lable>
                   EMAIL:
                   <input className  ="input" type="email" placeholder = "email"></input>
                   </lable>
                   <input className  ="input" placeholder = "Child's Name"></input>
                   <input className  ="input" placeholder = "Child's Name"></input>




                   <input className  ="input"></input>
                </div>

                </div>
            </div>
        );
    }
}

export default Template2;
