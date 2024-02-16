import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup; 
  errorMsg: string;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService:UserService) { }

  ngOnInit() {
    this.loginForm= this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required]]
    });
  }
  login(){
    // console.log("Here object", this.loginForm.value);
this.userService.login(this.loginForm.value).subscribe(
  (response)=>{
    console.log("Here response after login", response);
    if (response.msg == "2") {
      sessionStorage.setItem('jwt', response.user);
      this.router.navigate([`profile/${this.loginForm.value.email}`]);
    } else {
      this.errorMsg = "Please CheckEmail/Pwd";
    }
    
  })
  }

}
