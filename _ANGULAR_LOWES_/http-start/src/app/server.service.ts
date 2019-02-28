import { Headers, Http, Response } from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ServerService{
    constructor(private http: Http){}
    storeServer(servers: any[]){
        // return this.http.post(
        //     'https://learningjs-3ee80.firebaseio.com/servers.json',servers
        // )
        return this.http.put(
            'https://learningjs-3ee80.firebaseio.com/servers.json',servers
        )
    }
    getServer(){
        return this.http.get(
            'https://learningjs-3ee80.firebaseio.com/servers.json'
        )
    }

}