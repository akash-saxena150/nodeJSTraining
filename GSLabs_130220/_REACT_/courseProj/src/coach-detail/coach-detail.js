import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {getImg, callAPI} from '../services';

class CoachDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            coachDetails: null
        }
        console.log("coach detail Called ...")
    }
    updateDOM(){
        callAPI('coachDetail', 'get',
        (response)=>{
            this.setState({coachDetails: response.data.trainer_details[0]})
        },
        (err)=>{
            console.log(err)
        },
        this.props.name
        )
    }
    componentDidMount(){
        this.updateDOM();
    }
    shouldComponentUpdate(nxtProps, nxtState){
        console.log(this.props, nxtProps);
        return (this.props===nxtProps && this.state.coachDetails)?false:true;
    }
    componentDidUpdate(){
        this.updateDOM();
    }
    render(){
        let {coachDetails} = this.state;
        let {name, profile_des, profile_pic} = coachDetails || {};
            
        return (
            <div>
                {!coachDetails && <div>
                    Details loading. Please wait ...
                </div>}
                {coachDetails && <Grid container direction="column" justify="flex-start" alignItems="center" >
                    <Grid item style={{width: '100%'}}>
                        <div style={{width: '60%', margin: '0 auto'}}>
                            <img style={{width: '100%'}} src={getImg(profile_pic)}/>
                        </div>
                    </Grid>
                    <Grid>
                        <h2>{name}</h2>
                    </Grid>
                    <Grid>
                    {profile_des}
                    </Grid>
                </Grid>}
            </div>
        )
    }
}

export default CoachDetail;