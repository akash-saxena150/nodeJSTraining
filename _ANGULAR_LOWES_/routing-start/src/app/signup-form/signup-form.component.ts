import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {apiService} from '../api.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  //name = new FormControl('');
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });
  constructor(private fb: FormBuilder, private apiService: apiService) { }
  profileForm = this.fb.group({
    firstName: [''],
    middleName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });
  updateName(key){
    this.profileForm.patchValue(
      {
        firstName: "Akash"
      }
    );
  }
  onSubmit(){
    console.log(this.profileForm.value)
  }
  getLocation(){
    this.apiService.getLocation('https://ipinasdg')
    .subscribe((data: {}) => {
      console.log(data);
    });
  }
  ngOnInit() {
  }

}
