import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {getHt} from '../services';
import CoachList from '../tempData';
import CoachPreview from '../coach-preview/coach-preview-component';
import CoachDetail from '../coach-detail/coach-detail';
let docHt = getHt()-100;
class Coaches extends Component{
    constructor(props){
        super(props);
        this.state={activeCoach: this.props.match.params.id||0}
        console.log("History",this.props);
    }
    redirectCoach(indx){
        console.log(this.props);
        this.props.history.push(`/coaches/${indx}`)
    }
    shouldComponentUpdate(nxtProps, nxtState){
        console.log("Should component update")
        console.log("props",nxtProps);
        console.log("state", nxtState);
        console.log(this.state.activeCoach, this.props.match.params.id)
        if(!(this.state.activeCoach===nxtProps.match.params.id))
        {
            console.log("Changing ...")
            this.setState({activeCoach: this.props.match.params.id});
            return true
        }
        return false;
    }
    render(){
        let {activeCoach} = this.state;
        return (
            <Grid container direction="row" style={{height: docHt, marginTop: '50px'}}>
                <Grid item xs={3} style={{borderRight: '1px solid #ccc'}}>
                    {CoachList.map((coach, indx)=>{
                        return (
                            <div key={`${indx}-${coach.name}`} onClick={()=>{this.redirectCoach(indx)}}>
                                <CoachPreview name= {coach.name} profile_pic={coach.profile_pic}></CoachPreview>
                            </div>
                        )
                    })}
                    
                </Grid>
                <Grid item xs={9}>
                    <CoachDetail name={CoachList[activeCoach].name} profile_pic={CoachList[activeCoach].profile_pic}></CoachDetail>
                </Grid>
            </Grid>
        )
    }
}
export default Coaches;