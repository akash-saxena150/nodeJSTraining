import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupform: NgForm;
  a:number = 10;
  answer='';
  user={
    username: '',
    email: '',
    question:'',
    answer: '' 
  };
  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupform.setValue({
    //     userData: {
    //       username: suggestedName,
    //       email: '',
    //     },
    //       secret: 'pet',
    //       questionAnswer: ''      
    //   })
    this.signupform.form.patchValue({
      userData:{
        username: suggestedName
      }
    })
    
  }
  formSubmit(f){
    console.log(this.signupform);
    this.submitted = true;
    let userData = this.signupform.value;
    this.user.username = userData.userData.username;
    this.user.email = userData.userData.email;
    this.user.question = userData.secret;
    this.user.answer = userData.questionAnswer
  }
}
