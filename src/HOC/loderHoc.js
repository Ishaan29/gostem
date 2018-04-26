import React, {Component} from 'react';

const LoaderHOC = (WrapperComponent) => {
    return class LoaderHOC extends Component {
        render() {
           return this.props.users == "" ? <div><h1>loading...</h1></div> : <WrapperComponent {...this.props}/>
        }
    }
} 


export default LoaderHOC;