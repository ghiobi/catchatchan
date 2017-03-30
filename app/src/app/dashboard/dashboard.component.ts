import {Component, OnInit, ElementRef} from '@angular/core';
import {SailsService} from "angular2-sails";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  messages: any;

  channels: any;
  channel: any;
  user: any = {id: 1};

  constructor(
    private sails: SailsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: {dashboard: any}) => {
        this.channels = data.dashboard;
      });
  }

}
