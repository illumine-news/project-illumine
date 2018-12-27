import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Article } from 'app/domain/article';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService }  from 'app/services/article.service';
import { Review } from 'app/domain/review';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  @Input() article: Article;
  illumineScore: number;
  numberOfScores: number;
  scores: number[];
  reviews: Observable<Review[]>;
  index: number = 0;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private location: Location
  ) {}
 
  ngOnInit(): void {
    this.getarticle();
    
   console.log("Article self: " + this.article);
  }
  
  getarticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getArticle(id)
      .subscribe(article => this.article = article)
  }

    goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   this.articleService.updateArticle(this.article)
  //   .subscribe(() => this.goBack())
  // }
}