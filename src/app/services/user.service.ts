import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL: string="http://localhost:3000/api/users";

  constructor(private http: HttpClient) { }
  
  getAllUsers(){
    return this.http.get(this.userURL);
  }

  login(user){
    return this.http.post<{msg: string, user: any}>(this.userURL + "/login", user);

  }
  
  signup(user: any, avatar: File){
    let formData= new FormData();
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("pwd", user.pwd);
    formData.append("role", user.role);
    formData.append("img", avatar);
    return this.http.post<{ msg: string }>(this.userURL + "/signup", formData);
  }
  getUserByEmail(email){
    return this.http.get<{user: any }>(`${this.userURL}/${email}`);
  }
  editUser(newUser){
return this.http.put<{msg: string}>(this.userURL, newUser);
  }
}
