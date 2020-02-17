import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from './header.style';
import {NavLink} from 'react-router-dom'
class Header extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        console.log(this.props);
        return (
            <Grid container direction="row" justify="space-between" style={Styles.headerContainer}>
                <Grid item xs={8}>
                    <Grid container direction="row" justify="flex-start">
                        <Grid item xs={2} style={Styles.menuItem}>
                            <NavLink exact to="/" activeClassName="activeLink">Home</NavLink>
                        </Grid>
                        <Grid item xs={2} style={Styles.menuItem}>
                            <NavLink to="/coaches" activeClassName="activeLink">Coaches</NavLink>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4} style={Styles.menuItem}>
                    <NavLink to="/signin" activeClassName="activeLink">Signin</NavLink>
                </Grid>
            </Grid>
        )
    }
}
export default Header;