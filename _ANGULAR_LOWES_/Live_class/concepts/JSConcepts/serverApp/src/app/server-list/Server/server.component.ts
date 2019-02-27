import {Component} from '@angular/core';
@Component({
    selector: 'app-server',
    templateUrl: './server.template.html'
})
export class Server{
    serverStatus = 'online';
    constructor(){
        let status = 10*Math.random();
        this.serverStatus = status>=5?'online':'offline';
    }
}