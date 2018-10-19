import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import style from "../App.css"

class Header extends Component{
    constructor(props){
        super(props);
        console.log("style",style);
    }
    render(){
        return(
            <ul className="App-header">
                <li className="App-lnk"><Link to={{pathname: "../signIn"}}>Sign in</Link></li>
                <li className="App-lnk"><Link to={{pathname: "../signUp"}}>Sign up</Link></li>
                <li className="App-lnk"><Link to="../list">List</Link></li>
            </ul>
        )
    }
}
export default Header