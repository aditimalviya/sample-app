import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  formheading='Sign Up Here!';

  signupform = new FormGroup({
    Name: new FormControl('', Validators.required),
    DOB: new FormControl('', Validators.required),
    Mobile: new FormControl('', Validators.required),
    emailid: new FormControl('', [
      Validators.required, 
      Validators.pattern("[^ @]*@[^ @]*")
    ])
  
  });

  onSubmit() {
    console.warn(this.signupform.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
