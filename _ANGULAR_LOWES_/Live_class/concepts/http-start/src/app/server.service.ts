import { Injectable } from '@angular/core';
import {Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ServerService{
    constructor(private http: Http){}
    createServers(servers: any[]){
        return this.http.put('https://learningjs-3ee80.firebaseio.com/servers.json', servers)
    }
    getServers(){
        return this.http.get('https://learningjs-3ee80.firebaseio.com/servers.json')
        .map(
            (response: Response) => {
            const data = response.json();
            return data;
            }
        )
        .catch(
            (error: Response) => {
            return Observable.throw('Something went wrong');
            }
        );
    }
}