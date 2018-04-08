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
import Divider from 'material-ui/Divider';
import { db } from '../firebase';

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

      maxWidth: 250,
    },
    checkbox : {
      maxWidth: 250,
      paddingBottom: 20
    },
    radioButton: {
      // margin: 'auto'
      // paddingRight: 7
      // marginBottom: 3,
      fill: orange500,
    },
    textchild: {
      marginBottom: 10,
      width: 600,
      borderColor: 'green',
      // float: 'left',
    },
    customWidth: {
      marginleft: 143,
      width: 400,
      // marginleft: 43,
      // width: 120,
      // float: 'left'
    },

  };

  const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });

  const INITIAL_STATE = {
    motherName: '',
    motherNumber: "",
    motherEmail:"",
    fatherName: "",
    fatherNumber: "",
    fatherEmail: "",
  };

  class Page2 extends Component {
    constructor(props) {
      super(props);
      //  this.state = Page.fieldvalues;
      this.state = {...INITIAL_STATE};

      this.handelChange = this.handelChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

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

        const isInvalid =  motherName === "" || motherNumber === ""|| motherEmail === ""|| fatherName === "" || fatherNumber === "" || fatherEmail === "" || address === "" || city === "" || zip === "" || tshirt === false || childStay === "";
    if(!this.state.login){


    return (
      <div style={styles.container}
      >
        <ValidatorForm
          ref="form"

          onSubmit={this.handleSubmit}
        >
          {/* <form onSubmit = {this.handleSubmit}>  */}

          <h1 className="header" style={{marginBottom: 40}}>STEM ACADEMY ADMISSIONS</h1>

          <div>
          <div>
              <Paper className="backgroundG" zDepth={5}>
              <div className="headstyle">
                <p className="subhead">Medical Information!</p>
                </div>
                <div className="headdown">
                <TextValidator
                  hintText="Medical Information (please share any specific concerns)"
                  // fullWidth= "true"
                  multiLine={true}
                  rows={2}
                  style={styles.textchild}
                  name="Full Address"
                  value={this.state.address}
                  onChange = {e => this.setState(byPropKey("address", e.target.value))}
                  validators={['required']}
                  errorMessages={['this field is required']}
                /><br />
               <p  className="notes"
               style={{paddingTop: 20}}><b>EMERGENCY MEDICAL RELEASE -</b> This is to certify that I voluntarily furnish medical information on the above-designated student to
               STEM ACADEMY FOR YOUNG KIDS. I hereby request that in the event that emergency medical care for my child. I further give my consent for an emergency medical
                facility or physician to administer necessary medical treatment to my child if I am unable to be reached or the situation requires immediate attention. I understand
                 that I am responsible for paying all medical bills.</p><br/>
               <TextValidator
                  hintText="Initial"
                  floatingLabelText="Initial"
                  style={styles.textchild}
                  
                  type ="email"
                  value={this.state.fatherEmail}
                  onChange={e => this.setState(byPropKey("fatherEmail" , e.target.value))}
                  validators={['required','isEmail']}
                  name="Father's E-mail"

                  errorMessages={['this field is required','E-mail is not valid']}
                />
                <br></br>

                <TextValidator
                  hintText="Physician"
                  floatingLabelText="Physician"
                  style={styles.textchild}

                  value={this.state.fatherEmail}
                  onChange={e => this.setState(byPropKey("fatherEmail" , e.target.value))}
                  validators={['required','isEmail']}
                  name="Father's E-mail"

                  errorMessages={['this field is required','E-mail is not valid']}
                />
                <br></br>
                <TextValidator
                  hintText="Phone no."
                  floatingLabelText="Phone no."
                  value={this.state.motherNumber}
                  name="Mother's no."
                  style={styles.textchild}

                  onChange = {(e) => {this.setState(byPropKey("motherNumber" , e.target.value ))}}
                  // onChange={e => this.change(e)}
                  validators={['required','isNumber']}
                  errorMessages={['this field is required','not a number']}
                /> <br/>
                <p className="notes">
                    <b>EMERGENCY CONTACT INNFORMATION –</b>Parents notified first, next in priority.
                </p>
                <br/>
                <TextValidator
                  hintText="Contact #1 Name"
                  floatingLabelText="Contact #1 Name"

                  value={this.state.fatherEmail}
                  onChange={e => this.setState(byPropKey("fatherEmail" , e.target.value))}
                  validators={['required','isEmail']}
                  name="Father's E-mail"

                  errorMessages={['this field is required','E-mail is not valid']}
                />
                <TextValidator
                  hintText="Relationship"
                  floatingLabelText="Relationship"

                  value={this.state.fatherEmail}
                  onChange={e => this.setState(byPropKey("fatherEmail" , e.target.value))}
                  validators={['required','isEmail']}
                  name="Father's E-mail"

                  errorMessages={['this field is required','E-mail is not valid']}
                />
                <TextValidator
                  hintText="Phone no."
                  floatingLabelText="Phone no."
                  value={this.state.motherNumber}
                  name="Mother's no."
                  onChange = {(e) => {this.setState(byPropKey("motherNumber" , e.target.value ))}}
                  // onChange={e => this.change(e)}
                  validators={['required','isNumber']}
                  errorMessages={['this field is required','not a number']}
                /> <br/>
                <TextValidator
                  hintText="Contact #2 Name"
                  floatingLabelText="Contact #2 Name"

                  value={this.state.fatherEmail}
                  onChange={e => this.setState(byPropKey("fatherEmail" , e.target.value))}
                  validators={['required','isEmail']}
                  name="Father's E-mail"

                  errorMessages={['this field is required','E-mail is not valid']}
                />
                <TextValidator
                  hintText="Relationship"
                  floatingLabelText="Relationship"

                  value={this.state.fatherEmail}
                  onChange={e => this.setState(byPropKey("fatherEmail" , e.target.value))}
                  validators={['required','isEmail']}
                  name="Father's E-mail"

                  errorMessages={['this field is required','E-mail is not valid']}
                />
                <TextValidator
                  hintText="Phone no."
                  floatingLabelText="Phone no."
                  value={this.state.motherNumber}
                  name="Mother's no."
                  onChange = {(e) => {this.setState(byPropKey("motherNumber" , e.target.value ))}}
                  // onChange={e => this.change(e)}
                  validators={['required','isNumber']}
                  errorMessages={['this field is required','not a number']}
                /> <br/>
                <TextValidator
                  hintText="Contact #3 Name"
                  floatingLabelText="Contact #3 Name"

                  value={this.state.fatherEmail}
                  onChange={e => this.setState(byPropKey("fatherEmail" , e.target.value))}
                  validators={['required','isEmail']}
                  name="Father's E-mail"

                  errorMessages={['this field is required','E-mail is not valid']}
                />
                <TextValidator
                  hintText="Relationship"
                  floatingLabelText="Relationship"

                  value={this.state.fatherEmail}
                  onChange={e => this.setState(byPropKey("fatherEmail" , e.target.value))}
                  validators={['required','isEmail']}
                  name="Father's E-mail"

                  errorMessages={['this field is required','E-mail is not valid']}
                />
                <TextValidator
                  hintText="Phone no."
                  floatingLabelText="Phone no."
                  value={this.state.motherNumber}
                  name="Mother's no."
                  onChange = {(e) => {this.setState(byPropKey("motherNumber" , e.target.value ))}}
                  // onChange={e => this.change(e)}
                  validators={['required','isNumber']}
                  errorMessages={['this field is required','not a number']}
                /> <br/>
                </div>
              </Paper>
            </div>

          {/*}   <div style={styles.button}>
              <RaisedButton onClick={this.handleSubmit} type="submit" label="Submit" primary={true} value="Submit" disabled={isInvalid} />
                <br/>
              <RaisedButton onClick={()=>{this.setState(byPropKey("login",true))}} label="login"/>
              <br/>
            </div> */}
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

export default Page2;
