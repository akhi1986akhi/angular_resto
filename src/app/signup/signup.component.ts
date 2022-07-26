import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router,private api:ApiService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [''],
      email: [''],
      contact: [''],
      password: ['']
    })
  }

  signUp() {
    console.log(this.signupForm.value);
    // this._http.post("http://localhost:3000/signup/", this.signupForm.value).subscribe(res => {
    //   alert("Registration Successfull");
    //   this.signupForm.reset();
    //   this.router.navigate(['login'])
    // }, err => {
    //   alert("Error");
    // }

    // )
    this.api.signup(this.signupForm.value).subscribe(res =>{
      alert("Registration Successfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    }, err =>{
      alert("Error");
    }
    )
    
    // console.log("Signup Successfull");
  }

}
