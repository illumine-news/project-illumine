import { Component, OnInit, Input } from '@angular/core';
import { ReviewService } from 'app/services/review.service';
import { NgModel } from '@angular/forms';
import { Review } from 'app/domain/review';
import { Article } from 'app/domain/article';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

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
  
  //TODO: remove
  tempReviewText: string = `<p>GOOD: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue porttitor quam eu dignissim. Morbi fermentum eget ex ut ullamcorper. Pellentesque sit amet erat a est auctor gravida. Nulla egestas commodo ullamcorper. Proin ornare tempus ante in ultrices. Proin feugiat, dolor a ultrices iaculis, mi risus semper orci, vitae lobortis est mi at libero. Donec imperdiet elit nec quam iaculis, eu vehicula diam lacinia. Nam lacinia ex et arcu tincidunt, et iaculis mi euismod.</p>`

  constructor(
    private reviewService: ReviewService) { 
  }

  ngOnInit() {
    //this.getarticle();
    if (this.article)
    {
      this.getReviewsForArticle(this.article.id);
    }
    else
    {
      this.getReviews();
    }
    
    //this.search(this.article.id.toString());
    
    //console.log("Review count: " + this.reviews$);
    /*this.reviews$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.reviewService.getReviewsForArticle(5)),
    );*/
  }

  getReviewsForArticle(articleId: string | number) : void {
    this.reviews$ = this.reviewService.getreviewsforarticle(this.article.id);
    
    //.subscribe(retrievedReviews => this.reviews$ = retrievedReviews);
}


  getReviews(): void {
      this.reviews$ = this.reviewService.getreviews();
      //.subscribe(retrievedReviews => this.reviews = retrievedReviews);
  }

  //TODO: see if I can pass the article from article list
  // getarticle(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.articleService.getArticle(id)
  //     .subscribe(article => this.article = article);
  // }
}
