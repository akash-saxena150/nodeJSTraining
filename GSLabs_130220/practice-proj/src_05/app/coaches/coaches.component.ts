import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import {LoggingService} from '../logging-service'
import {CoachListService} from '../coach-list.service'
@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css']
})
export class CoachesComponent implements  OnInit{
  activeCoach = 0;
  coachDetailTxt = 'Here is the coach detail';
  coachList = [];
  @ViewChild('randomPTag') randomPTag: ElementRef;
  constructor(private logging: LoggingService, private coachListService: CoachListService) {
    this.coachListService.emitCoachName.subscribe((name: string)=>{alert(name)});
   }

  
  ngOnInit(): void {
    console.log(this.coachListService);
    this.coachList = this.coachListService.coaches;
    this.activeCoach = this.coachListService.activeCoach;
    this.coachListService.emitActiveCoach.subscribe((indx)=>{
      this.activeCoach = indx
    })
    // console.log("OnINIT initialized");
    //console.log('Text Content: ' + this.randomPTag.nativeElement.textContent);
  }
  // ngDoCheck(): void{
  //   console.log("Do Check initialized");
  // }
  // ngAfterContentInit(){
  //   console.log("After content init initialized")
  // }
  // ngAfterContentChecked(){
  //   console.log("After content Checked initialized")
  // }
  // ngAfterViewInit(){
  //   console.log("After View Init initialized");
  //   //console.log('Text Content: ' + this.randomPTag.nativeElement.textContent);
  // }
  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked called!');
  // }

  // ngOnDestroy() {
  //   console.log('ngOnDestroy called!');
  // }
  changeActiveCoach(indx){
    this.coachListService.changeActiveCoach(indx);
    this.coachListService.emitActiveCoach.emit(indx);
  }
  deleteCoach(indx){
    this.coachListService.deleteCoach(indx);
  }
  getImg(){
    return "https://gsg-image-uploads.s3-accelerate.amazonaws.com/webcontent/img/coaches/profilePic/"+this.coachListService.coaches[this.activeCoach].profile_pic;
  }

}
