import React, { Component } from "react";
import Server from "../server/Server.component";
class Servers extends Component {
  constructor(props) {
    super(props);
    this.state={
        selectedServer: null
    }
  }
  renderServers() {
    return this.props.serversData.map((server, i) => {
      return (
        <div key={`${i}-${server.name}`} onClick={()=>{this.setState({selectedServer: i})}}>
          <div>{i}</div>
          <Server serverName={server.name} serverStatus={server.status} />
        </div>
      );
    });
  }
  render() {
    let { serversData } = this.props;
    let {selectedServer} = this.state
    return (
      <div>
        <h2>List of servers</h2>
        <hr />
        <ul style={{ listStyle: "none" }}>
          {/* <Server serverName = {serversData[0].name} serverStatus = {serversData[0].status}/>
                    
                    <Server serverName = {serversData[1].name} serverStatus = {serversData[1].status}/>
                    
                    <Server serverName = {serversData[2].name} serverStatus = {serversData[2].status}/>  */}
          {this.renderServers()}
        </ul>
        <hr/>
        {(selectedServer || selectedServer===0) && <div>
            {serversData[selectedServer].name} was clicked!
        </div>}
      </div>
    );
  }
}
export default Servers;
