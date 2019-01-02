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

  addOrganization (organization: Organization): Observable<Organization> {
    return this.http.post<Organization>(this.organizationsUrl, organization, httpOptions).pipe(
      catchError(this.handleError<Organization>('addOrganization'))
    );
  }

  updateOrganization (organization: Organization): Observable<any> {
    return this.http.put(this.organizationsUrl, organization, httpOptions).pipe(
      catchError(this.handleError<any>('updateOrganization'))
    );
  }

  deleteOrganization (organization: Organization | number): Observable<Organization> {
    const id = typeof organization === 'number' ? organization : organization.id;
    const url = `${this.organizationsUrl}/${id}`;

    return this.http.delete<Organization>(url, httpOptions).pipe(
      catchError(this.handleError<Organization>('deleteOrganization'))
    );
  }

  /* GET organizations whose name contains search term */
searchOrganizations(term: string): Observable<Organization[]> {
  if (!term.trim()) {
    // if not search term, return empty organization array.
    return of([]);
  }
  return this.http.get<Organization[]>(`${this.organizationsUrl}/?name=${term}`).pipe(
    catchError(this.handleError<Organization[]>('searchOrganizations', []))
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
