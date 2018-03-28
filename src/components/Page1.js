import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';
import './page1.css';
import Page from './Page';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
// import Grid from 'material-ui/Grid';

const paper1 = {
  backgroundColor: '#F8ECC2',
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
  backgroundColor: '#F8ECC2',

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
  backgroundColor: '#F8ECC2',

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
      // textAlign: 'center',

      maxWidth: 250,
    },
    radioButton: {
      // margin: 'auto'
      // paddingRight: 7
      // marginBottom: 3,
    },
    textchild:{
      // float: 'left',
    },
    customWidth: {
      // marginleft: 43,
      // width: 120,
      // float: 'left'
    },
    
  };
  
  class Page1 extends Component {
    constructor(props){
      super(props);
      //  this.state = Page.fieldvalues;
      this.state= {
        childname: '',
        sex: '',
        age: '',

        
      };
        
        this.handelChange = this.handelChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
    
      
      // change = e =>{
        //     this.setState({
          //         [e.target.name]: e.target.value
          //     });
          // };

    handelChange(event){
      this.setState({
        [event.target.name]: event.target.value
        
        });
      console.log(this.state);
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.childname);
      event.preventDefault();
    }
  

    render(){
      return(
        <div style={styles.container}
        >
          <ValidatorForm
                ref="form"
                
                onSubmit={this.handleSubmit}
            >
          {/* <form onSubmit = {this.handleSubmit}>  */}
            
              <h1>Form!</h1>
              <div >
              <div>
              <Paper style={paper1} zDepth={5}>
              <h3>Child Information!</h3>
            <TextValidator
            style={styles.textchild}
      hintText="Full Name"
      floatingLabelText="Child Name"
      value={this.state.childname}
      onChange={this.handelChange}
      name= "childname"
      validators={['required']}
      errorMessages={['this field is required']}
     
    />
 <RadioButtonGroup className="radio" labelPosition="left" style={styles.block}
      onChange={this.handelChange}>
      <RadioButton
        value="Male"
        label="Male"
        style={styles.radioButton}
      />
      
      <RadioButton
        value="Female"
        label="Female"
        checkedIcon={<ActionFavorite style={{color: '#F44336'}} />}
        uncheckedIcon={<ActionFavoriteBorder />}
        style={styles.radioButton}
      />
    </RadioButtonGroup>
    <TextValidator
            style={styles.customWidth}
      hintText="Child Age"
      floatingLabelText="Child Age"
      // value={this.state.childname}
      onChange={e => this.change(e)}
      name= "childage"

      validators={['required']}
      errorMessages={['this field is required']}
    />
    <DatePicker textFieldStyle={styles.customWidth} className="dat" floatingLabelText="Date Of Birth" hintText="Date Of Birth" openToYearSelection={true} />
    <br />
    </Paper>
    </div>
    <div>
    <Paper style={paper2} zDepth={5}>
    <h3>Parent's Information!</h3>

    <TextValidator
      hintText="Full Name"
      floatingLabelText="Mother's Name"
      value={this.state.childname}
      name= "Mother's Name"

      // onChange={e => this.change(e)}
      validators={['required']}
      errorMessages={['this field is required']}
    /><br />
    <TextValidator
      hintText="Mother's no."
      floatingLabelText="Mobile no."
      value={this.state.childname}
      name= "Mother's no."

      // onChange={e => this.change(e)}
      validators={['required']}
      errorMessages={['this field is required']}
    /><br />
    <TextValidator
      hintText="Mother's E-mail"
      floatingLabelText="E-mail"
      value={this.state.childname}
      name= "Mother's E-mail"

      // onChange={e => this.change(e)}
      validators={['required']}
      errorMessages={['this field is required']}
    /><br />
    <TextValidator
      floatingLabelText="Father's Name"
      value={this.state.childname}
      hintText="Full Name"
      // onChange={e => this.change(e)}
      name= "Father's Name"

      validators={['required']}
      errorMessages={['this field is required']}
    /><br /> <TextField
    hintText="Father's no."
    floatingLabelText="Mobile no."
    value={this.state.childname}
    // onChange={e => this.change(e)}
    name= "Father's no."

    validators={['required']}
      errorMessages={['this field is required']}
  /><br />
  <TextValidator
    hintText="Father's E-mail"
    floatingLabelText="E-mail"
    value={this.state.childname}
    // onChange={e => this.change(e)}
    validators={['required']}
    name= "Father's E-mail"

      errorMessages={['this field is required']}
  /><br />
  </Paper>
  </div>
  <div>
  <Paper style={paper3} zDepth={5}>
  <h3>Residence Information!</h3>
  <TextValidator
      hintText="Full Address"
      floatingLabelText="Primary Address"
      multiLine={true}
      rows={2}
      name= "Full Address"

      validators={['required']}
      errorMessages={['this field is required']}
    /><br />
    <TextValidator
    hintText="Current City"
    floatingLabelText="City"
    value={this.state.childname}
    // onChange={e => this.change(e)}
    name= "Current City"

    validators={['required']}
      errorMessages={['this field is required']}
  /><br />
  <TextValidator
    hintText="Zip Code"
    floatingLabelText="Zip"
    value={this.state.childname}
    // onChange={e => this.change(e)}
    name= "Zip"

    validators={['required']}
      errorMessages={['this field is required']}
  /><br />
  </Paper>
   </div>
   <div style = {styles.button}>
    <RaisedButton type = "submit" label="Submit" primary={true} value = "Submit"/>
  </div>
    </div>
    
    {/* </form> */}
    </ValidatorForm>
    </div>
        );
    }
}

export default Page1;