import React, {Component} from 'react';
import { thisExpression } from '@babel/types';

function WithPartition (Component, props = {name: 'Melvin', profile_pic:"melvin.jpg"}) {
    return (class extends Component{
            render(){
                return (
                    <div>
                        <Component name={props.name} profile_pic={props.profile_pic}/>
                        <hr/>
                    </div>
                )

            }
        }
    )
}
export default WithPartition;
// class WithPartition extends Component{
//     render() {
//         return (<div>
//             <this.props.children></this.props.children>
//             <hr/>
//         </div>)
//     }
// }