import { Component, OnInit } from '@angular/core';
import {coachData} from '../config'
@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css']
})
export class CoachesComponent implements OnInit {
  coachesList = coachData;
  activeCoach = 0;
  constructor() {
    console.log(this.coachesList);
   }

  ngOnInit(): void {
  }
  getImg(){
    return "https://gsg-image-uploads.s3-accelerate.amazonaws.com/webcontent/img/coaches/profilePic/"+this.coachesList[this.activeCoach].profile_pic;
  }

}
