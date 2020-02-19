import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupform: NgForm
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  formSubmit(f){
    console.log(f);
  }
}
