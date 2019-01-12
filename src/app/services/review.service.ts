import { Injectable } from '@angular/core';
import { Review } from 'app/domain/review';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ReviewService {

  constructor(
    private http: HttpClient,
  ) { }

  private reviewsUrl = 'api/reviews/';

  getreviewsforarticle(articleId: any): Observable<Review[]> {
    if (!articleId) {
      console.log("Article ID not found");
      return of([]);
    }
    return this.http.get<Review[]>(`${this.reviewsUrl}/?articleId=${articleId}`).pipe(
      catchError(this.handleError<Review[]>('getReviewsForArticle', []))
    );
  }

  getreviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.reviewsUrl)
      .pipe(
        catchError(this.handleError('getreviews', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
