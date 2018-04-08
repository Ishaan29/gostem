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
// import {orange500, blue500} from 'material-ui/styles/colors';
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
    // fill: orange500,
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
    // padding: 7
    // marginBottom: 3,
    // fill: orange500,
  },
  textchild: {
    borderColor:'green',
    width: 600,
    marginBottom:10,
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
class Page4 extends Component {
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

                <div>
                <div>
                    <Paper className="backgroundG" zDepth={5}>
                      

                      <div className="headstyle">
                        <p className="subhead">Allergy Alert </p>
                        </div>
                        <br></br>
                        <div className="headdown">
                        <p>This page is designed for parents of children with allergies. Our first priority at STEM Academy is your child’s safety. Please help us by completing the information below and speaking directly with the center director concerning your child’s allergy. </p>
                        <br/>
                        <TextValidator
                           hintText="List known ALLERGY/ALLERGIES"
                           floatingLabelText=""
                           style={styles.textchild}
                           fullWidth= "true"
                           multiLine={true}
                           name="List known ALLERGY/ALLERGIES"
                           value={this.state.address}
                           onChange = {e => this.setState(byPropKey("address", e.target.value))}
                           validators={['required']}
                           errorMessages={['this field is required']}
                         /><br />
                        <Checkbox
                            label="Does your child have an EPI pen?"
                            labelPosition="left"
                           //   checked={this.state.checked}
                            // onCheck={this.updateCheck.bind(this)}
                            style={styles.checkbox}
                          />
                          <Checkbox
                            label="Does your child use Benadryl?"
                            labelPosition="left"
                           //   checked={this.state.checked}
                            //  onCheck={this.updateCheck.bind(this)}
                            style={styles.checkbox}
                          />
                          <Checkbox
                            label="Have you supplied the center with Benadryl andor Epi pen in the original box with your child’s information label on it?"

                            labelPosition="left"
                           //  checked={this.state.checked}
                           //   onCheck={this.updateCheck.bind(this)}
                            style={styles.checkbox}
                          />
                          <Checkbox
                            label="Did your doctor fill out an allergy action plan? "
                            labelPosition="left"
                           //   checked={this.state.checked}
                          //    onCheck={this.updateCheck.bind(this)}
                            style={styles.checkbox}
                          />
                        <br/>
                        <div className="notes">
                      <p>PARENTS OF CHILDREN WITH ALLERGIES MUST DISCUSS ANY/ALL DIETARY ISSUES WITH THE DIRECTOR UPON ENROLLMENT. WE STRONGLY ENCOURAGE PARENTS OF CHILDREN WITH ALLERGIES TO SUPPLY ALL THEIR CHILD’S FOOD AND BOWLS. </p>
                      </div>
                      </div>
                    </Paper>
                  </div>

            {/*}       <div style={styles.button}>
                    <RaisedButton onClick={this.handleSubmit} type="submit" label="Submit" primary={true} value="Submit" disabled={isInvalid} />
                      <br/>
                    <RaisedButton onClick={()=>{this.setState(byPropKey("login",true))}} label="login"/>
                    <br/>
                     <RaisedButton onClick={()=>{}} label="next"/> </div>
                */}
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

      export default Page4;
