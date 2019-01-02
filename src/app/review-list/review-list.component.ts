import { Component, OnInit, Input } from '@angular/core';
import { ReviewService } from 'app/services/review.service';
import { Review } from 'app/domain/review';
import { Article } from 'app/domain/article';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})

export class ReviewListComponent implements OnInit {

  @Input() article: Article;
  reviews: Review[];
  reviews$: Observable<Review[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private reviewService: ReviewService) { 
  }

  ngOnInit() {
    if (this.article)
    {
      this.getReviewsForArticle(this.article.id);
    }
    else
    {
      this.getReviews();
    }
  }

  getReviewsForArticle(articleId: string | number) : void {
    this.reviews$ = this.reviewService.getreviewsforarticle(articleId);
}

  getReviews(): void {
      this.reviews$ = this.reviewService.getreviews();
  }
}
