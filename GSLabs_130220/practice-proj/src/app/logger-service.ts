import { OnInit, Injectable } from '@angular/core';
@Injectable()
export class LoggingService implements OnInit {
    constructor(){}
    ngOnInit(){
        console.log("First log")
    }
    setLog(msg){
        console.log(msg||"Gotta log something!")
    }
}