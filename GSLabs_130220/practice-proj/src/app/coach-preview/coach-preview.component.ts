import { Component, OnInit, Input } from '@angular/core';
import {CoachListService} from '../coachlist-service'
@Component({
  selector: 'app-coach-preview',
  templateUrl: './coach-preview.component.html',
  styleUrls: ['./coach-preview.component.css']
})
export class CoachPreviewComponent implements OnInit {
  @Input('coachData') coach:{name: string, profile_pic: string}
  @Input() indx: number;
  constructor(private coachListService: CoachListService) { }
  getImg(){
    return "https://gsg-image-uploads.s3-accelerate.amazonaws.com/webcontent/img/coaches/profilePic/"+this.coach.profile_pic;
  }
  deleteCoach(indx){
    //this.coachListService.deleteCoach(this.indx);
  }
  selectCoach(){
    this.coachListService.selectCoach.emit(this.indx);
  }
  ngOnInit(): void {

  }

}
