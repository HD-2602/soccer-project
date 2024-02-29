import  jwt_decode  from 'jwt-decode';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  userProfile: any;
  token: string;
  decodedToken: any;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.token= sessionStorage.getItem("jwt");
    this.decodedToken= this.decodeToken(this.token);

    this.profileForm = this.formBuilder.group({
      firstName: [""],
      lastName: [""],
      email: [""],
      pwd: [""],
    });
  
    this.userService.getUserByEmail(this.decodedToken.email).subscribe(
      (response) => {
        console.log("Here response From BE", response.user);
        this.userProfile = response.user;
        
      })
  }
  edit() {
    this.userService.editUser(this.userProfile).subscribe(
      (response) => {
        console.log("Here response after update from BE", response.msg);

      })
  }
  decodeToken(token: string) {
    return jwt_decode(token);
    }
}
