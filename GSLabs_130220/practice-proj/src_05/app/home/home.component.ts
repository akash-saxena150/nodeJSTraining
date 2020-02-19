import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges,
OnInit, 
DoCheck, 
AfterContentInit, 
AfterContentChecked,
AfterViewInit  {
  @Output() onRouteChange = new EventEmitter<{route: number}>();
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void{
    console.log("onChanges initialized");
    console.log("Changes: ", changes);
  }
  ngOnInit(): void {
    console.log("OnINIT initialized");
  }
  ngDoCheck(): void{
    console.log("Do Check initialized");
  }
  ngAfterContentInit(){
    console.log("After content init initialized")
  }
  ngAfterContentChecked(){
    console.log("After content Checked initialized")
  }
  ngAfterViewInit(){
    console.log("After View Init initialized")
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
  changeRoute(route){
    this.onRouteChange.emit({route: route})
  }
}
