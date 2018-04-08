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
    maxWidth: 250,
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
    // width: 120,
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
  motherNumber: "",
  motherEmail:"",
  fatherName: "",
  fatherNumber: "",
  fatherEmail: "",
  address: '',
  city: '',
  zip: '',
  childStay: '',
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
    db.doCreateForm(this.state.name, this.state.sex ,this.state.age , this.state.dob , this.state.motherName , this.state.motherNumber , this.state.motherEmail , this.state.fatherName , this.state.fatherNumber , this.state.fatherEmail , this.state.address , this.state.city , this.state.zip,this.state.tshirt.this.state.childStay,)
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
      login,
      error,
    } = this.state;

    const isInvalid = name ===""|| sex === "" || age ==="" || dob ==="" || motherName === "" || motherNumber === ""|| motherEmail === ""|| fatherName === "" || fatherNumber === "" || fatherEmail === "" || address === "" || city === "" || zip === "" || tshirt === false || childStay === "";
    if(!this.state.login){

    
    return (
      <div style={styles.container}
      >
        <ValidatorForm
          ref="form"

          onSubmit={this.handleSubmit}
        >
          {/* <form onSubmit = {this.handleSubmit}>  */}

          <h1 style={{marginBottom: 40}}>Form!</h1>
          <div >
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
                    checkedIcon={<ActionFavorite style={{ fill: orange500 }} />}
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
                    value="momndad"
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
                  onChange = {(e)=> {this.setState(byPropKey("OtherExp", e.target.value))}}
                />
                <h2>Parent's Information!</h2>

                <TextValidator
                  hintText="Full Name"
                  floatingLabelText="Mother's Name"
                  value={this.state.motherName}
                  name="Mother's Name"
                  onChange = {(e)=> {this.setState(byPropKey("motherName", e.target.value))}}
                  // onChange={e => this.change(e)}
                  validators={['required']}
                  errorMessages={['this field is required']}
                /><br />
                <TextValidator
                  hintText="Mother's no."
                  floatingLabelText="Mobile no."
                  value={this.state.motherNumber}
                  name="Mother's no."
                  onChange = {(e) => {this.setState(byPropKey("motherNumber" , e.target.value ))}}
                  // onChange={e => this.change(e)}
                  validators={['required','isNumber']}
                  errorMessages={['this field is required','not a number']}
                /><br />
                <TextValidator
                  hintText="Mother's E-mail"
                  floatingLabelText="E-mail"
                  value={this.state.motherEmail}
                  name="Mother's E-mail"
                    
                  onChange={(e)=>{this.setState(byPropKey("motherEmail", e.target.value))}}
                  validators={['required','isEmail']}
                  errorMessages={['this field is required','E-mail is not valid']}
                /><br />
                <TextValidator
                  floatingLabelText="Father's Name"
                  value={this.state.fatherName}
                  hintText="Full Name"
                  onChange={e => this.setState(byPropKey("fatherName" , e.target.value))}
                  name="Father's Name"
                    
                  validators={['required']}
                  errorMessages={['this field is required']}
                /><br /> <TextField
                  hintText="Father's no."
                  floatingLabelText="Mobile no."
                  value={this.state.fatherNumber}
                  onChange={e => this.setState(byPropKey("fatherNumber" , e.target.value))}
                  name="Father's no."
                    
                  validators={['required','isNumber']}
                  errorMessages={['this field is required','not a number']}
                /><br />
                <TextValidator
                  hintText="Father's E-mail"
                  floatingLabelText="E-mail"
                  type ="email"
                  value={this.state.fatherEmail}
                  onChange={e => this.setState(byPropKey("fatherEmail" , e.target.value))}
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
                  onChange = {e => this.setState(byPropKey("address", e.target.value))}
                  validators={['required']}
                  errorMessages={['this field is required']}
                /><br />
                <TextValidator
                  hintText="Current City"
                  floatingLabelText="City"
                  
                  onChange={e => this.setState(byPropKey("city", e.target.value))}
                  name="Current City"
                  value={this.state.city}
                  validators={['required']}
                  errorMessages={['this field is required']}
                /><br />
                <TextValidator
                  hintText="Zip Code"
                  floatingLabelText="Zip"
                 
                  onChange={e => this.setState(byPropKey("zip" , e.target.value))}
                  name="Zip"
                  value={this.state.zip}
                  validators={['required','isNumber']}
                  errorMessages={['this field is required','not a number']}
                /><br />
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