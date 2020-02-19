import { OnInit, Injectable } from "@angular/core";
@Injectable()
export class LoggingService implements OnInit{
    ngOnInit(){
        //console.log("I was clicked!")
    }
    logger(){
        console.log("I was clicked")
    }
}