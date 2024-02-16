import { MatchService } from 'src/app/services/match.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  
  matches: any= [];

  constructor( private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      (response)=>{
        console.log("Here response from BE", response.matches);
        this.matches= response.matches;
      }
    )
    
  }
  updateMatches(tab : any){
    this.matches= tab;   
  }

}
