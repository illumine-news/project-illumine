import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'app/domain/article';
import { ActivatedRoute } from '@angular/router';
import { ArticleService }  from 'app/services/article.service';
import { Review } from 'app/domain/review';
import { ReviewService } from 'app/services/review.service';
 
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  @Input() article: Article;
  illumineScore: number;
  reviews: Review[];

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private reviewService: ReviewService,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    this.getarticle();
    this.getIllumineScore();
  }

  getarticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getArticle(id)
      .subscribe((article => this.article = article),
      (error) => this.router.navigate(['404'])
      );
  }

  getIllumineScore() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.reviewService.getreviewsforarticle(id)
    .subscribe(myReviews => this.reviews = myReviews)
  }

  
}