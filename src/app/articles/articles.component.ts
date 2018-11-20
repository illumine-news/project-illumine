import { Component, OnInit } from '@angular/core';
import { Article } from '../domain/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getArticles()
    .subscribe(articles => this.articles = articles);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.articleService.addArticle({ name } as Article)
    .subscribe(article => {
      this.articles.push(article);
    });
  }

  delete(article: Article): void {
    this.articles = this.articles.filter(h => h !== article);
    this.articleService.deleteArticle(article).subscribe();
  }
}

