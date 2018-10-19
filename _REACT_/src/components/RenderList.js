import React, {Component, PureComponent} from 'react';
class RenderList extends PureComponent{
    constructor(props){
        super(props);
        console.log("[RenderList.js] constructor loaded ...");
        this.state = {
            propStates: [],
            counter: 0
        }
    }
    componentWillMount(){
        console.log("[RenderList.js] Component will mount ...");
    }
    componentDidMount(){
        console.log("[RenderList.js] Component did mount ...");
    }
    componentWillReceiveProps(nextProps){
        console.log("[RenderList.js] component will receive props ...");
        console.log("[RenderList.js] will receive props: old props", this.props);
        console.log("[RenderList.js] will receive props: new props", nextProps);
    }
    componentWillUpdate(nextProps, nextState){
        console.log("[RenderList.js] component will update ...");
        console.log("[RenderList.js] will update: old props", this.props);
        console.log("[RenderList.js] will update: new props", nextProps);
        console.log("[RenderList.js] will update: old state", this.state);
        console.log("[RenderList.js] will update: new state", nextState);
    }
    componentDidUpdate(){
        console.log("[RenderList.js] component did update");
    }
    count(multiplicationFactor){
        let currCount = this.state.counter;
        currCount = (currCount>0 || multiplicationFactor>0)?currCount + multiplicationFactor*1: currCount;
        this.setState({counter: currCount});
    }
    render(){
        console.log("[RenderList.js] rendered ...");
        return(
            <div>
                <h1>List of users from {this.props.country}</h1>
            <ul>
             {this.props.list.map((el, indx)=><li key={indx} onClick={this.props.deleteList.bind(this.props.that, indx)}>{el.name}</li>)} 
            </ul>
            <div>
                <div style={{padding: '5px 10px', borderRadius: '5px', background: '#000', color: '#fff', display: 'inline-block', cursor: 'pointer'}} onClick={this.count.bind(this,-1)}>-</div>
                <div style={{padding: '5px 10px', display: 'inline-block'}}>{this.state.counter}</div>
                <div style={{padding: '5px 10px', borderRadius: '5px', background: '#000', color: '#fff', display: 'inline-block', cursor: 'pointer'}} onClick={this.count.bind(this,1)}>+</div>
            </div>
            </div>
            
        )
    }
}
export default RenderList;