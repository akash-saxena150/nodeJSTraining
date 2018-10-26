import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {apiService} from '../api.service'
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  //name = new FormControl('Akash');
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
  data: {}
  constructor(private fb: FormBuilder, private apiService: apiService) { 
    //this.formData.name.setValue('Akash'); 
  }
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });
  updateName(key){
    // this.profileForm.setValue({
    //   firstName: "Akashay",
    //   lastName: ''
    // });
    this.profileForm.patchValue({
      firstName: "Akashay"
    })
  }
  onSubmit(){
    console.log(this.profileForm)
  }
  getLocation(){
    this.apiService.getLocation('https://ipinfo.io/?token=22065f6a076bdf')
    .subscribe((data: {}) => {
      console.log(data);
      this.data = {...data};
    });
  }
  ngOnInit() {
  }

}
