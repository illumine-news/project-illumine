import { Component, OnInit } from '@angular/core';
import { Article } from 'app/domain/article';
import { Organization } from 'app/domain/organization';
import { OrganizationService } from 'app/services/organization.service';
import { ResponsiveService } from 'app/services/responsive.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
  providers: [ResponsiveService]
})
export class DashboardComponent implements OnInit {
  
  articles: Article[] = [];
  organizations: Organization[] = [];
  private isMobile: Boolean;

  constructor(
    private responsiveService: ResponsiveService,
    private organizationService: OrganizationService,
    ) { }

  ngOnInit() {
    this.getOrganizations();
    this.isMobile = this.responsiveService.mobileCheckRegEx();
  }

  getOrganizations(): void {
    this.organizationService.getOrganizations()
      .subscribe(organizations => this.organizations = organizations.slice(1, 5));
  }
}