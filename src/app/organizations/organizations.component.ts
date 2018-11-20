import { Component, OnInit } from '@angular/core';
import { Organization } from '../domain/organization';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {
  organizations: Organization[];

  constructor(private organizationService: OrganizationService) { }

  ngOnInit() {
    this.getOrganizations();
  }

  getOrganizations(): void {
    this.organizationService.getOrganizations()
    .subscribe(organizations => this.organizations = organizations);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.organizationService.addOrganization({ name } as Organization)
    .subscribe(organization => {
      this.organizations.push(organization);
    });
  }

  delete(organization: Organization): void {
    this.organizations = this.organizations.filter(h => h !== organization);
    this.organizationService.deleteOrganization(organization).subscribe();
  }
}

