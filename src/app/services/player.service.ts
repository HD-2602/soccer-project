import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
playerURL: string = "http://localhost:3000/api/players";
  constructor(private http:HttpClient) { }

  addPlayer(player){
    return this.http.post<{msg: string}>(this.playerURL, player);
  }

  getAllPlayers(){
    return this.http.get<{playersTab: any }>(this.playerURL);
  }

  getPlayerById(id){
    return this.http.get<{player: any }>(`${this.playerURL}/${id}`);
  }

  editPlayer(newPlayer){
    return this.http.put<{msg: string }>(this.playerURL, newPlayer);
  }
  deletePlayerById(id){
    return this.http.delete<{isDeleted: boolean }>(`${this.playerURL}/${id}`);
  }
}
