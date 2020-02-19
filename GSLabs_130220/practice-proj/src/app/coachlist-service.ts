import {coachData} from './config';
import { EventEmitter } from '@angular/core';
export class CoachListService{
    coachData = coachData;
    selectCoach = new EventEmitter<number>();
    constructor(){
        
    }
    deleteCoach(indx){
        this.coachData.splice(indx,1);
    }

}