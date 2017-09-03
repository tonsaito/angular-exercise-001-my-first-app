import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AlertsComponent } from './alerts/alerts.component' 
import { AlertWarningComponent } from './alert-warning/alert-warning.component';
import { AlertAlarmComponent } from './alert-alarm/alert-alarm.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component'; 

@NgModule({
  declarations: [
    AppComponent, 
    ServerComponent, ServersComponent, AlertsComponent, AlertWarningComponent, AlertAlarmComponent, AlertSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
