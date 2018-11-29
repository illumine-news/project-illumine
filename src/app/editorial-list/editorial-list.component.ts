import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Editorial } from 'app/domain/editorial';
import { EditorialService } from '../services/editorial.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { OrganizationService } from '../services/organization.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-editorial-list',
  templateUrl: './editorial-list.component.html',
  styleUrls: ['./editorial-list.component.css']
})

export class EditorialListComponent implements OnInit {
  
  @Input() displayedColumns: string[] = ['editorialName', 'authorName', 'organizationName', 'datePublished']; //TODO: make dynamic
  @Input() itemsPerPage: number[] = [5]; //TODO: make dynamic

  dataSource = new MatTableDataSource<Editorial>();
  sortedData;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private editorialService: EditorialService,
    private organizationService: OrganizationService) { }

  ngOnInit() {
    this.getEditorials();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getEditorials(): void {
    this.editorialService.geteditorials()
      .subscribe(editorials => this.dataSource.data = editorials);
  }

  getItemsPerPage(): number[] {
    return this.itemsPerPage != null ? this.itemsPerPage : [10];
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.editorialService.addEditorial({ name } as Editorial)
  //   .subscribe(editorial => {
  //     this.editorials.push(editorial);
  //   });
  // }

  // delete(editorial: Editorial): void {
  //   this.editorials = this.editorials.filter(h => h !== editorial);
  //   this.editorialService.deleteEditorial(editorial).subscribe();
  // }
}

