import { Injectable } from '@angular/core';
import { Editorial } from 'app/domain/editorial';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

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
    return this.http.get<Editorial>(url).pipe();
  }

  geteditorials(): Observable<Editorial[]> {
   return this.http.get<Editorial[]>(this.editorialsUrl)
   .pipe(
    catchError(this.handleError('geteditorials', []))
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
