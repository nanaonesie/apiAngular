import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { config } from './config';
import { User } from '../user/shared/models/user';
import { ExceptionService } from '../core/exception.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private apiUserUrl: string;

  constructor(
    private http: HttpClient,
    private exService: ExceptionService,
  ) {
    this.apiUserUrl = `${config.back_url}/nana`;
  }

  getUsers() {
    return this.http.get<User[]>(this.apiUserUrl)
      .pipe(
        tap(_ => console.log('Fetch Users')),
        catchError(this.exService.handleError('getUsers', []))
      );
  }

  setUser(user: User) {
    return this.http.post<User>(this.apiUserUrl, user)
      .pipe(
        tap(_ => console.log('Insert user')),
        catchError(this.exService.handleError('setUser', []))
      );
  }

  updateUser(user: User) {
    return this.http.put<User>(`${this.apiUserUrl}/${user.id}`, user)
      .pipe(
        tap(_ => console.log('Update user')),
        catchError(this.exService.handleError('updateUser', []))
      );
  }

  deleteUser(user: User) {
    return this.http.delete<User>(`${this.apiUserUrl}/${user.id}`)
      .pipe(
        tap(_ => console.log('Delete user')),
        catchError(this.exService.handleError('deleteUser', []))
      );
  }
}
