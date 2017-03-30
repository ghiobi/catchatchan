import { Injectable } from '@angular/core';
import {SailsService} from "angular2-sails";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class ChannelResolver implements Resolve<any>{

  constructor(
    private sails: SailsService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    return new Promise<any>((resolve) => {
      let id = route.params['id'];
      this.sails.get('/channel/' + id).subscribe((response) => {

        resolve(response.data);
      })
    })
  }

}
