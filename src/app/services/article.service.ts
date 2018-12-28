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
      tap(_ => console.log(`fetched article id=${id}`)),
      catchError(this.handleError<Article>(`getArticle id=${id}`))
    );
  }

  getArticles(): Observable<Article[]> {
   return this.http.get<Article[]>(this.articlesUrl)
   .pipe(
    tap(articles => console.log('fetched articles')), 
    catchError(this.handleError('getArticles', []))
   );
  }

  getarticlesfororganization(organizationId: number | string): Observable<Article[]> {
    if (!organizationId)
  {
    console.log("Organization ID not found");
    return of ([]);
  }
  
  return this.http.get<Article[]>(`api/reviews/?articleId=9`).pipe(
  tap(_ => console.log(`found organizations matching "${organizationId}"`)),
  catchError(this.handleError<Article[]>('getArticlesForOrganization', []))
  );
  }

  /* GET articles whose name contains search term */
  searchArticles(term: string): Observable<Article[]> {
  if (!term.trim()) {
    // if not search term, return empty article array.
    return of([]);
  }
  return this.http.get<Article[]>(`${this.articlesUrl}/?articleName=${term}`).pipe(
    tap(_ => console.log(`found articles matching "${term}"`)),
    catchError(this.handleError<Article[]>('searchArticles', []))
  );
}

  private handleError<T> (operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
