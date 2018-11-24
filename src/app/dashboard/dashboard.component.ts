import { Component, OnInit } from '@angular/core';
import { Article } from '../domain/article';
import { ArticleService } from '../services/article.service';
import { Organization } from '../domain/organization';
import { OrganizationService } from '../services/organization.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  // tiles: Tile[] = [
  //   {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  //   {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  //];
  
  articles: Article[] = [];
  organizations: Organization[] = [];

  constructor(
    private articleService: ArticleService,
    private organizationService: OrganizationService,
    ) { }

  ngOnInit() {
    this.getArticles();
    this.getOrganizations();
  }

  getArticles(): void {
    this.articleService.getArticles()
      .subscribe(articles => this.articles = articles.slice(1, 10));
  }

  getOrganizations(): void {
    this.organizationService.getOrganizations()
      .subscribe(organizations => this.organizations = organizations.slice(1, 5));
  }
}