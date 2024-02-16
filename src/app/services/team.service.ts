import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamURL : string= "http://localhost:3000/api/teams";


  constructor(private httpClient : HttpClient) { }

  getAllTeams(){
    return this.httpClient.get<{ teams : any, message : string }>(this.teamURL);
  }

  getTeamById(x){
    return this.httpClient.get<{ team : any }>(`${this.teamURL}/${x}`);
  }

  deleteTeam(y){
    return this.httpClient.delete(`${this.teamURL}/${y}`);
  }

  addTeam(teamObj){
    return this.httpClient.post<{ message : string }>(this.teamURL, teamObj);
  }

  editTeam(newTeam){
    return this.httpClient.put(this.teamURL, newTeam);
  }
}
