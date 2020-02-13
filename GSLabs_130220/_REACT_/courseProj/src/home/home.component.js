import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {getHt} from '../services';
import Button from '@material-ui/core/Button';

let docHt = getHt()-50;
class Home extends Component{
    render(){
        return (
        <Grid container style={{height: docHt, backgroundColor: '#ccc'}} direction="row" justify="flex-start" alignItems="center">
            <Grid item style={{marginLeft: '100px', textAlign: 'left'}} xs={3}>
                <h1>Keep it simple silly!</h1>
                <p>GetSetGo is an online fitness company that is on a quest to introduce simplicity to nutrition and healthy living.</p>
                <div>
                <Button variant="contained" color="primary">
                    Get Started
                </Button>
                </div>
            </Grid>
        </Grid>
        )
    }
}
export default Home;