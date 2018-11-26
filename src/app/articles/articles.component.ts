import { Component, OnInit, ViewChild} from '@angular/core';
import { Article } from '../domain/article';
import { ArticleService } from '../services/article.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { OrganizationService } from '../services/organization.service';
import { Organization } from '../domain/organization';
import { Observable } from 'rxjs';

export interface ArticleDefinition {
  id: number;
  articleName: string;
  authorName: string;
  organizationName: string;
  datePublished: Date;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {
  articles: Article[];  
  displayedColumns: string[] = ['articleName', 'authorName', 'organizationId', 'datePublished'];
  clickedName: string;

  constructor(private articleService: ArticleService,
    private organizationService: OrganizationService) { }

  ngOnInit() {
    this.getArticles();
    console.log("Made it to init");
  }

  getArticles(): void {
    this.articleService.getArticles()
    .subscribe(articles => this.articles = articles);
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

