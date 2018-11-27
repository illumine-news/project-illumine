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
  
  articles: Article[] = [];
  organizations: Organization[] = [];

  constructor(
    private articleService: ArticleService,
    private organizationService: OrganizationService,
    ) { }

  ngOnInit() {
    this.getOrganizations();
  }

  getOrganizations(): void {
    this.organizationService.getOrganizations()
      .subscribe(organizations => this.organizations = organizations.slice(1, 5));
  }
}