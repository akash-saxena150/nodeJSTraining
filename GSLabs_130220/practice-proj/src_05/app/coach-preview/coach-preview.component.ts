import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy, ContentChild, ElementRef, AfterContentInit } from '@angular/core';
import {getImg} from '../utilities'

@Component({
  selector: 'app-coach-preview',
  templateUrl: './coach-preview.component.html',
  styleUrls: ['./coach-preview.component.css']
})
export class CoachPreviewComponent implements 
OnInit{
  getImg = getImg;
  @Input('coachData') coach:{name: string, profile_pic: string}
  @ContentChild('para') paragraph: ElementRef;
  constructor() { }
  // getImg(){
  //   return "https://gsg-image-uploads.s3-accelerate.amazonaws.com/webcontent/img/coaches/profilePic/"+this.coach.profile_pic;
  // }
  // ngOnChanges(changes: SimpleChanges){
  //   console.log(changes);
  // }

  ngOnInit(): void {
    //console.log("COach onINIT initialized")
  }
  // ngAfterContentInit(){
  //   console.log("After content init initialized");
  //   console.log(this.paragraph.nativeElement.textContent)
  // }
  // ngOnDestroy(){
  //   console.log("Coach on destroy initialized")
  // }

}
