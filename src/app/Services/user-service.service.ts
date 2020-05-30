import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  // tslint:disable-next-line: ban-types
 Url = 'https://api.github.com/users';

  constructor(private  httpUser: HttpClient) { }


  GetUsers(username): Observable<any> {

     return this.httpUser.get<any>(`${this.Url}/${username}`);
  }

  GetAllUsers(): Observable<any>  {

    return this.httpUser.get<any>(this.Url);

  }


}
