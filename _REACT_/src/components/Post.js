import React, {Component} from 'react';

class UserDashboard extends Component{
    render(){
        console.log(this.props);
        let {match} = this.props;
        return (
            <div>
                <h1>Here's is your post of the day</h1>
                <div>{match.params.post}</div>
            </div>
        )
    }
}
export default UserDashboard;