import React, {Component} from 'react';
import './App.css';
import Cockpit from './cockpit/Cockpit.component';
import Servers from './servers/Servers.component';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        serversData: [
            {name: 'Andromeda', status: true},
            {name: 'Milky way', status: false},
            {name: 'Star wars', status: false}
        ],
        serverNameInp: "Andromeda"
    }
}

toggleStatus(){
    let tempArr = this.state.serversData.slice(0);
    for(let i = 0; tempArr[i]; i++)
    {
        tempArr[i].status = !tempArr[i].status;
    }
    this.setState({serversData: tempArr});
}
changeInp(ev){
  this.setState({serverNameInp: ev.target.value});
}
addServer(){
  let tempArr = this.state.serversData.slice(0);
  tempArr.push({
    name: this.state.serverNameInp,
    status: (Math.random() > .5)?true:false
  });
  this.setState({serversData: tempArr}, ()=>{
    console.log(this.state.serversData);
  });
  
}
  render(){
    let {serversData, serverNameInp} = this.state;
    return (
      <div>
        {/* <Cockpit/> */}
        <div className="base">
          <div>
            <input type="text" style={{width: '200px'}} value={serverNameInp} onChange={(e)=>{this.changeInp(e)}}/>
          </div>
          <div>
                <button onClick={()=>{this.addServer()}}>Add server</button>
            </div>
            <hr/>
            <div>
                <button onClick={()=>{this.toggleStatus()}}>Toggle status</button>
            </div>            
            <Servers serversData = {serversData}/>
        </div>
      </div>
    );
  }
}
export default App;
