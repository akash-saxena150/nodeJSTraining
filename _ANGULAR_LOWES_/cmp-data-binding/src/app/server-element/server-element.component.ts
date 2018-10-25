import { Component, OnInit, Input, ViewEncapsulation, SimpleChanges, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {
  @Input('srvElement') element: {name: string, type: string, content:string}
  constructor() { 
    console.log('[constructor] called');
  }
  ngOnChanges(changes: SimpleChanges){
    console.log("[onChange] called", changes);
    console.log(this.element.name);
  }
  ngOnInit() {
    console.log('[onInit] called')
  }
  ngDoCheck(){
    console.log("[DoCheck] called")
  }
  ngAfterContentInit(){
    console.log("[AfterContentInit] called")
  }
  ngAfterContentChecked(){
    console.log("[AfterContentChecked] called")
  }
  ngOnDestroy(){
    console.log("[OnDestroy] Component destroyed");
  }
}
