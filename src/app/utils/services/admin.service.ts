import { Injectable } from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  api_url = 'https://reqres.in/api/users';

  constructor(private authService: AuthenticationService, private http: HttpClient) { }

  getUsers(): Observable<any> {
    const token = this.authService.getToken();
    return this.http.get(this.api_url, {
      headers: {
        Authorization : `Bearer ${token}`
      }
    })
  }
}
