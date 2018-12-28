import { Injectable } from '@angular/core';
import { Review } from 'app/domain/review';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
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
  if (!articleId)
  {
    console.log("Article ID not found");
    return of ([]);
  }
  return this.http.get<Review[]>(`${this.reviewsUrl}/?articleId=${articleId}`).pipe(
  tap(_ => console.log(`found reviews matching "${articleId}"`)),
  catchError(this.handleError<Review[]>('getReviewsForArticle', []))
  );
}  

getreviews(): Observable<Review[]> {
   return this.http.get<Review[]>(this.reviewsUrl)
   .pipe(
    tap(reviews => console.log('fetched reviews')), 
    catchError(this.handleError('getreviews', []))
   );
  }

  addreview (review: Review): Observable<Review> {
    return this.http.post<Review>(this.reviewsUrl, review, httpOptions).pipe(
      tap((review: Review) => console.log(`added review w/ id=${review.id}`)),
      catchError(this.handleError<Review>('addreview'))
    );
  }

  updatereview (review: Review): Observable<any> {
    return this.http.put(this.reviewsUrl, review, httpOptions).pipe(
      tap(_ => console.log(`updated review id=${review.id}`)),
      catchError(this.handleError<any>('updatereview'))
    );
  }

  deletereview (review: Review | number): Observable<Review> {
    const id = typeof review === 'number' ? review : review.id;
    const url = `${this.reviewsUrl}/${id}`;

    return this.http.delete<Review>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted review id=${id}`)),
      catchError(this.handleError<Review>('deletereview'))
    );
  }

  /* GET reviews whose name contains search term */
searchreviews(term: string): Observable<Review[]> {
  if (!term.trim()) {
    // if not search term, return empty review array.
    return of([]);
  }
  return this.http.get<Review[]>(`${this.reviewsUrl}/?name=${term}`).pipe(
    tap(_ => console.log(`found reviews matching "${term}"`)),
    catchError(this.handleError<Review[]>('searchreviews', []))
  );
}

  private handleError<T> (operation = 'operation', result?: T) {
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
