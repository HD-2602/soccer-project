import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  findedTeam: any;

  constructor(private teamService : TeamService) { }

  ngOnInit() {
    let idTeam= localStorage.getItem("idTeam");
    this.teamService.getTeamById(idTeam).subscribe((response)=>{
      console.log("Here into from BE",response.team);
      this.findedTeam =response.team;
    });
  }

}
