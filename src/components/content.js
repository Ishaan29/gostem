import React, { Component } from 'react';
import './sideBar.css';
import { db } from '../firebase';
import FullDetails from './fullDetails';
import FaIconPack from 'react-icons/lib/fa/angle-left';
import LoaderHOC from '../HOC/loderHoc';
import Loader from '../assets/loader.svg';

class Content extends Component {

    handleButton() {

    }

    constructor(props) {
        super(props);

        this.state = {
            users: null,
            isLoading: true,
          
        };
    }
    componentWillMount() {
        db.onceGetForm().then(snapshot =>
            this.setState(() => ({ users: snapshot.val() }))
        );
       
    
    }
    
    render() {
        const { users } = this.state;
        if(this.state.users != null){ 
        return (
            <div className="content">
                {/* <div className = "inbox">
                        <button>
                            <span className ="left">Name</span>
                            <span className = "center">{ !!users && <UserList users={users} /> }</span>
                            <span className = "right">right</span>
                        </button>
                         */}
                {!!users && <Responces users={users} />}
                {/* </div> */}
            </div>
        );}
        return(
            <div className = "loader"><img src={Loader} /></div>
        );
    }
}

// const UserList = ({ users }) =>
//   <div>
//     {Object.keys(users).map(uid =>
//     <div className = "inbox">
//     <button onClick = {() => {
//         console.log(users[uid].email);
//         <FullDetails/>
//     }}>
//         <span className ="left"><div key={uid}>{users[uid].email}</div></span>
//         <span className = "center"><div key={uid}>{users[uid].username}</div></span>
//         <span className = "right">right</span>
//     </button>

//     </div>

//     )}
//   </div>

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const count = 0;
class Responces extends Component {
    constructor(props) {
        super(props);


        this.state = {
           
            showResults: false,
            uid: "",
            data: [],



        }
    }

    componentWillMount() {
        db.onceGetForm().then(snapshot =>
            this.setState(() => ({ users: snapshot.val() })),
            console.log(this.state)
        );


    }


    handelData() {
        db.getDetailsByNumber(this.state.uid).then(snapshot =>
            this.setState(byPropKey("data", snapshot.val()))
        );
    }

    handelFirstLetter(name) {
        var letter =  name.charAt(0);
        return letter.toUpperCase();
    }

  
    render() {

        const data = this.state.uid;
        
        if (!this.state.showResults) {
            return (

                <div>
                    <div>
                        {Object.keys(this.props.users).map(uid =>
                            <div className="inbox">
                                <button onClick={() => {
                                    this.setState(byPropKey("showResults", true),
                                        () => { this.setState(byPropKey("uid", uid)) })
                                }}>
                                    <div className="info">
                                        <div className="image"><h1>{this.handelFirstLetter(this.props.users[uid].name)}</h1></div>
                                        <div className="basic-info">
                                            <div className="name"><div key={uid.name}><p>{this.props.users[uid].name}</p></div> </div><br />
                                            <div className="details"><div key={uid.age}><span> Age: {this.props.users[uid].age} Gender: {this.props.users[uid].sex}</span></div></div>
                                            <div className = "location"><div key={uid.address}>{this.props.users[uid].address},{this.props.users[uid].city},{this.props.users[uid].zip}</div></div>
                                            <div className = "time"> <div key={uid.sex}><p>9:30</p></div></div> 
                                        </div>
                                        {/* <span>right</span> */}
                                    </div>
                                </button>
                            </div>


                            /* <div className="res">
                                <div className="res-con">
                                    <h1>Child Name: {this.state.users[uid].name}</h1>
                                    <p>Child Gender:{this.state.users[uid].sex}</p>

                                    <p>Child Age: {this.state.users[uid].age}</p>

                                    <p>Child Date Of Birth: {this.state.users[uid].dob}</p>

                                    <p>Mother's Name: {this.state.users[uid].motherName}</p>

                                    <p>Mother's Email:{this.state.users[uid].motherEmail} </p>

                                    <p>Mother's Number: {this.state.users[uid].motherNumber}</p>

                                    <p>Father's Name: {this.state.users[uid].fatherName}</p>

                                    <p>Father's Number: {this.state.users[uid].fatherNumber}</p>

                                    <p>Father's Email: {this.state.users[uid].fatherEmail}</p>

                                    <p>Address: {this.state.users[uid].address}</p>

                                    <p>City: {this.state.users[uid].city}</p>

                                    <p> Zip Code: {this.state.users[uid].zip}</p>
                                </div>
                            </div>
                        </div> */

                        )}
                    </div>
                </div>
            );
        }
        return (
            <div>
               
            <div class = "full-details">
           
                {this.handelData()}
                
                <div className = "mini-nav">
                    <button className = "btn-lft"onClick={() => { this.setState(byPropKey("showResults", false)) }}> <FaIconPack className ="back"/></button>
                    <span>{this.state.data.name} Profile</span>
                   
                </div>
                <div className ="child-info">
                    <div className = "heading"><p>Childs Information</p></div>
                    <div className = "key">
                    {/* <p className="key-p">Full Name</p>
                    <p className="key-p">Age</p>
                    <p className="key-p">Age</p>
                    <p className="key-p">Age</p>
                    <p className="key-p">Age</p>
                    <p className="key-p">Age</p>
                    <p className="key-p">Age</p>
                    <p className="key-p">Age</p>
                    <p className="key-p">Age</p>
                    <p className="key-p">Age</p>
                    <p className="key-p">Age</p> */}
                    {Object.keys(this.state.data).map(itr => 
                        <p className="key-p">{itr}</p>
                    )}
                    
                    </div>
                    <div className ="value">
                    <p className="value-p">{this.state.data.address}</p>
                    <p className="value-p">{this.state.data.age}</p>
                    <p className="value-p">{this.state.data.city}</p>
                    <p className="value-p">{this.state.data.fatherEmail}</p>
                    <p className="value-p">{this.state.data.fatherName}</p>
                    <p className="value-p">{this.state.data.fatherNumber}</p>
                    <p className="value-p">{this.state.data.motherEmail}</p>
                    <p className="value-p">{this.state.data.motherName}</p>
                    <p className="value-p">{this.state.data.motherNumber}</p>
                    <p className="value-p">{this.state.data.name}</p>
                    <p className="value-p">{this.state.data.sex}</p>
                    <p className="value-p">{this.state.data.zip}</p>
                   
                    </div>
                    
                </div>
                <div>
                    <div>

                        
                    </div>
                </div>
            </div>
            </div>
        );
       
    }
}

export default Content;