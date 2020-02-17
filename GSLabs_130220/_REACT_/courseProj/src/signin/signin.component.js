import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {getHt, fakeLogin} from '../services';

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
            errMsg: ''
        }
    }
    formSubmit(data){
        console.log(data);
        fakeLogin(
            data[0].val, 
            data[1].val, 
            (auth)=>{
                localStorage.setItem('token', auth.auth);
                this.setState({formSubmitted: true, login: data})
            },
            (err)=>{
                console.log("err",err);
                this.setState({formSubmitted: false, formErr: true, errMsg: err})
            }
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