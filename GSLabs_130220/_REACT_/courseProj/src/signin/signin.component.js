import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {getHt, callAPI, setStorage} from '../services';

import FormGenerator from '../form-generator/form-generator-component'
let ht = getHt()-50;
class Signin extends Component{
    constructor(props){
        super(props);
        this.state = {
            login: [
                {
                    key: 'email',
                    type: 'email',
                    val: '',
                    valid: true,
                    required: true,
                    errMsg: 'Invalid email. Please check'
                },
                {
                    key: 'pass',
                    type: 'password',
                    val: '',
                    valid: true,
                    required: true,
                    errMsg: 'Invalid password. Please check'
                }
            ],
            formSubmitted: false,
            formErr: false,
            errMsg: '',
        }
    }
    formSubmit(data){
        let {login} = this.state;
        console.log(data);
        let loginObj = {
            user_email: data[0].val,
            user_password: data[1].val,
            user_type: 'client'
        };
        callAPI(
            'signin',
            'post',
            (response)=>{
                console.log(response);
                setStorage('auth', response.data.token)
                this.props.history.push('userdashboard')
            },
            (err)=>{
                console.log("Error",err);
                this.setState({errMsg: "Invalid credentials", formErr: true})
            },
            loginObj
        )
        
    }
    render(){
        let {login, formSubmitted, formErr, errMsg} = this.state;
        return (
            <div>
                {!formSubmitted && !formErr && <FormGenerator successCb = {this.formSubmit.bind(this)} formData={login}></FormGenerator>}
                {formSubmitted && !formErr && <div>Form submitted successfully! What next?</div>}
                {formErr && <div>{errMsg}</div>}
            </div>
        )
    }
}
export default Signin;