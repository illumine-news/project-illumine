import { Component, OnInit, ViewChild} from '@angular/core';
import { Article } from '../domain/article';
import { ArticleService } from '../services/article.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { OrganizationService } from '../services/organization.service';
import { Organization } from '../domain/organization';
import { Observable } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';

// export interface ArticleDefinition {
//   id: number;
//   articleName: string;
//   authorName: string;
//   organizationName: string;
//   datePublished: Date;
// }

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {
  displayedColumns: string[] = ['articleName', 'authorName', 'organizationId', 'datePublished'];
  clickedName: string;
  dataSource: MatTableDataSource<Article> = new MatTableDataSource<Article>();
  sortedData;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private articleService: ArticleService,
    private organizationService: OrganizationService) { }

  ngOnInit() {
    this.getArticles();
    this.dataSource.sort = this.sort;
  }

  getArticles(): void {
    this.articleService.getArticles()
    .subscribe(articles => this.dataSource.data = articles);
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
        case 'authorName': return this.compare(a.authorName, b.authorName, isAsc);
        case 'organizationName': return this.compare(a.organizationName, b.organizationName, isAsc);
        case 'datePublished': return this.compare(a.datePublished, b.datePublished, isAsc);
        default: return 0;
      }
    });
  }

  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.articleService.addArticle({ name } as Article)
  //   .subscribe(article => {
  //     this.articles.push(article);
  //   });
  // }

  // delete(article: Article): void {
  //   this.articles = this.articles.filter(h => h !== article);
  //   this.articleService.deleteArticle(article).subscribe();
  // }
}

