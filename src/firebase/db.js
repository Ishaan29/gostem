import { db } from './firebase';
//user API


export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');



//other Entity APIs ...

export const doCreateForm = (id, childName , age, sex) => 
  db.ref(`responces/${id}`).set({
    id,
    childName,
    age,
    sex
  });

export const onceGetForm = () => 
  db.ref('responces').ones('value');