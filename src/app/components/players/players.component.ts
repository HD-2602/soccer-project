import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: any =[];

  constructor( private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(
      (response)=>{
        console.log("Here response from BE", response.playersTab);
        this.players= response.playersTab;
      }
    );
  }

}
