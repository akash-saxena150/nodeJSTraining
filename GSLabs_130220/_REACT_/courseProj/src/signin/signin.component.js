import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {getHt} from '../services';
import Button from '@material-ui/core/Button';
let ht = getHt()-50;
class Signin extends Component{
    constructor(props){
        super(props);
        this.state = {
            login: {
                email: '', pass: ''
            }
        }
    }
    changeInp(e, key){
        let tempObj = Object.assign(this.state.login);
        tempObj[key] = e.target.value;
        this.setState({login: tempObj});
    }
    submitForm(e){
        e.preventDefault();
        console.log(this.state.login)
    }
    render(){
        let {login} = this.state;
        return (
            <form onSubmit={(e)=>{this.submitForm(e)}}>
            <Grid container style={{height: ht}} alignItems="center" justify="center" direction="column">
                <Grid item>
                    <h2>Sign in</h2>
                </Grid>
                <Grid item>
                    <input type="text" value={login.email} onChange={(e)=>{this.changeInp(e, 'email')}}/>
                </Grid>
                <Grid item>
                    <input type="password" value={login.pass} onChange={(e)=>{this.changeInp(e, 'pass')}}/>
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
export default Signin;