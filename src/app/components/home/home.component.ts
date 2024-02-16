import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  match:any= {scoreOne:1, scoreTwo: 5, teamOne: "CA", teamTwo: "EST" };

  constructor() { }

  ngOnInit() {
  }

}
