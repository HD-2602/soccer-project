import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  matchForm: FormGroup;
  match: any = {};
  // constructor est la 1ère méthode exécutable car les autres méthodes peuvent consommer des instences
  constructor(private matchService: MatchService) { }

  ngOnInit() {
  }
  addMatch() {
    console.log("Here match object", this.match);
    this.matchService.addMatch(this.match).subscribe(
      (response) => {
        console.log("Here response from BE", response);
      });
  }
}
