import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {getImg} from '../services'
class CoachPreview extends Component{
    
    render(){
        let {name, profile_pic} = this.props;
        return (<Grid container direction="column" justify="center" alignItems="center">
            <div style={{width: '80%', margin: '0 auto', overflow: 'hidden'}}>
                <img style={{width: '100%'}} src = {getImg(profile_pic)}/>
            </div>
            <h3>{name}</h3>
        </Grid>)
    }
}
export default CoachPreview;