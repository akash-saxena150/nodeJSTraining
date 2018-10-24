import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  formFields = {
    fName: 'Akash',
    lName: 'Saxena',
    email: 'akash@getsetgo.fitness',
    mobile: 12345,
    pass: ''
  }

  constructor() {}
  register(){
    console.log(this.formFields);
  }
  ngOnInit() {
  }

}
