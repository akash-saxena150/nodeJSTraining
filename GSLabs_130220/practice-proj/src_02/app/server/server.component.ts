import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerComponent implements OnInit {
  @Input('serverElement') element: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit(): void {
  }

}
