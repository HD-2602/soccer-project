import { PlayerService } from './../../services/player.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerComponent } from './../player/player.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  playerForm: FormGroup;
  player: any = {};
  id: any;
  title: string = "Add Player";

  constructor(private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
    private router:Router)
     { }

  ngOnInit() {
  
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.title = "Edit Player";
      this.playerService.getPlayerById(this.id).subscribe(
        (response) => {
          this.player = response.player;
        });
    }
  }

  validate() {
    console.log("Here player ", this.player);
    if (this.id) {
      this.playerService.editPlayer(this.player).subscribe((response)=>{
        this.router.navigate(["admin"]);
      });
    } else {
      this.playerService.addPlayer(this.player).subscribe((response)=>{
        this.router.navigate(["admin"]);
      });

    }

  }

}
