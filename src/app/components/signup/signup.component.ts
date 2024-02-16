import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // Form Id
  signForm: FormGroup;
  imagePreview: string;
  errorMsg: string;
  path: string;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.path = this.router.url;
    console.log("Here path", this.path);
    
    this.signForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      img: [""]
    });
  }
  signup() {
    let role = (this.path == "/signupAdmin") ? "admin" : "client";
    this.signForm.value.role = role;
    console.log("Here object", this.signForm.value);
    this.userService.signup(this.signForm.value, this.signForm.value.img).subscribe(
      (response) => {
        (response.msg == "1") 
        ?this.router.navigate(["signin"])
        :this.errorMsg = "Email Exist";
      }
    );


  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signForm.patchValue({ img: file });
    this.signForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

}
