import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ChannelComponent } from "./channel/channel.component";
import { DashboardResolver } from "./services/dashboard.resolver";
import { ChannelResolver } from "./services/channel.resolver";
import { WelcomeComponent } from "./channel/welcome/welcome.component";

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent,
    resolve: {
      dashboard: DashboardResolver
    },
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'channel/:id', component: ChannelComponent,
        resolve: {
          channel: ChannelResolver
        }
      }
    ]
  }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);