import { Component, OnInit, Input } from '@angular/core';
import {getImg} from '../utilities'
import {CoachListService} from '../coach-list.service';
@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.css']
})
export class CoachDetailComponent implements OnInit {
  getImg=getImg;
  @Input() coach:{name: string, profile_pic: string, tagline: string}
  constructor(private coachListService: CoachListService) { 

  }
  alertCoachName(name){
    this.coachListService.emitCoachName.emit(name);
  }
  ngOnInit(): void {
  }

}
