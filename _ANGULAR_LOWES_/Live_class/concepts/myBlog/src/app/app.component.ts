import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeScreen = 'recipe';
  onScreenChange(screen: {activeScreen: string}){
    this.activeScreen = screen.activeScreen;
  }
}
