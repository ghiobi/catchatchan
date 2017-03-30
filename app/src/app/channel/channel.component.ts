import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {SailsService} from "angular2-sails";
import {ActivatedRoute, Params} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit, OnDestroy {

  channel: any;
  body: string = '';
  messages: any;

  constructor(
    private sails: SailsService,
    private route: ActivatedRoute,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: {channel: any}) => {
        this.channel = data.channel;
        this.messages = this.channel.messages;
      });

    this.sails.on('message').subscribe((event) => {
      switch (event.verb) {
        case 'created':
          if(event.data.channel == this.channel.id)
            this.messages.push(event.data);
          break;
        case 'destroyed':
          this.destroyMessage(event.previous);
          break;
      }
    });
  }

  message(){
    if (this.body) {
      let user = this.auth.getUser();
      this.sails.post('/message', {body: this.body, channel: this.channel.id, user: user.name }).subscribe((response) => {
        this.messages.push(response.data);
        this.body = '';
      });
    }
  }

  destroy(message) {
    this.sails.delete('/message/' + message.id).subscribe((response) => {
      this.destroyMessage(response.data)
    })
  }

  private destroyMessage(message) {
    for (let index in this.messages) {
      if (this.messages[index].id == message.id) {
        this.messages.splice(index, 1);
      }
    }
  }

  ngOnDestroy() {
    this.sails.get('/channel/leave/' + this.channel.id);
  }

}
