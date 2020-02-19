import { Component, OnInit } from '@angular/core';
import {LoggingService} from '../logger-service';
import {CoachListService} from '../coachlist-service'
@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css'],
  providers: [LoggingService]
})
export class CoachesComponent implements OnInit {
  coachesList = [];
  activeCoach = 0;
  constructor(private loggingService: LoggingService, private coachListService: CoachListService) { 
    this.coachListService.selectCoach.subscribe((val)=>{
      this.activeCoach = val;
    })
  }

  ngOnInit(): void {
    //LoggingService.logger();
    this.coachesList = this.coachListService.coachData;
  }
  
  getImg(){
    return "https://gsg-image-uploads.s3-accelerate.amazonaws.com/webcontent/img/coaches/profilePic/"+this.coachesList[this.activeCoach].profile_pic;
  }

}
