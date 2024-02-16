import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchURL: string ="http://localhost:3000/api/matches";

  
  constructor(private httpClient: HttpClient) { }


  getAllMatches(){
    return this.httpClient.get<{ matches: any, message: string }>(this.matchURL);
  }

  getMatchById(x){
    return this.httpClient.get<{match: any}>(`${this.matchURL}/${x}`);
  }

   
  deleteMatch(y){
    return this.httpClient.delete<{ msg : string }>(`${this.matchURL}/ ${y}`); 
  }

  
  addMatch(matchObj){
    return this.httpClient.post<{message : string }>(this.matchURL, matchObj); 
  }
  // 
  
  
  editMatch(newMatch){
    return this.httpClient.put(this.matchURL, newMatch); 
  }

  // serchMatchs
  search(obj){
    return this.httpClient.post<{findedMatches: any, message: string }>(this.matchURL+"/searchMatches", obj);
  }
}
