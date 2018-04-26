import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';
import './page1.css';
import SideBar from './siedBar';
// import Page from './Page';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import {orange500, blue500} from 'material-ui/styles/colors';
// import Grid from 'material-ui/Grid';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import { db } from '../firebase';

const paper1 = {
  // backgroundColor: '#fff8e0',
  // height: 350,
  // width: 300,
  marginBottom: 80,
  padding: 36,
  // marginLeft: 'auto',
  // marginRight: 'auto',
  // alignContent: 'center',
  // textAlign: 'center',
  // paddingLeft: 40,
  // display: 'inline-block',
};
const paper2 = {
  // backgroundColor: '#fff8e0',

  // height: 520,
  // width: 800,
  // marginTop: 70,
  marginBottom: 80,
  padding: 36,
  // marginLeft: 'auto',
  // marginRight: 'auto',
  // alignContent: 'center',
  // textAlign: 'center',
  // padding: 40,

  // display: 'inline-block',
};
const paper3 = {
  // backgroundColor: '#fff8e0',

  // height: 320,
  // width: 800,
  marginBottom: 80,
  padding: 36,
  // marginTop: 70,
  // marginLeft: 'auto',
  // marginRight: 'auto',
  // alignContent: 'center',
  // textAlign: 'center',
  // paddingLeft: 40,

  // display: 'inline-block',
};
const styles = {
  container: {

    // width: 500 ,
    maxWidth: 800,
    margin: 'auto',
    // marginLeft: 'auto',
    // marginRight: 'auto'
    padding: 7
  },
  button: {
    marginTop: 30
  },

  block: {
    fill: orange500,
    // textAlign: 'center',
    // float: 'left',
    maxWidth: 250,
  },
  checkbox : {
   // maxWidth: 250,
    paddingBottom: 20
  },
  radioButton: {
    // float: 'right',
    // margin: 'auto'
    // paddingRight: 7
    // marginBottom: 3,
    fill: orange500,
  },
  textchild: {
    borderColor: orange500,
    // float: 'left',
  },
  customWidth: {
    // marginleft: 43,
    width: 120,
    // float: 'left'
  },

};
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  name: '',
  sex: '',
  age: '',
  dob : '',
  motherName: '',
  motherNumber: '',
  motherEmail:'',
  fatherName: '',
  fatherNumber: '',
  fatherEmail: '',
  address: '',
  city: '',
  zip: '',
  childStay: '',
  OtherExp: '',
  medInfo: '',
  medInitial: '',
  medPhysi: '',
  medPhysiNumber: '',
  emgContactName1: '',
  emgContactRel1: '',
  emgContact1: '',
  emgContactName2: '',
  emgContactRel2: '',
  emgContact2: '',
  emgContactName3: '',
  emgContactRel3: '',
  emgContact3: '',
  photoCon: '',
  photoConLim: '',
  allergies: '',
  EPI: '',
  Benadryl: '',
  suppliedEPI: '',
  allergy_action: '',
  tshirt: false,
  login: false,
  error: null,
};
class Page1 extends Component {
  constructor(props) {
    super(props);
    //  this.state = Page.fieldvalues;
    this.state = {...INITIAL_STATE};

    this.handelChange = this.handelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  // change = e =>{
  //     this.setState({
  //         [e.target.name]: e.target.value
  //     });
  // };

  handelChange(x,event) {
    this.setState({
      [event.target.dob]: event.target.dob

    });
    console.log(this.state);
  }

  handleSubmit(event) {

    // alert('A name was submitted: ' + this.state.name + this.state.sex + this.state.age + this.state.dob + this.state.motherName + this.state.motherNumber + this.state.motherEmail + this.state.fatherName + this.state.fatherNumber + this.state.fatherEmail + this.state.address + this.state.city + this.state.zip);
    // event.preventDefault();
    db.doCreateForm(this.state.name, this.state.sex ,this.state.age , this.state.dob , this.state.motherName , this.state.motherNumber , this.state.motherEmail , this.state.fatherName , this.state.fatherNumber , this.state.fatherEmail , this.state.address , this.state.city , this.state.zip,this.state.tshirt ,this.state.childStay,this.state.OtherExp,this.state.medInfo,this.state.medInitial,this.state.medPhysi,this.state.medPhysiNumber,this.state.emgContactName1,this.state.emgContactRel1,this.state.emgContact1,this.state.emgContactName2,this.state.emgContactRel2,this.state.emgContact2,this.state.emgContactName3,this.state.emgContactRel3,this.state.emgContact3,this.state.photoCon,this.state.photoConLim,this.state.allergies,this.state.EPI,this.state.Benadryl,this.state.suppliedEPI,this.state.allergy_action,)
    .then(( ) => {
      console.log("sucess");
    }).catch((err)=> {
      console.log(err);
    });
  }
componentDidMount(){
  this.state.login= false;
}

  render() {
    const {
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
      childStay,
      tshirt,
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
      allergy_action,
      login,
      error,
    } = this.state;

    const isInvalid = name ===""|| sex === "" || age ==="" || dob ==="" || motherName === "" || motherNumber === ""|| motherEmail === ""|| fatherName === "" || fatherNumber === "" || fatherEmail === "" || address === "" || city === "" || zip === "";
    if(!this.state.login){

    
    return (
      <div style={styles.container}
      >
        <ValidatorForm
          ref="form"

          onSubmit={this.handleSubmit}
        >
          {/* <form onSubmit = {this.handleSubmit}>  */}
          <div className="sidebox">
          {/* <input/> */}
          <div>
            </div>
            </div>
          <div className="mainContainer">
          
          <h1 style={{textAlign: 'center',paddingTop: 50,paddingBottom: 50}}>GO-STEM</h1>
            <div>
              
              <Paper style={paper1} zDepth={5}>
                <h2>Personal Details!</h2>
                <TextValidator
                  underlineStyle={styles.textchild}
                  style={styles.textchild}
                  hintText="Full Name"
                  floatingLabelText="Child Name"
                  value={this.state.name}
                  onChange={event => this.setState(byPropKey('name', event.target.value))}
                  name="childname"
                  validators={['required']}
                  errormessages={['this field is required']}

                /> 
               
                <RadioButtonGroup className="radio" labelPosition="left" style={styles.block}
                  onChange={event => this.setState(byPropKey('sex', event.target.value))}>
                  <RadioButton
                    value="Male"
                    label="Male"
                    style={styles.radioButton}
                  />

                  <RadioButton
                  
                    value="Female"
                    label="Female"
                    checkedIcon={<ActionFavorite style={{ fill: 'red' }} />}
                    uncheckedIcon={<ActionFavoriteBorder />}
                    style={styles.radioButton}
                  />
                </RadioButtonGroup>
                <TextValidator
                  style={styles.customWidth}
                  hintText="Child Age"
                  floatingLabelText="Child Age"
                  // value={this.state.childname}
                  // type = "number"
                  value={this.state.age}
                  onChange={event => this.setState(byPropKey('age', event.target.value))}
                  name="childage"

                  validators={['required','isNumber']}
                  errorMessages={['this field is required','not a number']}
                />
                <DatePicker 
                  openToYearSelection={true}
                  textFieldStyle={styles.customWidth}
                  className="dat"
                  floatingLabelText="Date Of Birth" 
                  hintText="" 
                  value={this.state.dob}
                  openToYearSelection={true} 
                  onChange = {(e,date) => {this.setState(byPropKey("dob", date))}}
                />
                <br />
                <Checkbox
                  name= "tshirt"
                  labelPosition="left"
                  label="T-shirt"
                  value={this.state.tshirt}
                  onChange = {event => this.setState(byPropKey('tshirt', event.target.value))}
                  style={styles.checkbox}
                  />
                  <h4>Child primarily lives with :-</h4>
                  <RadioButtonGroup className="radio" labelPosition="left" style={styles.block}
                  onChange={event => this.setState(byPropKey('childStay', event.target.value))}>
                  <RadioButton
                    value="mom-n-dad"
                    label="Mom & Dad"
                    style={styles.radioButton}
                  />

                  <RadioButton
                    value="mom"
                    label="Mom"
                    style={styles.radioButton}
                  />
                  <RadioButton
                    value="dad"
                    label="Dad"
                    style={styles.radioButton}
                  />
                  <RadioButton
                    value="other"
                    label="Other"
                    style={styles.radioButton}
                  />
                </RadioButtonGroup>
                <TextValidator
                  hintText="Other(please explain)"
                  floatingLabelText="Other(please explain)"
                  value={this.state.OtherExp}
                  name="OtherExp"
                  onChange = {(e)=> {this.setState(byPropKey('OtherExp', e.target.value))}}
                />
                <h2>Parent's Information!</h2>

                <TextValidator
                  hintText="Full Name"
                  floatingLabelText="Mother's Name"
                  value={this.state.motherName}
                  name="Mother's Name"
                  onChange = {(e)=> {this.setState(byPropKey('motherName', e.target.value))}}
                  // onChange={e => this.change(e)}
                  validators={['required']}
                  errorMessages={['this field is required']}
                /><br />
                <TextValidator
                  hintText="Mother's no."
                  floatingLabelText="Mobile no."
                  value={this.state.motherNumber}
                  name="Mother's no."
                  onChange = {(e) => {this.setState(byPropKey('motherNumber' , e.target.value ))}}
                  // onChange={e => this.change(e)}
                  validators={['required','isNumber']}
                  errorMessages={['this field is required','not a number']}
                /><br />
                <TextValidator
                  hintText="Mother's E-mail"
                  floatingLabelText="E-mail"
                  value={this.state.motherEmail}
                  name="Mother's E-mail"
                  onChange={(e)=>{this.setState(byPropKey('motherEmail', e.target.value))}}
                  validators={['required','isEmail']}
                  errorMessages={['this field is required','E-mail is not valid']}
                /><br />
                <TextValidator
                  floatingLabelText="Father's Name"
                  value={this.state.fatherName}
                  hintText="Full Name"
                  onChange={e => this.setState(byPropKey('fatherName' , e.target.value))}
                  name="Father's Name"
                    
                  validators={['required']}
                  errorMessages={['this field is required']}
                /><br /> <TextField
                  hintText="Father's no."
                  floatingLabelText="Mobile no."
                  value={this.state.fatherNumber}
                  onChange={e => this.setState(byPropKey('fatherNumber' , e.target.value))}
                  name="Father's no."
                    
                  validators={['required','isNumber']}
                  errorMessages={['this field is required','not a number']}
                /><br />
                <TextValidator
                  hintText="Father's E-mail"
                  floatingLabelText="E-mail"
                  type ="email"
                  value={this.state.fatherEmail}
                  onChange={e => this.setState(byPropKey('fatherEmail' , e.target.value))}
                  validators={['required','isEmail']}
                  name="Father's E-mail"
                    
                  errorMessages={['this field is required','E-mail is not valid']}
                /><br />
                <h2>Residence Information!</h2>
                <TextValidator
                  hintText="Full Address"
                  floatingLabelText="Primary Address"
                  multiLine={true}
                  rows={2}
                  name="Full Address"
                  value={this.state.address}
                  onChange = {e => this.setState(byPropKey('address', e.target.value))}
                  validators={['required']}
                  errorMessages={['this field is required']}
                /><br />
                <TextValidator
                  hintText="Current City"
                  floatingLabelText="City"
                  
                  onChange={e => this.setState(byPropKey('city', e.target.value))}
                  name="Current City"
                  value={this.state.city}
                  validators={['required']}
                  errorMessages={['this field is required']}
                /><br />
                <TextValidator
                  hintText="Zip Code"
                  floatingLabelText="Zip"
                 
                  onChange={e => this.setState(byPropKey('zip' , e.target.value))}
                  name="Zip"
                  value={this.state.zip}
                  validators={['required','isNumber']}
                  errorMessages={['this field is required','not a number']}
                /><br />
              </Paper>
            </div>
            <div>
              <Paper style={paper2} zDepth={5}>
                <h2>Medical Information!</h2>

                <TextValidator
                  hintText="Medical Information (please share any allergy/medical/therapies/behavioral concerns)"
                  fullWidth= "true"
                  multiLine={true}
                  rows={2}
                  name="medical-info"
                  value={this.state.medInfo}
                  onChange = {e => this.setState(byPropKey('medInfo', e.target.value))}
                  validators={['required']}
                  errorMessages={['this field is required']}
                /><br />
               <p style={{paddingTop: 50}}><b>EMERGENCY MEDICAL RELEASE -</b> This is to certify that I voluntarily furnish medical information on the above-designated student to STEM ACADEMY FOR YOUNG KIDS. I hereby request that in the event that emergency medical care for my child. I further give my consent for an emergency medical facility or physician to administer necessary medical treatment to my child if I am unable to be reached or the situation requires immediate attention. I understand that I am responsible for paying all medical bills.</p><br/>
               <TextValidator
                  hintText="Initial"
                  floatingLabelText="Initial"
                  type ="text"
                  value={this.state.medInitial}
                  onChange={e => this.setState(byPropKey('medInitial' , e.target.value))}
                  validators={['required']}
                  name="medInitial"
                    
                  errorMessages={['this field is required']}
                />
                <TextValidator
                  hintText="Primary Care Physician"
                  floatingLabelText="Primary Care Physician"
  
                  value={this.state.medPhysi}
                  onChange={e => this.setState(byPropKey('medPhysi' , e.target.value))}
                  validators={['required']}
                  name="medPhysi"
                    
                  errorMessages={['this field is required']}
                />
                <TextValidator
                  hintText="Phone no."
                  floatingLabelText="Phone no."
                  value={this.state.medPhysiNumber}
                  name="medPhysi no."
                  onChange = {(e) => {this.setState(byPropKey('medPhysiNumber' , e.target.value ))}}
                  // onChange={e => this.change(e)}
                  validators={['required','isNumber']}
                  errorMessages={['this field is required','not a number']}
                /> <br/>
                <p>
                    <b>EMERGENCY CONTACT INNFORMATION –</b>Parents notified first, next in priority. 
                </p>
                <br/>
                <TextValidator
                  hintText="Contact #1 Name"
                  floatingLabelText="Contact #1 Name"
              
                  value={this.state.emgContactName1}
                  onChange={e => this.setState(byPropKey('emgContactName1' , e.target.value))}
                  validators={['required']}
                  name="emgContactName1"
                    
                  errorMessages={['this field is required']}
                />
                <TextValidator
                  hintText="Relationship"
                  floatingLabelText="Relationship"

                  value={this.state.emgContactRel1}
                  onChange={e => this.setState(byPropKey('emgContactRel1' , e.target.value))}
                  validators={['required']}
                  name="emgContactRel1"
                    
                  errorMessages={['this field is required']}
                />
                <TextValidator
                  hintText="Phone no."
                  floatingLabelText="Phone no."
                  value={this.state.emgContact1}
                  name="emgContact1"
                  onChange = {(e) => {this.setState(byPropKey('emgContact1' , e.target.value ))}}
                  // onChange={e => this.change(e)}
                  validators={['required','isNumber']}
                  errorMessages={['this field is required','not a number']}
                /> <br/><Divider style={{marginTop: 30}} />
                <TextValidator
                  hintText="Contact #2 Name"
                  floatingLabelText="Contact #2 Name"
              
                  value={this.state.emgContactName2}
                  onChange={e => this.setState(byPropKey('emgContactName2' , e.target.value))}
                  validators={['required']}
                  name="emgContactName2"
                    
                  errorMessages={['this field is required']}
                />
                <TextValidator
                  hintText="Relationship"
                  floatingLabelText="Relationship"

                  value={this.state.emgContactRel2}
                  onChange={e => this.setState(byPropKey('emgContactRel2' , e.target.value))}
                  validators={['required']}
                  name="emgContactRel2"
                    
                  errorMessages={['this field is required']}
                />
                <TextValidator
                  hintText="Phone no."
                  floatingLabelText="Phone no."
                  value={this.state.emgContact2}
                  name="emgContact2"
                  onChange = {(e) => {this.setState(byPropKey('emgContact2' , e.target.value ))}}
                  // onChange={e => this.change(e)}
                  validators={['required','isNumber']}
                  errorMessages={['this field is required','not a number']}
                /> <br/>
                <TextValidator
                  hintText="Contact #3 Name"
                  floatingLabelText="Contact #3 Name"
              
                  value={this.state.emgContactName3}
                  onChange={e => this.setState(byPropKey('emgContactName3' , e.target.value))}
                  validators={['required']}
                  name="emgContactName3"
                    
                  errorMessages={['this field is required']}
                />
                <TextValidator
                  hintText="Relationship"
                  floatingLabelText="Relationship"

                  value={this.state.emgContactRel3}
                  onChange={e => this.setState(byPropKey('emgContactRel3' , e.target.value))}
                  validators={['required']}
                  name="emgContactRel3"
                    
                  errorMessages={['this field is required']}
                />
                <TextValidator
                  hintText="Phone no."
                  floatingLabelText="Phone no."
                  value={this.state.emgContact3}
                  name="emgContact3"
                  onChange = {(e) => {this.setState(byPropKey('emgContact3' , e.target.value ))}}
                  // onChange={e => this.change(e)}
                  validators={['required','isNumber']}
                  errorMessages={['this field is required','not a number']}
                /> <br/>
              </Paper>
            </div>
            <div>
                    <Paper style={paper2} zDepth={5}>
                      <h2>Photo Concent!</h2>
                      <br/>
                        <RadioButtonGroup name="photoCon" className="radio"
                            onChange={event => this.setState(byPropKey('photoCon', event.target.value))}>
                          <RadioButton
                            value="Yes"
                            label="YES, I DO GIVE MY CONSENT to STEM Academy to use photo or video images taken of my child in school brochures, advertisements for the school, on the website, in social media and in other school publications as they see fit. I agree to hold harmless STEM for Young Kids from any liability which may result from the use of said picture(s). This form will apply throughout my child’s tenure at STEM Academy for Young Kids and will not need to be updated unless I so desire. "
                            style={styles.radioButton}
                          />
                          <RadioButton
                            value="No"
                            label="No, I DO NOT GIVE MY CONSENT to STEM Academy to use pictures taken of my child in school brochures, advertisements for the school, on the website, in social media and other school publications as they see fit. "
                            style={styles.radioButton}
                          />
                          
                        </RadioButtonGroup>
                        <br/>
                        
                        <TextValidator
                        hintText="If none apply, please use N/A. "
                        floatingLabelText="Yes, with the following limitations listed below – if none apply, please use N/A. "
                        multiLine={true}
                        fullWidth= {true}
                        // rows={2}
                        name="photoConLim"
                        value={this.state.photoConLim}
                        onChange = {e => this.setState(byPropKey('photoConLim', e.target.value))}
                        validators={['required']}
                        errorMessages={['this field is required']}
                      /><br />
                      
                    </Paper>
                  </div> 
                  <div>
                    <Paper style={paper2} zDepth={5}>
                      <h2>Allergy Alert Page!</h2><br/>
                        <p>This page is designed for parents of children with allergies. Our first priority at STEM Academy is your child’s safety. Please help us by completing the information below and speaking directly with the center director concerning your child’s allergy. </p>
                        <br/>
                        <TextValidator
                           hintText="List known ALLERGY/ALLERGIES"
                           floatingLabelText="List known ALLERGY/ALLERGIES"
                           fullWidth= "true"
                           multiLine={true}
                           name="List known ALLERGY/ALLERGIES"
                           value={this.state.allergies}
                           onChange = {e => this.setState(byPropKey('allergies', e.target.value))}
                           validators={['required']}
                           errorMessages={['this field is required']}
                         /><br />
                        <Checkbox
                            label="Does your child have an EPI pen?"
                            labelPosition="left"
                            onChange = {event => this.setState(byPropKey('EPI', event.target.value))}
                            name= "EPI"
                            labelPosition="left"
                            value={this.state.EPI}
                            style={styles.checkbox}
                          />
                          <Checkbox
                            label="Does your child use Benadryl?"
                            labelPosition="left"
                           //   checked={this.state.checked}
                            name= "Benadryl"
                            value={this.state.Benadryl}
                            onChange = {event => this.setState(byPropKey('Benadryl', event.target.value))}
                            //  onCheck={this.updateCheck.bind(this)}
                            style={styles.checkbox}
                          />
                          <Checkbox
                            label="Have you supplied the center with Benadryl and/or Epi pen 
                            in the original box with your child’s information label on it?
                            "
                            labelPosition="left"
                            name= "suppliedEPI"
                            value={this.state.suppliedEPI}
                            onChange = {event => this.setState(byPropKey('suppliedEPI', event.target.value))}
                           //  checked={this.state.checked}
                           //   onCheck={this.updateCheck.bind(this)}
                            style={styles.checkbox}
                          />
                          <Checkbox
                            label="Did your doctor fill out an allergy action plan? "
                            labelPosition="left"
                            name= "allergy_action"
                            value={this.state.allergy_action}
                            onChange = {event => this.setState(byPropKey('allergy_action', event.target.value))}
                           //   checked={this.state.checked}
                          //    onCheck={this.updateCheck.bind(this)}
                            style={styles.checkbox}
                          />
                        <br/>
                      <p>PARENT’S OF CHILDREN WITH ALLERGIES MUST DISCUSS ANY/ALL DIETARY ISSUES WITH THE DIRECTOR UPON ENROLLMENT. WE STRONGLY ENCOURAGE PARENTS OF CHILDREN WITH ALLERGIES TO SUPPLY ALL THEIR CHILD’S FOOD AND BOWLS. </p>
                    </Paper>
                  </div>

            <div style={styles.button}>
              <RaisedButton onClick={this.handleSubmit} type="submit" label="Submit" primary={true} value="Submit"  />
              <br/>
              {/* <RaisedButton onClick={()=>{this.setState(byPropKey("login",true))}} label="login"/> */}
              <br/>
              
              {/* <RaisedButton onClick={()=>{}} label="next"/> */}
            </div>
          </div>

          {/* </form> */}
        </ValidatorForm>
      </div>
    );}
    return(
      <SideBar/>
    );
  }
}

export default Page1;