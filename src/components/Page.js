import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

// var fieldvalues = {
//     childname: "null",
//     gender: ' ',
//     age: '',
//     dob: '',
//     tshirt: ''
// }



class Page extends Component{
    constructor(props){
        super(props);
        this.state ={
            step: 1,
        };
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
    }
    nextPage(event){
        this.setState({
            step : this.state.step + 1  
        })
    }
    previousPage(event){
        this.setState({
            step : this.state.step - 1
        })
    }

    render(){
        return(
            <MuiThemeProvider>
            <div>
              {(() =>{
                switch(this.state.step) {
                case 1:
                    return <Page1 />
                case 2:
                    return <Page2/>
                case 3:
                    return <Page3 />
                case 4:
                    return <Page4 />
                }
                })()}
                
                <RaisedButton label="Next" onClick={this.nextPage} labelColor="white" backgroundColor="#024048" value="Submit" />
                      <br/>
                <RaisedButton label="Previous" onClick={this.previousPage} labelColor="white" backgroundColor="#FFAB31" value="Submit" />
             </div>
        </MuiThemeProvider>
        );
    }
}

export default Page;