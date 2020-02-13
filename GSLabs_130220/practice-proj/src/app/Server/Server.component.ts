import {Component} from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl: './Server.template.html'
})
export class ServerComponent {
    status = 'Offline';
    name="Andromeda";
    constructor(){
        let test = Math.random();
        if(test>.5)
            this.status = "Online";
    }
    getStyle(){
        return {
            border: `1px solid ${this.status==='Online'?'green':'red'}`
        }
    }
}

