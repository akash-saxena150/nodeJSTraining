import React, { Component } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import RenderList from './RenderList';
import HOC from './HOC';
import CountryContext from './Context';
import {BrowserRouter, Route} from 'react-router-dom';

class Main extends Component {
    constructor(props){
        super(props);
        this.state={action: 0,
        list: [{name: "Akash"}, {name: "Akshay"}, {name: "Shraddha"}]
        };
        console.log("[Main.js] constructor loaded ...");
        console.log("HOC",HOC);
    }
    componentWillMount(){
        console.log("[Main.js] component will mount ...");
    }
    componentDidMount(){
        console.log("[Main.js] component did mount ...");
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
        console.log(this.state)
    }
    takeAction(key){
        console.log(this.state[key])
    }
    deleteList(indx){
        let tempArr = this.state.list.slice();
        tempArr.splice(indx, 1);
        console.log("tempArr",tempArr);
        this.setState({list: tempArr});
    }
    render() {
        console.log("[Main.js] render executed");
        // const RenderList = <RenderList deleteList={this.deleteList} that={this} list={this.state.list}/>;
        const HOCComponent = HOC(RenderList);
        return (
            <BrowserRouter>
            <div>
                <Route path="/signIn" exact component={SignIn}/>
                <Route path="/signUp" component={SignUp}/>
                <div>
                    <button onClick={this.changeAction.bind(this,0)}>Sign up</button>
                    <button onClick={this.changeAction.bind(this, 1)}>Sign in</button>
                </div>
                <CountryContext.Provider value={{"country": "Srilanka"}}>
                 {this.state.action===0 && <SignUp/>}
                 </CountryContext.Provider>
                {this.state.action === 1 && <SignIn/>} 
                {/* <HOCComponent deleteList={this.deleteList} that={this} list={this.state.list}/> */}
        </div>
        </BrowserRouter>
        );
  }
}

export default Main;
