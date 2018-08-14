import { Component, OnInit } from '@angular/core';
import { NewsService, NewsItem } from '../core';

/* Added backend API */
const API = 'http://localhost:3000/data';

@Component({
  selector: 'app-home',
  template: `
    <div class="input-container">
      <input type="text" placeholder="Search News" #search (keyup)="onKeyUp(search.value)">
    </div>
    <app-feed *ngIf="!loading" [news]="news"></app-feed>
    <app-loader *ngIf="loading"></app-loader>
  `,
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  loading = false;
  news: NewsItem[] = [];

  constructor(private hn: NewsService) {}

  ngOnInit() {
    this.loading = true;

    this.hn.getNews().subscribe(data => {
      this.loading = false;
      this.news = data;
    });
  }


/* Updated onKeyUp function to fetch and display results as the user types in real-time	 [AJAX calls] */ 

  onKeyUp(value: string) {
    console.log(value);

/*var link created to handle error TS7005: Variable 'news' implicitly has an 'any' type.*/
	
	var link = ``
    link = `${API}/${value}`
    
    this.hn.getNews().subscribe(data => {
      this.loading = false;
      var newData:NewsItem[] = [];
      fetch(link)
      .then(function(response) {
        return response.json();

      })
	      
	      .then(function(myJson) {
	        for (var i = 0; i < myJson.length; i++) {
	          newData.push(myJson[i])
	        }
	      })
      
      this.news = newData;
    });
  }
}
