import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Article } from 'app/domain/article';
import { ArticleService } from 'app/services/article.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { OrganizationService } from 'app/services/organization.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-article-list-summary',
  templateUrl: './article-list-summary.component.html',
  styleUrls: ['./article-list-summary.component.css']
})

export class ArticleListSummaryComponent implements OnInit {
  @Input() displayedColumns: string[] = ['articleName', 'authorName', 'illumineScore'];
  @Input() itemsPerPage: number[];

  dataSource = new MatTableDataSource<Article>();
  sortedData;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private articleService: ArticleService,
    private organizationService: OrganizationService) { }

  ngOnInit() {
    this.getArticles();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getArticles(): void {
    this.articleService.getArticles()
      .subscribe(articles => this.dataSource.data = articles);
  }

  getItemsPerPage(): number[] {
    return this.itemsPerPage != null ? this.itemsPerPage : [10];
  }

}


