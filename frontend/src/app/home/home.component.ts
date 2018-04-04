import { Component, OnInit } from '@angular/core';

import { HackerNewsService, NewsItem } from '../core';

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

  constructor(private hn: HackerNewsService) {}

  ngOnInit() {
    this.loading = true;

    this.hn.getNews().subscribe(data => {
      this.loading = false;
      this.news = data;
    });
  }

  onKeyUp(value: string) {
    console.log(value);
  }
}
