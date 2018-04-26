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

export const doCreateForm = (name, sex, age, dob, motherName, motherNumber, motherEmail, fatherName, fatherNumber, fatherEmail, address, city, zip,OtherExp,medInfo,medInitial,medPhysi,medPhysiNumber,emgContactName1,emgContactRel1,emgContact1,emgContactName2,emgContactRel2,emgContact2,emgContactName3,emgContactRel3,emgContact3,photoCon,photoConLim,allergies,EPI,Benadryl,suppliedEPI,allergy_action) =>
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
    OtherExp,
    medInfo,
    medInitial,
    medPhysi,
    medPhysiNumber,
    emgContactName1,
    emgContactRel1,
    emgContact1,
    emgContactName2,
    emgContactRel2,
    emgContact2,
    emgContactName3,
    emgContactRel3,
    emgContact3,
    photoCon,
    photoConLim,
    allergies,
    EPI,
    Benadryl,
    suppliedEPI,
    allergy_action
  });

export const onceGetForm = () =>
  db.ref('responces').once('value');

export const getDetailsByNumber = (num) => 
  db.ref(`responces/${num}`).once(`value`);