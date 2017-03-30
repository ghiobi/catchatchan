import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {SailsService} from "angular2-sails";
import {Router} from "@angular/router";

@Component({
  selector: 'aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  @Input() channels: any;
  friends: any = [
    1, 2, 3, 4, 5, 6, 7
  ];

  name = '';

  constructor(
    private sails: SailsService,
    private router: Router
  ) {
    this.sails.on('channel').subscribe((event) => {
      switch (event.verb) {
        case 'created':
          this.channels.push(event.data);
          break;
      }
    });
  }

  ngOnInit() {}

  selectChannel(channel) {
    this.router.navigate(['/dashboard/channel/', channel.id]);
  }

  createChannel(popover) {
    this.sails.post('/channel', {name: this.name}).subscribe((response) => {
      this.channels.push(response.data);
      this.name = '';
    })
  }

}
