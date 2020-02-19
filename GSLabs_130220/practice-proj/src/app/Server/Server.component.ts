import {Component, Input} from '@angular/core';
import {ServerListService} from '../serverlist-service'
@Component({
    selector:'app-server',
    templateUrl: './Server.template.html'
})
export class ServerComponent {
    @Input('serverData') server:{name: string, status: boolean};
    @Input() indx: number;
    constructor(private serverListService: ServerListService){
       console.log("server",this.server); 
    }
    deleteServer(indx){
        console.log("indx",indx);
        this.serverListService.deleteServer(indx);
    }
    highlightServer(indx){
        this.serverListService.changeServerHighlight(indx);
        this.serverListService.emitHighlightedServer.emit(indx);
    }
    getStyle(){
        return {
            border: `1px solid ${this.server.status?'green':'red'}`
        }
    }
}

