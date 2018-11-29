import { Injectable } from '@angular/core';
import { Organization } from 'app/domain/organization';

import { Observable, of } from 'rxjs';
import { MessageService } from 'app/services/message.service';

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
    private messageService: MessageService
    ) { }

private organizationsUrl = 'api/organizations';

  getOrganization(id: number): Observable<Organization> {
    const url = `${this.organizationsUrl}/${id}`;
    return this.http.get<Organization>(url).pipe(
    );
  }

  getOrganizations(): Observable<Organization[]> {
   return this.http.get<Organization[]>(this.organizationsUrl)
   .pipe(
    tap(organizations => this.log('fetched organizations')), 
    catchError(this.handleError('getOrganizations', []))
   );
  }

  addOrganization (organization: Organization): Observable<Organization> {
    return this.http.post<Organization>(this.organizationsUrl, organization, httpOptions).pipe(
      tap((organization: Organization) => this.log(`added organization w/ id=${organization.id}`)),
      catchError(this.handleError<Organization>('addOrganization'))
    );
  }

  updateOrganization (organization: Organization): Observable<any> {
    return this.http.put(this.organizationsUrl, organization, httpOptions).pipe(
      tap(_ => this.log(`updated organization id=${organization.id}`)),
      catchError(this.handleError<any>('updateOrganization'))
    );
  }

  deleteOrganization (organization: Organization | number): Observable<Organization> {
    const id = typeof organization === 'number' ? organization : organization.id;
    const url = `${this.organizationsUrl}/${id}`;

    return this.http.delete<Organization>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted organization id=${id}`)),
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
    tap(_ => this.log(`found organizations matching "${term}"`)),
    catchError(this.handleError<Organization[]>('searchOrganizations', []))
  );
}

  private log(messageg: string) {
    this.messageService.add('OrganizationService: ${message}');
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
