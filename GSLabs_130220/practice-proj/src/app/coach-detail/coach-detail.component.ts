import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.css']
})
export class CoachDetailComponent implements OnInit {
  name="Melvin Cherian";
  coachImg = "melvin.jpg"
  description = "Melvin is an engineer turned fitness professional residing in Pune, India. Melvin used to practise martial arts since his childhood days and has a few funny stories of the time. In college, he started lifting weights and fell in love with the sport of bodybuilding. Having done a couple of international certifications, Melvin helps people lose fat, gain muscle and craft beautiful physiques easily at the snap of a finger."
  constructor() { }
  ngOnInit(): void {
  }
  getImg(){
    return "https://gsg-image-uploads.s3-accelerate.amazonaws.com/webcontent/img/coaches/profilePic/"+this.coachImg;
  }

}
