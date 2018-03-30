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

export const doCreateForm = (name, sex, age, dob, motherName, motherNumber, motherEmail, fatherName, fatherNumber, fatherEmail, address, city, zip ) =>
  db.ref(`responces/${fatherNumber}`).set({
    name,
    sex,
    age,
    dob,
    motherName,
    motherNumber,
    motherEmail,
    fatherName,
    fatherNumber,
    fatherEmail,
    address,
    city,
    zip,
  });

export const onceGetForm = () =>
  db.ref('responces').once('value');