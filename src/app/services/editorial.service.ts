import { Injectable } from '@angular/core';
import { Editorial } from 'app/domain/editorial';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class EditorialService {

  constructor(
    private http: HttpClient,    
    ) { }

private editorialsUrl = 'api/editorials';

  geteditorial(id: number): Observable<Editorial> {
    const url = `${this.editorialsUrl}/${id}`;
    return this.http.get<Editorial>(url).pipe(
      catchError(this.handleError<Editorial>(`geteditorial id=${id}`))
    );
  }

  geteditorials(): Observable<Editorial[]> {
   return this.http.get<Editorial[]>(this.editorialsUrl)
   .pipe(
    catchError(this.handleError('geteditorials', []))
   );
  }

  addeditorial (editorial: Editorial): Observable<Editorial> {
    return this.http.post<Editorial>(this.editorialsUrl, editorial, httpOptions).pipe(
      catchError(this.handleError<Editorial>('addeditorial'))
    );
  }

  updateeditorial (editorial: Editorial): Observable<any> {
    return this.http.put(this.editorialsUrl, editorial, httpOptions).pipe(
      catchError(this.handleError<any>('updateeditorial'))
    );
  }

  deleteeditorial (editorial: Editorial | number): Observable<Editorial> {
    const id = typeof editorial === 'number' ? editorial : editorial.id;
    const url = `${this.editorialsUrl}/${id}`;

    return this.http.delete<Editorial>(url, httpOptions).pipe(
      catchError(this.handleError<Editorial>('deleteeditorial'))
    );
  }

  /* GET editorials whose name contains search term */
searcheditorials(term: string): Observable<Editorial[]> {
  if (!term.trim()) {
    // if not search term, return empty editorial array.
    return of([]);
  }
  return this.http.get<Editorial[]>(`${this.editorialsUrl}/?name=${term}`).pipe(
    catchError(this.handleError<Editorial[]>('searcheditorials', []))
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
