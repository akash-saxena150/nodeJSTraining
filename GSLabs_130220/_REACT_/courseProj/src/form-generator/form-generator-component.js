import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {getHt, returnRegex} from '../services';
import Button from '@material-ui/core/Button';
let ht = getHt()-50;
class FormGenerator extends Component{
    constructor(props){
        super(props);
        let formData = props.formData.splice(0);
        this.state = {
            login: formData,
            formValid: true,
            formSubmitted: false
        }
    }
    changeInp(e, indx){
        let isValid = this.validate(e.target.value, indx);
        let tempArr = this.state.login.slice(0);
        tempArr[indx].val = e.target.value;
        tempArr[indx].valid = isValid;
        this.setState({login: tempArr});
    }
    validate(val, indx){
        let {key, type, valid, required, regex} = this.state.login[indx];
        if(required)
        {
            if(!(val.length>0))
                return false;
        }
        switch(type)
        {
            case ('none'):
                if(regex)
                    return val.match(regex)?true:false;
                return true;
                break;
            default:
                    return val.match(returnRegex(type))?true:false
                    break;
        }
    }
    validateForm(){
        for(let i=0; this.state.login[i]; i++)
        {
            if(!this.state.login[i].valid)
                return false;
        }
        return true;
    }
    submitForm(e){
        e.preventDefault();
        let isFormValid = this.validateForm();
        if(isFormValid)
        {
            this.props.successCb(this.state.login)
        }
        else
        {
            this.setState({formSubmitted: false, formValid: false})
        }
        

    }
    render(){
        let {login} = this.state;
        return (
            <form onSubmit={(e)=>{this.submitForm(e)}}>
            <Grid container style={{height: ht}} alignItems="center" justify="center" direction="column">
                <Grid item>
                    <h2>Sign in</h2>
                </Grid>
                {login.map((inp, indx)=>{
                    return (
                    <div>
                        <input type={inp.type} value={inp.val} onChange={(e)=>{this.changeInp(e, indx)}}/>
                        {!inp.valid && <div style={{color: 'red', padding: '5px'}}>{inp.errMsg}</div>}
                    </div>
                    )
                })}
                <Grid item>
                    {!this.state.formValid && <div style={{color: 'red'}}>
                        Form invalid. You gotta scroll up to see the errors
                        </div>}
                    {this.state.formSubmitted && <div style={{color: 'green'}}>
                    Congratulations! Form submitted. What did you gain though?
                    </div>}
                </Grid>
                <Grid item>
                    <Button type="submit" variant="contained" color="primary">
                        Signin
                    </Button>
                </Grid>
            </Grid>
            </form>
        )
    }
}
export default FormGenerator;