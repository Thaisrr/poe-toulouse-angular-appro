import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenResponse, UserAuth} from "../types/UserAuth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  api_url = 'https://reqres.in/api/login'

  constructor(private http: HttpClient) { }

  login(user_info: UserAuth): Observable<TokenResponse> {
    console.log(user_info)
    return this.http.post<TokenResponse>(this.api_url, user_info);
  }


}
