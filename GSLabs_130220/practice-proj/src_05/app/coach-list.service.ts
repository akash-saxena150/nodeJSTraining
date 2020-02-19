import { Injectable, EventEmitter } from '@angular/core';
import {coachData} from './config';
@Injectable({
  providedIn: 'root'
})
export class CoachListService {
  coaches = coachData;
  activeCoach = 0;
  emitCoachName = new EventEmitter<string>();
  emitActiveCoach = new EventEmitter<number>();
  constructor() { }
  changeActiveCoach(indx){
    console.log(indx);
    this.activeCoach = indx
  }
  deleteCoach(indx){
    this.coaches.splice(0,1);
  }
}
