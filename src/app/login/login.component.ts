import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users = [{'email' : 'abc@com.au', 'pwd' : '123'}];
  email = "";
  password = "";

  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  signIn(){
    if((this.email) == this.users[0].email && (this.password == this.users[0].pwd)){
      this.router.navigate(['/account']) 
      console.log("success")
    }
    else{
      console.log("failure")
    }
  } 
}
