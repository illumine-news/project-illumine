import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Article } from 'app/domain/article';
import { ArticleService } from 'app/services/article.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { OrganizationService } from 'app/services/organization.service';
import { Organization } from 'app/domain/organization';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})

export class OrganizationListComponent implements OnInit {
  @Input() displayedColumns: string[] = ['organizationName', 'organizationScore'];
  @Input() itemsPerPage: number[];
  @Input() organization: Organization;

  dataSource = new MatTableDataSource<Organization>();
  sortedData;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private articleService: OrganizationService,
    private organizationService: OrganizationService) { }

  ngOnInit() {
    this.getOrganizations();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getOrganizations(): void {
    this.articleService.getOrganizations()
      .subscribe(organizations => this.dataSource.data = organizations);
  }

  getItemsPerPage(): number[] {
    return this.itemsPerPage != null ? this.itemsPerPage : [20];
  }

  sortData(sort: MatSort) {
    const data = this.dataSource.data.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'name': return this.compare(+a.name, +b.name, isAsc);
        case 'illumineScore': return this.compare(+a.organizationScore, +b.organizationScore, isAsc);
        default: return 0;
      }
    });
  }

  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}

