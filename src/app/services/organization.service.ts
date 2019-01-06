import { Injectable } from '@angular/core';
import { Organization } from 'app/domain/organization';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})


export class OrganizationService {

  constructor(
    private http: HttpClient,
    ) { }

private organizationsUrl = 'api/organizations';

  getOrganization(id: number): Observable<Organization> {
    const url = `${this.organizationsUrl}/${id}`;
    return this.http.get<Organization>(url);
  }

  getOrganizations(): Observable<Organization[]> {
   return this.http.get<Organization[]>(this.organizationsUrl)
   .pipe(
    catchError(this.handleError('getOrganizations', []))
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
