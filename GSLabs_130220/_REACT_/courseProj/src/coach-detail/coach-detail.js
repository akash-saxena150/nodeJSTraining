import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {getImg} from '../services'
class CoachDetail extends Component{
    render(){
        let {name, profile_pic} = this.props;
        return (
            <Grid container direction="column" justify="flex-start" alignItems="center" >
                <Grid item style={{width: '100%'}}>
                    <div style={{width: '60%', margin: '0 auto'}}>
                        <img style={{width: '100%'}} src={getImg(profile_pic)}/>
                    </div>
                </Grid>
                <Grid>
                    <h2>{name}</h2>
                </Grid>
                <Grid>
                A FITMOM, who understand how to manage fitness between your daily chores
                </Grid>
            </Grid>
        )
    }
}

export default CoachDetail;