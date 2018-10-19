import React, {Component} from 'react'

const WithLocation = (WrappedComponent)=>{
    console.log(WrappedComponent);
    console.log("",WrappedComponent);
    class HOC extends Component {
        constructor(props){
            super(props);
            console.log("HOC props",this.props);
            this.state={country: 'India'}
        }
        render() {
            return (
                <WrappedComponent {...this.props} country={this.state.country}/>
            );
        }
    }
    return HOC;
}
export default WithLocation;