import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Header from './header/header.component';
import Home from './home/home.component';
import Coaches from './coaches/coaches.component';
import Signin from './signin/signin.component';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeRoute: 1
    }
  }
  
  render(){
    let {activeRoute} = this.state;
    return (
      <Router>
        <div className="App">
          <Grid container direction="column">
            <Grid item style={{height: '50px', padding: '10px', backgroundColor: '#f1f1f1'}}>
              <Header></Header>
              
              {/* <button onClick={()=>{this.changeRoute(0)}}>Home</button>
              <button onClick={()=>{this.changeRoute(1)}}>Coaches</button>
              <button onClick={()=>{this.changeRoute(2)}}>Signin</button> */}
            </Grid>
            {/* <Grid item>
              {activeRoute===0 && <Home></Home>}
              {activeRoute===1 && <Coaches></Coaches>}
              {activeRoute===2 && <Signin></Signin>}
            </Grid> */}
            {/* <Route exact path="/home" render={()=><Auth><Home/></Auth>}/> */}
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/coaches/:id?" component = {Coaches}/>
              <Route path="/signin" component={Signin}/>
              <Route path="*" render={()=><div>Uh oh! You lost?</div>}/>  
            </Switch>
          </Grid>
        </div>
      </Router>
    );
  }  
}

export default App;
