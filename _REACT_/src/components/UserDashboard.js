import React, {Component} from 'react';
import Post from './Post';
import {Route} from 'react-router-dom'

class UserDashboard extends Component{
    render(){
        return (
            <div>
                <h1>Welcome User</h1>
                <div>User dashboard content goes here</div>
                <Route path={`${this.props.match.url}/:post`} exact component={Post}/>
            </div>
        )
    }
}
export default UserDashboard;