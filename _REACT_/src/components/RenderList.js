import React, {Component} from 'react';
class RenderList extends Component{
    constructor(props){
        super(props);
    }
    componentWillReceiveProps(nextProps){
        console.log("[RenderList] component will receive props");
        console.log(this.props);
        console.log(nextProps);
    }
    render(){
        return(
            <ul>
             {this.props.list.map((el, indx)=><li key={indx} onClick={this.props.deleteList.bind(this.props.that, indx)}>{el.name}</li>)} 
            </ul>
        )
    }
}
export default RenderList;