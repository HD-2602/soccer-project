import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articles: any=[
    {title: "Title 1", description:"Description 1", date: "07/05/2023", img:"assets/images/img_1.jpg"},
    {title: "Title 2", description:"Description 2", date: "15/05/2023", img:"assets/images/img_2.jpg"},
    {title: "Title 3", description:"Description 3", date: "20/05/2023", img:"assets/images/img_3.jpg"}
  ]
  

  constructor() { }

  ngOnInit() {
  }

}
