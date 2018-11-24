import { Component, OnInit, ViewChild} from '@angular/core';
import { Article } from '../domain/article';
import { ArticleService } from '../services/article.service';

export interface ArticleDefinition {
  id: number;
  articleName: string;
  authorName: string;
  datePublished: Date;
}

const ARTICLE_DATA: ArticleDefinition[] = [
  {id: 1, articleName: 'On Geralt and Toe Stubbing', authorName: "Andrzej Sapkowski", datePublished: new Date(1/1/2018)},
  {id: 2, articleName: 'Wines of Toussant', authorName: "Andrzej Sapkowski", datePublished: null},
  {id: 3, articleName: 'Mechanical Man', authorName: "Chris Roberts", datePublished: null},
  {id: 4, articleName: 'Moonlighters', authorName: "Eric Roberts", datePublished: null},
  {id: 5, articleName: 'How to build poison tolerance', authorName: "John Roberts", datePublished: null},
  {id: 6, articleName: 'Guide to Griefing', authorName: "Otzdarva", datePublished: null},
  {id: 7, articleName: 'Presidents and Pancakes', authorName: "George Stephanopolous", datePublished: null},
  {id: 8, articleName: 'Righteous Fury', authorName: "Brad Pitt", datePublished: null},
  {id: 9, articleName: 'What is a polling error?', authorName: "Nate Silver", datePublished: null},
  {id: 10, articleName: 'Neon Demons', authorName: "Elle Fanning", datePublished: null},
];

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {
  
  articles: Article[];
  
  displayedColumns: string[] = ['articleName', 'authorName', 'datePublished'];
  dataSource = ARTICLE_DATA;
  
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    //this.getArticles();
    console.log("Made it to init");
  }

  // getArticles(): void {
  //   this.articleService.getArticles()
  //   .subscribe(articles => this.articles = articles);
  // }

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

