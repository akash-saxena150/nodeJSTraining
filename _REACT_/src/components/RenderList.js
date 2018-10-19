import React, {Component, PureComponent} from 'react';
class RenderList extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            propStates: [],
            counter: 0
        }
    }
    
    count(multiplicationFactor){
        let currCount = this.state.counter;
        currCount = (currCount>0 || multiplicationFactor>0)?currCount + multiplicationFactor*1: currCount;
        this.setState({counter: currCount});
    }
    render(){
        console.log("RenderList props", this.props);
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