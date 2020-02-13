import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coach-preview',
  templateUrl: './coach-preview.component.html',
  styleUrls: ['./coach-preview.component.css']
})
export class CoachPreviewComponent implements OnInit {
  coachImg = "melvin.jpg"
  name = "Melvin Cherian"
  constructor() { }
  getImg(){
    return "https://gsg-image-uploads.s3-accelerate.amazonaws.com/webcontent/img/coaches/profilePic/"+this.coachImg;
  }
  ngOnInit(): void {
  }

}
