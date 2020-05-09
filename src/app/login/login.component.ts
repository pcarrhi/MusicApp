import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


import { Router } from '@angular/router';
import { UserService } from '../../app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() formControlItem: FormControl;


  email:string;
  password: string;
  loginForm: FormGroup;


  constructor(private afAuth: UserService, private router: Router, private fb:FormBuilder) {
    this.loginForm = 
      this.fb.group({
        email:['', Validators.required],
        password: ['', Validators.required]
      })
      this.email = this.loginForm.controls['email'].value;
      this.password = this.loginForm.controls['password'].value;

  }

  //login facebook or google

  ngOnInit(): void {
  }

  login(){
    const formValue = this.loginForm.value;
    this.afAuth.login(formValue.email, formValue.password)
    this.email = this.password = '';
  }

  onSubmit() {
    if(this.loginForm.invalid) {
      return null;
    }
  }

}
