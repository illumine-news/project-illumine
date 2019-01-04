import { Component, OnInit } from '@angular/core';
import { Organization } from 'app/domain/organization';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OrganizationService } from 'app/services/organization.service';
import { Observable } from 'rxjs';
import { Article } from 'app/domain/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization-detail',
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.css']
})
export class OrganizationDetailComponent implements OnInit {
  organizationId = +this.route.snapshot.paramMap.get('id');
  organization: Organization;
  articles: Observable<Article[]>;

  constructor(
    private route: ActivatedRoute,
    private organizationService: OrganizationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getorganization();
  }

  getorganization(): void {
    this.organizationService.getOrganization(this.organizationId)
      .subscribe((organization => this.organization = organization),
      (error) => this.router.navigate(['404'])
      );
  }
}