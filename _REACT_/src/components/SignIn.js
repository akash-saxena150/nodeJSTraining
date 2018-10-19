import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';
import {setLocalStorage} from './Services';
import Config from '../config/webConfig.json';
import {Link, Route} from 'react-router-dom';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.formFields = [
            {type: 'email', key: 'user_email'},
            {type: 'password', key: 'user_password'}
        ]
        this.state={progress: false, success: false, error: false};
    }
    
    takeAction(obj){
        let self = this;
        self.setState({progress: true, success: false, error: false});
        obj.user_type = 'client';
        axios.post('https://betaapi.getsetgo.fitness/base_ind/API/v1/sign-in', obj)
        .then(function (response) {
            setLocalStorage('userToken', response.data.token)
            self.setState({progress: false, success: true, error: false});
            console.log(self.props.history.push('../userdashboard'));
        })
        .catch(function (error) {
            console.log(error);
            self.setState({progress: false, error: true, success: false})
        });
    }
    
    render() {
        let {success, error, progress} = this.state;
        let {SignIn} = Config;
        return (
            <div className="signUp">
                
                <h1>{SignIn.header}</h1>
                <div><Link to={`${this.props.match.url}/client`}>Client login</Link></div>
                {!(success || error || progress) && <ul className="formContainer">
                    <Form formFields = {this.formFields} submitAction = {this.takeAction} that = {this}/>
                </ul>}
                {success && !(error || progress) && <div>{SignIn.success}</div>}
                {progress && !(success || error) && <div>{SignIn.progress}</div>}
                {error && !(success || progress) && <div>{SignIn.error}</div>}
            </div>
        );
  }
}

export default SignIn;
