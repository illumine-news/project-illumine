import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'app/domain/article';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ArticleService }  from 'app/services/article.service';
 
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  @Input() article: Article;
 
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private location: Location
  ) {}
 
  ngOnInit(): void {
    this.getarticle();
  }
  
  getarticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getArticle(id)
      .subscribe(article => this.article = article);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.articleService.updateArticle(this.article)
    .subscribe(() => this.goBack())
  }
}