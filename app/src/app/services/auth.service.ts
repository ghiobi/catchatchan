import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthService {

  private user: any;

  constructor(
    private http: Http
  ) { }

  login(data) {
    return new Promise((resolve, reject) => {
      this.http.post(environment.host + '/auth/login', data)
        .map((res) => res.json())
        .subscribe((res) => {
          this.user = res;
          resolve(this.user);
        }, (res) => {
          reject(res);
      })
    });
  }

  getUser() {
    return Object.assign({}, this.user);
  }

  isAuthenticated() {
    return !!(this.user);
  }

}
