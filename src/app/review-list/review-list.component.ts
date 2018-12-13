import { Component, OnInit, Input } from '@angular/core';
import { ReviewService } from 'app/services/review.service';
import { NgModel } from '@angular/forms';
import { Review } from 'app/domain/review';
import { DomSanitizer } from '@angular/platform-browser';
import { Article } from 'app/domain/article';
import { ArticleService } from 'app/services/article.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})

export class ReviewListComponent implements OnInit {

  @Input() article: Article;
  reviews: Review[];

  constructor(
    private reviewService: ReviewService) { 
  }

  ngOnInit() {
    //this.getarticle();
    this.getReviews();
  }

  getReviews(): void {
    //if (this.article)
    //{
      //this.reviewService.getreviewsforarticleId(this.article.id)
      //.subscribe(retrievedReviews => this.reviews = retrievedReviews)
      //.add(console.log(this.reviews));
    //}
    //else
    //{
      this.reviewService.getreviews()
      .subscribe(retrievedReviews => this.reviews = retrievedReviews);
    //}
  }

  //TODO: see if I can pass the article from article list
  // getarticle(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.articleService.getArticle(id)
  //     .subscribe(article => this.article = article);
  // }
}
