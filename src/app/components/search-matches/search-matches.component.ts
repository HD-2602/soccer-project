import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-search-matches',
  templateUrl: './search-matches.component.html',
  styleUrls: ['./search-matches.component.css']
})
export class SearchMatchesComponent implements OnInit {
  searchForm: FormGroup;
  matches: any;
  
  constructor(private formBuilder: FormBuilder,
              private matchService: MatchService) { }

  ngOnInit() {
    this.searchForm= this.formBuilder.group(
      {
        scoreOne: ["", [Validators.required]],
        scoreTwo: ["", [Validators.required]]
      })
  }
  search(){
    console.log("Here object FE", this.searchForm.value);
    this.matchService.search(this.searchForm.value).subscribe(
      (response)=>{
        console.log("Here response from BE", response.findedMatches);
        this.matches= response.findedMatches;
      }
    );
  }
}
