import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AsideComponent } from './aside/aside.component';
import {SailsModule} from "angular2-sails";
import { ChannelComponent } from './channel/channel.component';
import {DashboardResolver} from "./services/dashboard.resolver";
import {ChannelResolver} from "./services/channel.resolver";
import { WelcomeComponent } from './channel/welcome/welcome.component';
import {AuthService} from "./services/auth.service";
import { ScrollDownDirective } from './directives/scroll-down.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    AsideComponent,
    ChannelComponent,
    WelcomeComponent,
    ScrollDownDirective
  ],
  imports: [
    NgbModule.forRoot(),
    SailsModule.forRoot(),
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [
    AuthService,
    DashboardResolver,
    ChannelResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
