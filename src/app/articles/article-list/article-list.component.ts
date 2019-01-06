import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
import { Article } from 'app/domain/article';
import { ArticleService } from 'app/services/article.service';
import { MatTableDataSource } from '@angular/material/table';
import { Organization } from 'app/domain/organization';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})

export class ArticleListComponent implements OnInit {

  @Input() organizationId: number | string;
  @Input() displayedColumns: string[] = ['articleName', 'authorName', 'organizationName', 'datePublished', 'illumineScore'];
  @Input() itemsPerPage: number[];

  articles: Article[];

  dataSource = new MatTableDataSource<Article>();
  sortedData;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getArticles();
    //TODO: if org, get articles for organization
  }

  //TODO
  //getArticlesForOrganization(organizationId: string | number): Observable<Article[]> {
  //  return this.articles$ = this.articleService.getarticlesfororganization(organizationId);
  //}

  getArticles(): void {
    this.articleService.getArticles()
      .subscribe(articles => this.dataSource.data = articles);
  }

  getItemsPerPage(): number[] {
    return this.itemsPerPage != null ? this.itemsPerPage : [10];
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
        case 'id': return this.compare(a.id, b.id, isAsc);
        case 'name': return this.compare(+a.name, +b.name, isAsc);
        case 'authorName': return this.compare(+a.authorName, +b.authorName, isAsc);
        case 'organizationName': return this.compare(+a.organizationName, +b.organizationName, isAsc);
        case 'datePublished': return this.compare(+a.datePublished, +b.datePublished, isAsc);
        case 'illumineScore': return this.compare(+a.illumineScore, +b.illumineScore, isAsc);
        default: return 0;
      }
    });
  }

  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}

