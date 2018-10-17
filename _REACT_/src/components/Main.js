import React, { Component } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import RenderList from './RenderList';

class Main extends Component {
    constructor(props){
        super(props);
        this.state={action: 0,
        list: [{name: "Akash"}, {name: "Akshay"}, {name: "Shraddha"}]
        };
        console.log("[Main.js] constructor loaded ...");
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
        return (
            <div>
                <div>
                    <button onClick={this.changeAction.bind(this,0)}>Sign up</button>
                    <button onClick={this.changeAction.bind(this, 1)}>Sign in</button>
                </div>
                {/* {this.state.action===0 && <SignUp/>}
                {this.state.action === 1 && <SignIn/>} */}
                <div><RenderList deleteList={this.deleteList} that={this} list={this.state.list}/></div>
        </div>
        );
  }
}

export default Main;
