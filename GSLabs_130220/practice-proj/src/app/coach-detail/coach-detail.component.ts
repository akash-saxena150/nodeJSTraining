import { Component, OnInit, Input } from '@angular/core';
import {LoggingService} from '../logger-service';
import {ActivatedRoute} from '@angular/router';
import {CoachListService} from '../coachlist-service';
@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.css']
})
export class CoachDetailComponent implements OnInit {
  // @Input() coach:{name: string, profile_pic: string, tagline: string}
  coach={};
  constructor(private route: ActivatedRoute, private coachListService: CoachListService) { 
    console.log("Coach detail",LoggingService);
  }
  
  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    let activeCoach = this.coachListService.coachData[this.route.snapshot.params.id]
    this.coach={
      name: activeCoach.name,
      profile_pic: activeCoach.profile_pic,
      tagLine: activeCoach.tagline
    }
  }
  getImg(){
    return "https://gsg-image-uploads.s3-accelerate.amazonaws.com/webcontent/img/coaches/profilePic/"+this.coach.profile_pic;
  }

}
