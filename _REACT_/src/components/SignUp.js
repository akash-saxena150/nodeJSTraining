import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.formFields = [
            {type: 'text', key: 'firstname'},
            {type: 'text', key: 'lastname'},
            {type: 'email', key: 'email'},
            {type: 'password', key: 'password'}
        ];
        this.state={progress: false, success: false, error: false, errorMsg: ''};
        console.log("[SignUp.js] constructor loaded ...");
    }
    componentWillMount(){
        console.log("[SignUp.js] component will mount ...");
    }
    componentDidMount(){
        console.log("[SignUp.js] component did mount ...");
    }
    takeAction(obj){
        let self = this;
        self.setState({progress: true});
        axios.post('https://betaapi.getsetgo.fitness/base_ind/API/v1/signup', obj)
        .then(function (response) {
            self.setState({progress: false, success: true, error: false});
        })
        .catch(function (error) {
            console.log(error);
            self.setState({progress: false, error: true, success: false})
        });
    }
    
    render() {
        let {success, error, progress} = this.state;
        console.log(success, error, progress);
        console.log("[SignUp.js] render called ...");
        return (
            <div className="signUp">
                <h1>Sign-up</h1>
                {!(success || error || progress) && <ul className="formContainer">
                    <Form formFields = {this.formFields} submitAction = {this.takeAction} that = {this}/>
                </ul>}
                {
                    progress && !(success && progress) && <div>Hold on while we register you ...</div>
                }
                {
                    success && !(error && progress) && <div>Well! All done. Login to continue.</div>
                }
                {
                    error && !(success && progress) && <div>Uh oh! We've run into some error. Please try again</div>
                }
            </div>
        );
  }
}

export default SignUp;
