import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Header from './header/header.component';
import Home from './home/home.component';
import Coaches from './coaches/coaches.component';
import Signin from './signin/signin.component';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeRoute: 1
    }
  }
  changeRoute(route){
    this.setState({activeRoute: route});
  }
  render(){
    let {activeRoute} = this.state;
    return (
      <div className="App">
        <Grid container direction="column">
          <Grid item style={{height: '50px', padding: '10px', backgroundColor: '#f1f1f1'}}>
            {/* <Header></Header> */}
            <button onClick={()=>{this.changeRoute(0)}}>Home</button>
            <button onClick={()=>{this.changeRoute(1)}}>Coaches</button>
            <button onClick={()=>{this.changeRoute(2)}}>Signin</button>
          </Grid>
          <Grid item>
            {activeRoute===0 && <Home></Home>}
            {activeRoute===1 && <Coaches></Coaches>}
            {activeRoute===2 && <Signin></Signin>}
          </Grid>
        </Grid>
      </div>
    );
  }  
}

export default App;
