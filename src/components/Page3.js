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
class Page3 extends Component {
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

                <h1 className="header" style={{marginBottom: 40}}>STEM ACADEMY ADMISSIONS</h1>

                <div >
                <div>
                    <Paper className="backgroundG" zDepth={5}>
                    <div className="headstyle">
                      <p className="subhead">Photo Concent</p>
                      </div>
                      <br/>
                      <div className="headdown">
                        <RadioButtonGroup name="shipSpeed">
                          <RadioButton
                            value="light"
                            label="YES, I DO GIVE MY CONSENT to STEM Academy to use photo or video images taken of my child in school brochures, advertisements for the school, on the website, in social media and in other school publications as they see fit. I agree to hold harmless STEM for Young Kids from any liability which may result from the use of said picture(s). This form will apply throughout my child’s tenure at STEM Academy for Young Kids and will not need to be updated unless I so desire. "
                            style={styles.radioButton}
                          />

                          <RadioButton
                            value="not_light"
                            label="No, I DO NOT GIVE MY CONSENT to STEM Academy to use pictures taken of my child in school brochures, advertisements for the school, on the website, in social media and other school publications as they see fit. "
                            style={styles.radioButton}
                          />

                        </RadioButtonGroup>
                        <br></br>

                        <TextValidator
                        hintText="If none apply, please use N/A "
                        floatingLabelText=" "
                        multiLine={true}
                        // fullWidth= {true}
                        style={styles.textchild}

                        // rows={2}
                        name="Full Address"
                        value={this.state.address}
                        onChange = {e => this.setState(byPropKey("address", e.target.value))}
                        validators={['required']}
                        errorMessages={['this field is required']}
                      /><br />
                      </div>
                    </Paper>
                  </div>
      { /*}
                   <div style={styles.button}>
                    <RaisedButton onClick={this.handleSubmit} type="submit" label="Submit" primary={true} value="Submit" disabled={isInvalid} />
                      <br/>
                    <RaisedButton onClick={()=>{this.setState(byPropKey("login",true))}} label="login"/>
                    <br/>
                     <RaisedButton onClick={()=>{}} label="next"/>
                  </div>  */}
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

      export default Page3;
