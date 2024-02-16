import { MatchService } from 'src/app/services/match.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() matchInput: any;
  // EventEmitter<any>: type prédéfinit/une instance/ <any> on peut envoyer n'importe
  @Output() matchesToSend:EventEmitter<any> = new EventEmitter();

  constructor(private matchService: MatchService) { }

  ngOnInit() {
  }

  scoreColor( s1, s2){
    if (s1 > s2){
      return ["green", "Win"];
    }
    else if(s1 < s2){
      return ["red", "Loss"];
    }
    else{
      return ["blue", "Draw"];
    }
  }

  deleteMatch(id){
    this.matchService.deleteMatch(id).subscribe(
      (response)=>{
this.matchService.getAllMatches().subscribe(
  (data)=>{
    console.log("Here data from BE ", data.matches);
    // matchesToSend: output
    this.matchesToSend.emit(data.matches);
  })
      });

  }
}
