import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from './header.style';
class Header extends Component{
    render(){
        return (
            <Grid container direction="row" justify="space-between" style={Styles.headerContainer}>
                <Grid item xs={8}>
                    <Grid container direction="row" justify="flex-start">
                        <Grid item xs={2} style={Styles.menuItem}>
                            Home
                        </Grid>
                        <Grid item xs={2} style={Styles.menuItem}>
                            Coaches
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4} style={Styles.menuItem}>Signin</Grid>
            </Grid>
        )
    }
}
export default Header;