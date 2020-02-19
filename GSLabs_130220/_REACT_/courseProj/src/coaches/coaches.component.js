import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {getHt, returnURL} from '../services';
import CoachPreview from '../coach-preview/coach-preview-component';
import CoachDetail from '../coach-detail/coach-detail';
import {Route} from 'react-router-dom';
const axios = require('axios');

let docHt = getHt()-100;
class Coaches extends Component{
    constructor(props){
        super(props);
        this.state={activeCoach: this.props.match.params.id||0, coachList: []}
        console.log("History",this.props);
    }
    componentDidMount(){
        let self = this;
        axios.get(returnURL('coachList'))
        .then(function (response) {
            console.log(response.data.ConsultantList[0]);
            self.setState({coachList: response.data.ConsultantList[0]})
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    redirectCoach(indx){
        // console.log(this.props);
        // this.props.history.push(`/coaches/${indx}`);
        this.setState({activeCoach: indx}, ()=>{
            console.log("Changed")
        })
    }
    // shouldComponentUpdate(nxtProps, nxtState){
    //     if(!(this.state.activeCoach===nxtProps.match.params.id))
    //     {
    //         console.log("Changing ...")
    //         this.setState({activeCoach: this.props.match.params.id});
    //         return true
    //     }
    //     return false;
    // }
    renderDOM(){
        let {activeCoach, coachList} = this.state;
        console.log("activeCoach",activeCoach)
        if((activeCoach ||activeCoach===0) && coachList.length>0)
        {
            console.log("Calling coachDetail")
            return (
                <Grid container direction="row" style={{height: docHt, marginTop: '50px'}}>
                    <Grid item xs={3} style={{borderRight: '1px solid #ccc'}}>
                        {coachList.map((coach, indx)=>{
                            return (
                                <div key={`${indx}-${coach.name}`} onClick={()=>{this.redirectCoach(indx)}}>
                                    <CoachPreview name= {coach.name} profile_pic={coach.profile_pic}></CoachPreview>
                                </div>
                            )
                        })}
                        
                    </Grid>
                    <Grid item xs={9}>
                    {/* <Route path="/:id" render={()=><CoachDetail name={coachList[activeCoach].name} profile_pic={coachList[activeCoach].profile_pic}></CoachDetail>}/> */}
                    <CoachDetail name={coachList[activeCoach].name}></CoachDetail>}/>
                    </Grid>
                </Grid>
            )
        }
        
        return (
            <Grid container direction="row" style={{height: docHt, marginTop: '50px'}}>
                Please wait. Loading data ...
            </Grid>
        )
    }
    render(){
        console.log("render called")     
        return (
            <div>
                {this.renderDOM()}
            </div>
        )
    }
}
export default Coaches;