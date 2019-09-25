import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GithubUserService {

  private githubUrl = 'https://api.github.com/users';

  constructor(
    private http: HttpClient,
  ) { }

  getUser(username: string): Observable<User> {
    const url = `${this.githubUrl}/${username}`;
    return this.http.get<User>(url).pipe(
      tap(_ => console.log(`fetched user username=${username}`)),
      catchError(this.handleError<User>(`getUser  id=${username}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
