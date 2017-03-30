import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {SailsService} from "angular2-sails";
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";

@Injectable()
export class DashboardResolver implements Resolve<any> {

  constructor(
    private sails: SailsService,
    private auth: AuthService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    if (! this.auth.isAuthenticated()) {
      this.router.navigate(['/']);
      return undefined;
    }

    this.sails.connect(environment.host);

    return new Promise<any>((resolve) => {
      this.sails.get('/channel').subscribe((response: any) => {

        resolve(response.data);
      });
    });
  }

}
