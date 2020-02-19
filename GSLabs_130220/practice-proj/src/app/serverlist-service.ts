import {EventEmitter, Injectable} from '@angular/core';
import {LoggingService} from './logger-service';
@Injectable()
export class ServerListService{
    serversData = [
        {name: 'Andromeda', status: true},
        {name: 'Milky way', status: false},
        {name: 'Star wars', status: true}
      ];
    highlightedServer: number = 0;
    emitHighlightedServer = new EventEmitter<number>();
    constructor(private loggingService: LoggingService){}
    deleteServer(indx){
        this.serversData.splice(indx,1);
        this.loggingService.setLog(`Server ${indx} was deleted`);
    }
    changeServerHighlight(indx){
        this.highlightedServer = indx;
        this.loggingService.setLog(`Server ${indx} was highlighted`);
    }
}