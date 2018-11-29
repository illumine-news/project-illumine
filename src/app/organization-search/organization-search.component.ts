import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Organization } from 'app/domain/organization';
import { OrganizationService } from 'app/services/organization.service';

@Component({
  selector: 'app-organization-search',
  templateUrl: './organization-search.component.html',
  styleUrls: [ './organization-search.component.css' ]
})
export class OrganizationSearchComponent implements OnInit {
  organizations$: Observable<Organization[]>;
  private searchTerms = new Subject<string>();

  constructor(private organizationService: OrganizationService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.organizations$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.organizationService.searchOrganizations(term)),
    );
  }
}