import React, { Component } from 'react';
import SignUp from './SignUp';
import RenderList from './RenderList';
import HOC from './HOC';
import CountryContext from './Context';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import UserDashboard from './UserDashboard';
import AsyncComponent from './HOC/AsyncComponent';

const AsyncNewPost = AsyncComponent(() => {
    return import('./SignIn');
});

class Main extends Component {
    constructor(props){
        super(props);
        this.state={action: 0,
        list: [{name: "Akash"}, {name: "Akshay"}, {name: "Shraddha"}]
        };
    }
   
    changeAction(val){
        this.setState({action: val});
    }
    changeInp(e, key, subKey){
        let tempObj = {};
        for(let k in this.state[key])
            {
                tempObj[k] = this.state[key][k];
            }
            tempObj[subKey] = e.target.value;
        this.setState({
            [key]: tempObj
        }); 
    }
    takeAction(key){
        console.log(this.state[key])
    }
    deleteList(indx){
        let tempArr = this.state.list.slice();
        tempArr.splice(indx, 1);
        this.setState({list: tempArr});
    }
    render() {
        // const RenderList = <RenderList deleteList={this.deleteList} that={this} list={this.state.list}/>;
        const HOCComponent = HOC(RenderList);
        let loggedInStatus = false;
        return (
            <BrowserRouter>
            <div>
                <Header/>
                <Switch>

                    <Route path="/signIn" component={AsyncNewPost}/>
                    
                    <Route path="/userdashboard" component={loggedInStatus?UserDashboard:null}/>
                    <Route path="/signUp" render={()=><h1>Hello! sign up this side</h1>}/>
                    <Route path="/signUp" exact component={SignUp}/>
                    <Route path="/list" render={(props)=><RenderList {...props} deleteList={this.deleteList} that={this} list={this.state.list}/>}
                    /> 
                    <Route path="/" render={()=><div>Hola there!</div>}/>
                    <Route render={() => <h1>Not found</h1>}/>
                 </Switch>
                {/* <HOCComponent deleteList={this.deleteList} that={this} list={this.state.list}/> */}
        </div>
        </BrowserRouter>
        );
  }
}

export default Main;
