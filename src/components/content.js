import React,{Component} from 'react';
import './sideBar.css';
import { db } from '../firebase';
import FullDetails from './fullDetails';

class Content extends Component {

    handleButton() {
        
    }

    constructor(props){
        super(props);

        this.state = {
            users: null,
          };
    }
    componentWillMount() {
        db.onceGetUsers().then(snapshot =>
          this.setState(() => ({ users: snapshot.val() }))
        );
        
      }
    render(){
        const { users } = this.state;
        return(
            <div className = "content">
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

class Responces extends Component{
    constructor(props){
        super(props);

       
        this.state = {
            users: this.props.users,
            showResults: false,
            userName: "",
            email: "",

        }
    }

    componentWillMount() {
        db.onceGetUsers().then(snapshot =>
          this.setState(() => ({ users: snapshot.val() }))
        );
        
      }

    handleClick(e, name) {
       this.setState({
           showResults: true
       })
       
    }

    render() {
        return(
            <div>
            <div>
            {Object.keys(this.state.users).map(uid =>
            <div className = "inbox">
            <button onClick = {this.handleClick.bind(this, this.state.users)}>
                <span className ="left"><div key={uid}>{this.state.users[uid].email}</div></span>
                <span className = "center"><div key={uid}>{this.state.users[uid].username}</div></span>
                <span className = "right">right</span>
            </button>
    
            </div>
      
            )}
            </div>
            <p>
                { this.state.showResults ? <FullResponse UserName = {this.state.userName}/> : null }
            </p>
            </div>
        );
    }
}

class FullResponse extends Component {
    constructor(props){
       super(props);
       
       
    }
    render(userName, Email , uid) {
        const users = ({users})
        console.log("working");
        return(
            <div>
                <h1></h1>
            </div>
        );
    }

}
export default Content;