import { Component, OnInit, Input } from '@angular/core';
import { Organization } from 'app/domain/organization';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { OrganizationService }  from 'app/services/organization.service';
 
@Component({
  selector: 'app-organization-detail',
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.css']
})
export class OrganizationDetailComponent implements OnInit {
  @Input() organization: Organization;
 
  constructor(
    private route: ActivatedRoute,
    private organizationService: OrganizationService,
    private location: Location
  ) {}
 
  ngOnInit(): void {
    this.getorganization();
  }
  
  getorganization(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.organizationService.getOrganization(id)
      .subscribe(organization => this.organization = organization);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.organizationService.updateOrganization(this.organization)
    .subscribe(() => this.goBack())
  }
}