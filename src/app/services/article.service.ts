import { Injectable } from '@angular/core';
import { Article } from 'app/domain/article';

import { Observable, of } from 'rxjs';
import { MessageService } from 'app/services/message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

private articlesUrl = 'api/articles';

  getArticle(id: number): Observable<Article> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http.get<Article>(url).pipe(
      tap(_ => this.log(`fetched article id=${id}`)),
      catchError(this.handleError<Article>(`getArticle id=${id}`))
    );
  }

  getArticles(): Observable<Article[]> {
   return this.http.get<Article[]>(this.articlesUrl)
   .pipe(
    tap(articles => this.log('fetched articles')), 
    catchError(this.handleError('getArticles', []))
   );
  }

  // getIllumineScore(articleId: number): Observable<number> {
  //   //TODO: query reviews associated with this article ID
  //   //and get an aggregate of the scores
  //   //return this.http.get

  //   Array.prototype.forEach()
  // }

  // getAssociatedReviews(articleId: number): Review[] {
  //   reviews.foreach
  // }

  addArticle (article: Article): Observable<Article> {
    return this.http.post<Article>(this.articlesUrl, article, httpOptions).pipe(
      tap((article: Article) => this.log(`added article w/ id=${article.id}`)),
      catchError(this.handleError<Article>('addArticle'))
    );
  }

  updateArticle (article: Article): Observable<any> {
    return this.http.put(this.articlesUrl, article, httpOptions).pipe(
      tap(_ => this.log(`updated article id=${article.id}`)),
      catchError(this.handleError<any>('updateArticle'))
    );
  }

  deleteArticle (article: Article | number): Observable<Article> {
    const id = typeof article === 'number' ? article : article.id;
    const url = `${this.articlesUrl}/${id}`;

    return this.http.delete<Article>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted article id=${id}`)),
      catchError(this.handleError<Article>('deleteArticle'))
    );
  }

  /* GET articles whose name contains search term */
  searchArticles(term: string): Observable<Article[]> {
  if (!term.trim()) {
    // if not search term, return empty article array.
    return of([]);
  }
  return this.http.get<Article[]>(`${this.articlesUrl}/?articleName=${term}`).pipe(
    tap(_ => this.log(`found articles matching "${term}"`)),
    catchError(this.handleError<Article[]>('searchArticles', []))
  );
}

  private log(messageg: string) {
    this.messageService.add('ArticleService: ${message}');
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
