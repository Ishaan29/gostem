import React , { Component } from 'react';

import { db } from '../firebase';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
    
  }

  render() {
    const { users } = this.state;
    return(
      <div>
        <h1>Home</h1>
        <p>The home page is accesable by every signed in user.</p>
        
        { !!users && <UserList users={users} /> }
      </div>
    );
  }

}
const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key.toString()}>{users[key].username}</div>
    )}
  </div>
// const authCondition = (authUser) => !!authUser;

export default HomePage;