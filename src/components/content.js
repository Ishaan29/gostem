import React, { Component } from 'react';
import './sideBar.css';
import { db } from '../firebase';
import FullDetails from './fullDetails';

class Content extends Component {

    handleButton() {

    }

    constructor(props) {
        super(props);

        this.state = {
            users: null,
        };
    }
    componentWillMount() {
        db.onceGetForm().then(snapshot =>
            this.setState(() => ({ users: snapshot.val() }))
        );

    }
    render() {
        const { users } = this.state;
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


class Responces extends Component {
    constructor(props) {
        super(props);


        this.state = {
            users: this.props.users,
            showResults: false,
            uid: "",


        }
    }

    componentWillMount() {
        db.onceGetForm().then(snapshot =>
            this.setState(() => ({ users: snapshot.val() })),
            console.log(this.state)
        );
        
    }


    


    render() {
        const data = this.state.uid;
        if (!this.state.showResults) {
            return (
                <div>
                    <div>
                        {Object.keys(this.state.users).map(uid =>
                            <div className="inbox">
                                <button onClick={() => {
                                    this.setState(byPropKey("showResults", true),
                                        () => { this.setState(byPropKey("uid", uid)) })
                                }}>
                                    <span className="left"><div key={uid}>{this.state.users[uid].name}</div></span>
                                    <span className="center"><div key={uid}>{this.state.users[uid].username}</div></span>
                                    <span className="right">right</span>
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
                <div >
                <button onClick = {() => {this.setState(byPropKey("showResults", false))}}>go back</button>
                </div>
                <div> 
                  {this.props.users.map()}
                </div>
            </div>
        );
    }
}

export default Content;