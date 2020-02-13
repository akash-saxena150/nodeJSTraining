import React, {Component} from 'react'
class TestComponent extends Component{
    constructor(props){
        super(props);
        //console.log(props);
    }
    render(){
        console.log(this.props);
        let {name} = this.props;
        return (<div>
            {name}
        </div>)
    }
}
export default TestComponent