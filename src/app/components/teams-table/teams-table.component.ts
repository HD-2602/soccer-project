import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teamsTab: any[];
  teams : any [];
  constructor(private router: Router,
    private teamService: TeamService) 
    { }

  ngOnInit() {
    
    this.teamService.getAllTeams().subscribe((response)=>
    {
      console.log("Here responce from BE", response.teams);
      this.teamsTab= response.teams;
    }); 
  }
  deleteTeam(selectedId){
    for (let i = 0; i < this.teamsTab.length; i++) {
      if (this.teamsTab[i].id == selectedId) {
        this.teamsTab.splice(i,1);
        break;
      } 
    }
    localStorage.setItem("teams", JSON.stringify(this.teamsTab));

  }
  goToInfo(idObj){
    localStorage.setItem("idTeam", idObj);
    this.router.navigate(["teamInfo"]);

  }

}
