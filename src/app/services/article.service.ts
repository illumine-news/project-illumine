import { Injectable } from '@angular/core';
import { Article } from 'app/domain/article';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  constructor(
    private http: HttpClient,
    ) { }

private articlesUrl = 'api/articles';
private articlesUrlAlt = 'api/articles/';

  getArticle(id: number): Observable<Article> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http.get<Article>(url).pipe(
    );
  }

  getArticles(): Observable<Article[]> {
   return this.http.get<Article[]>(this.articlesUrl)
   .pipe(
    catchError(this.handleError('getArticles', []))
   );
  }

  //TODO
  // getarticlesfororganization(organizationId: number | string): Observable<Article[]> {
  //   if (!organizationId)
  // {
  //   console.log("Organization ID not found: " + organizationId);
  //   return of ([]);
  // }
  
  // return this.http.get<Article[]>(`api/reviews/?articleId=9`).pipe(
  // catchError(this.handleError<Article[]>('getArticlesForOrganization', []))
  // );
  // }

  private handleError<T> (operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      let errorCode = -1;
      let result = new Observable<T>();
      result.subscribe((errorCode) => {console.log(errorCode)});
      return result;
    };
  }
}
