import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const baseUrl = 'https://reqres.in/api/users?page=2';
const apiBaseURL = 'https://reqres.in/api/users';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  handleError(error: any) {
    return throwError(error.message || "Server Error")
  }

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    let url = `${baseUrl}`;
    return this.http.get<any>(`${url}`, { observe: 'response' })
      .pipe(catchError(this.handleError))
  }

  getDelete(id: any): Observable<any> {
    let urlD = `${apiBaseURL}`;
    return this.http.delete(`${urlD}/${id}`, { observe: 'response' })
      .pipe(catchError(this.handleError))
  }

  getAddUser(): Observable<any> {
    let urlADD = `${apiBaseURL}`;
    return this.http.post<any>(`${urlADD}`, { observe: 'response' })
      .pipe(catchError(this.handleError))
  }
}
