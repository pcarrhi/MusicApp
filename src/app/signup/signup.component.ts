import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../app/shared/user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Input() formControlItem: FormControl;


  email:string;
  password: string;
  signupForm: FormGroup;

  constructor(
    private afAuth: UserService, 
    private router: Router,
    private fb: FormBuilder
    ) {
      this.signupForm = 
      this.fb.group({
        email:['', Validators.required],
        password: ['', Validators.required]
      })
      this.email = this.signupForm.controls['email'].value;
      this.password = this.signupForm.controls['password'].value;

      //this.signupForm.valueChanges.subscribe(console.log);
    }

  ngOnInit(): void {

  }

  register(){
    const formValue = this.signupForm.value;
    this.afAuth.register(formValue.email,formValue.password);
  }

  onSubmit() {
    if(this.signupForm.invalid) {
      return null;
    }
  }
}
