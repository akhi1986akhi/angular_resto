import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  getvalue:any = [];
  constructor(private formBuilder:FormBuilder, private router:Router, private _http:HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  logIn(){
    this._http.get("http://localhost:3000/signup").subscribe((res)=>{
      console.log(res);
      this.getvalue = res;

      console.log(this.getvalue['0'].id);
      const user = this.getvalue.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if(user){
        alert("Login Successfull");
        this.loginForm.reset();
        this.router.navigate(['/resto-dash']);
      } else{
        alert("User Not Found");
      }
    }, err =>{
      alert("Error!")
    }
    )

  }

}
