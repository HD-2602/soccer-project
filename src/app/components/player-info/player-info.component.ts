import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
findedPlayer: any;
  constructor() { }

  ngOnInit() {
    let idPlayer= localStorage.getItem("idPlayer");
    let players= JSON.parse(localStorage.getItem("players") || "[]");
    for (let i = 0; i < players.length; i++) {
      if (players[i].id == idPlayer) {
        this.findedPlayer= players[i];
        break;
      }
    }
    localStorage.setItem("players", JSON.stringify(players));
  }

}
